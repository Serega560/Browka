<script setup>
import { onMounted } from "vue";

const DB_NAME = "imageCacheDB";
const STORE_NAME = "images";
const MAX_ITEMS = 100;           // Максимальное количество картинок в кэше
const MAX_AGE_DAYS = 7;          // Максимальный возраст кэша в днях

// Открытие IndexedDB
function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

// Сохранение картинки с хэшем и timestamp
function saveImageToDB(db, url, blob, hash) {
  const timestamp = Date.now();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);
    store.put({ blob, hash, timestamp }, url);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

// Получение картинки из DB
function getImageFromDB(db, url) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readonly");
    const store = tx.objectStore(STORE_NAME);
    const request = store.get(url);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

// Хэш Blob (SHA-256)
async function hashBlob(blob) {
  const arrayBuffer = await blob.arrayBuffer();
  const hashBuffer = await crypto.subtle.digest("SHA-256", arrayBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

// Очистка старых кэшей
async function cleanOldCache(db) {
  const allKeys = await new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readonly");
    const store = tx.objectStore(STORE_NAME);
    const req = store.getAllKeys();
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });

  const items = [];
  for (const key of allKeys) {
    const record = await getImageFromDB(db, key);
    items.push({ key, timestamp: record.timestamp });
  }

  const now = Date.now();
  const maxAgeMs = MAX_AGE_DAYS * 24 * 60 * 60 * 1000;

  const keysToDelete = items.filter(i => now - i.timestamp > maxAgeMs).map(i => i.key);

  const sorted = items.sort((a, b) => a.timestamp - b.timestamp);
  while (sorted.length - keysToDelete.length > MAX_ITEMS) {
    keysToDelete.push(sorted.shift().key);
  }

  if (keysToDelete.length === 0) return;

  await new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);
    keysToDelete.forEach(key => store.delete(key));
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

// Кэширование одной картинки
async function cacheImage(db, img) {
  const url = img.src;
  try {
    const res = await fetch(url);
    const blob = await res.blob();
    const newHash = await hashBlob(blob);

    const cached = await getImageFromDB(db, url);

    if (!cached || cached.hash !== newHash) {
      await saveImageToDB(db, url, blob, newHash);
    }

    img.src = URL.createObjectURL(blob);
  } catch (err) {
    // Игнорируем ошибки
  }
}

// Основная функция
onMounted(async () => {
  const db = await openDB();
  await cleanOldCache(db);

  // Кэшируем уже существующие <img>
  document.querySelectorAll("img").forEach(img => cacheImage(db, img));

  // MutationObserver для новых <img>
  const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
      mutation.addedNodes.forEach(node => {
        if (node.tagName === "IMG") {
          cacheImage(db, node);
        } else if (node.querySelectorAll) {
          node.querySelectorAll("img").forEach(img => cacheImage(db, img));
        }
      });
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
</script>

<template>
  <!-- Пустой компонент, ничего не отображаем -->
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

// Ссылка на DOM-элемент контейнера карты
const mapContainer = ref(null)
// Флаг, чтобы скрипт загрузился только один раз
let isScriptLoaded = false
// Переменная для хранения экземпляра карты
let mapInstance = null

// Функция инициализации самой карты
const initMap = () => {
  if (!window.ymaps) return

  window.ymaps.ready(() => {
    // Адаптивный зум
    const width = window.innerWidth
    let zoom = 11

    if (width <= 480) {
      zoom = 9
    } else if (width <= 767) {
      zoom = 10
    }

    // Создаем карту, привязываясь к ref-элементу
    mapInstance = new window.ymaps.Map(mapContainer.value, {
      center: [55.598, 37.655],
      zoom: zoom,
    })

    // Салон №1 — Островитянова, 11
    const salon1 = new window.ymaps.Placemark(
      [55.641193, 37.501690],
      {
        hintContent: 'Browka — Коньково',
        balloonContent:
          'Салон "Browka"<br>Москва, ул. Островитянова, дом 11, кабинет 21',
      }
    )

    // Салон №2 — Пригородное шоссе, 18
    const salon2 = new window.ymaps.Placemark(
      [55.555645, 37.808197],
      {
        hintContent: 'Browka — Пригород Лесное',
        balloonContent:
          'Салон "Browka"<br>Московская область,<br>Пригородное шоссе, дом 18',
      }
    )

    // Добавляем обе точки на карту
    mapInstance.geoObjects.add(salon1)
    mapInstance.geoObjects.add(salon2)
  })
}

// Функция загрузки скрипта Яндекса
const loadYandexMapsScript = () => {
  if (isScriptLoaded) return
  isScriptLoaded = true

  const script = document.createElement('script')
  // Ваш API-ключ вставлен сюда
  script.src =
    'https://api-maps.yandex.ru/2.1/?apikey=72942f59-b2b3-4869-aa54-3ecec4758b0a&lang=ru_RU'
  script.type = 'text/javascript'
  script.async = true

  script.onload = () => {
    initMap()
  }

  document.head.appendChild(script)
}

// Настройка отслеживания появления блока на экране
let observer = null

onMounted(() => {
  // Если браузер не поддерживает IntersectionObserver (очень старые), грузим сразу
  if (!window.IntersectionObserver) {
    loadYandexMapsScript()
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        // Как только карта появилась на экране — грузим скрипт и отключаем слежку
        loadYandexMapsScript()
        observer.disconnect()
      }
    },
    {
      rootMargin: '200px' // Начинаем грузить скрипт за 200px до появления карты (чтобы не было пустоты)
    }
  )

  if (mapContainer.value) {
    observer.observe(mapContainer.value)
  }
})

// Очистка при уничтожении компонента (если пользователь ушел со страницы)
onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect()
  }
  if (mapInstance) {
    mapInstance.destroy()
    mapInstance = null
  }
})
</script>

<template>
  <div class="map">
    <div class="container">
      <h2 class="map__title">Как найти салон</h2>

      <div class="map__block">
        <!-- Заменили id="map" на ref="mapContainer" для надежности -->
        <div ref="mapContainer" id="map"></div>

        <div class="map__content">
          <div class="map__address">
            <span class="map__number">1 салон</span>

            <p class="map__text">
              Москва, метро Коньково,<br>
              ул. Островитянова, 11
            </p>
          </div>

          <div class="map__address">
            <span class="map__number">2 салон</span>

            <p class="map__text">
              Московская область, метро Домодедовская,<br>
              выход 9, автобус 367Ш, 367П,<br>
              Пригород Лесное, Пригородное шоссе, 18
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;
@use '@/assets/styles/container.scss' as *;

.map {
  padding: 60px 0;
  background-color: var(--color-bright-grey);

  @include vp-767 {
    padding: 40px 0;
  }

  .map__title {
    color: var(--color-default-white);
    font-size: 36px;
    margin-bottom: 30px;
    text-align: center;
    text-transform: uppercase;

    @include vp-767 {
      font-size: 18px;
      margin-bottom: 20px;
    }
  }

  .map__block {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;

    #map {
      width: 100%;
      background-color: #e5e5e5;
      height: 600px;

      @include vp-767 {
        height: 400px;
      }
    }

    .map__content {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 60px;

      @include vp-767 {
        flex-direction: column;
        gap: 25px;
      }
    }

    .map__address {
      position: relative;
      flex: 1;
      max-width: 600px;
      padding: 25px 30px;
      text-align: center;

      opacity: 0;
      transform: translateY(20px);
      animation: map-address-show 0.7s ease forwards;

      &:nth-child(2) {
        animation-delay: 0.2s;
      }

      @include vp-767 {
        padding: 20px 10px;
      }
    }

    .map__number {
      display: block;
      margin-bottom: 12px;
      font-size: 22px;
      letter-spacing: 3px;
      color: var(--color-default-white);
      opacity: 0.5;
    }

    .map__text {
      margin: 0;
      font-size: 24px;
      line-height: 1.5;
      color: var(--color-default-white);
      text-align: center;

      transition: transform 0.5s ease;

      @include vp-767 {
        font-size: 16px;
        line-height: 1.5;
      }
    }

    .map__address + .map__address {
      border-left: 1px solid rgba(255, 255, 255, 0.25);

      @include vp-767 {
        border-left: none;
        border-top: 1px solid rgba(255, 255, 255, 0.25);
      }
    }
  }
}


// Эффект только для устройств с мышью
@media (min-width: 768px) {
  .map__address:hover .map__text {
    transform: scale(1.08);

    background: linear-gradient(
        90deg,
        #ff4d8d,
        #a855f7,
        #3b82f6,
        #22d3ee,
        #facc15,
        #ff4d8d
    );

    background-size: 400% auto;
    background-position: 0% center;

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    animation: map-text-color 6s ease-in-out infinite;
  }
}

// Плавное движение цветов
@keyframes map-text-color {
  0% {
    background-position: 0% center;
  }

  50% {
    background-position: 100% center;
  }

  100% {
    background-position: 0% center;
  }
}


// Появление адресов
@keyframes map-address-show {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

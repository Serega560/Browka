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
    mapInstance = new window.ymaps.Map('map', {
      center: [55.641193, 37.50169],
      zoom: 17
    })

    const placemark = new window.ymaps.Placemark([55.641193, 37.50169], {
      hintContent: 'Browka',
      balloonContent: 'Салон "Browka"'
    })

    mapInstance.geoObjects.add(placemark)
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
        <div id="map" ref="mapContainer"></div>
        <div class="map__content">
          <p class="map__text">
            г. Москва, м. Коньково, м. Университет дружбы народов, ул. Островитянова д. 11, вход
            "островок", кабинет 21
          </p>
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
      height: 600px;
      width: 100%;
      background-color: #e5e5e5;

      @include vp-767 {
        height: 400px;
      }
    }

    .map__content {
      .map__text {
        font-size: 34px;
        color: var(--color-default-white);
        text-align: center;

        @include vp-767 {
          font-size: 16px;
        }
      }
    }
  }
}
</style>

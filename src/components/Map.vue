<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  ymaps.ready(() => {
    const map = new ymaps.Map('map', {
      center: [55.641193, 37.501690],
      zoom: 17,
    })

    const placemark = new ymaps.Placemark([55.641193, 37.501690], {
      hintContent: 'Browka',
      balloonContent: 'Салон "Browka"',
    })

    map.geoObjects.add(placemark)
  })
})
</script>

<template>
  <div class="map">
    <div class="container">
      <h2 class="map__title">Как найти салон</h2>
      <div class="map__block">
        <div id="map"></div>
        <div class="map__content">
          <p class="map__text">г. Москва, м. Коньково, м. Университет дружбы народов, ул. Островитянова д. 11, вход "островок", кабинет 29</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;
@use '@/assets/styles/container.scss' as *;

.map{
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

  .map__block{
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;

    #map {
      height: 600px;
      width: 100%;

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

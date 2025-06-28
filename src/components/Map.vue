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
<<<<<<< HEAD
        <div id="map"></div>
        <div class="map__content">
          <p class="map__text">г. Москва, м. Коньково, м. Университет дружбы народов, ул. Островитянова д.&nbsp;11,&nbsp; вход&nbsp;&laquo;островок&raquo;, кабинет&nbsp;29</p>
=======
        <div id="map" style="width: 100%; height: 600px"></div>
        <div class="map__content">
          <p class="map__text">г. Москва, м. Коньково, м. Университет дружбы народов, ул. Островитянова д. 11, вход "островок", кабинет 29</p>
>>>>>>> 7f4ab995f0ae8a32996f6f57a82272b610e39322
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;
@use '@/assets/styles/container' as *;

.map{
  padding: 100px 0;
  background-color: var(--color-bright-grey);

  @include vp-767 {
    padding: 40px 0;
  }

  .map__title {
    color: var(--color-default-white);
    font-size: 45px;
    margin-bottom: 70px;
    text-align: center;
    text-transform: uppercase;

    @include vp-767 {
      margin-bottom: 25px;
<<<<<<< HEAD
      font-size: 24px;
=======
      font-size: 28px;
>>>>>>> 7f4ab995f0ae8a32996f6f57a82272b610e39322
    }
  }

  .map__block{
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;

<<<<<<< HEAD
    #map {
      height: 600px;
      width: 100%;

      @include vp-767 {
        height: 400px;
      }
    }

=======
>>>>>>> 7f4ab995f0ae8a32996f6f57a82272b610e39322
    .map__content {
      .map__text {
        font-size: 34px;
        color: var(--color-default-white);
        text-align: center;
<<<<<<< HEAD

        @include vp-767 {
          font-size: 20px;
        }
=======
>>>>>>> 7f4ab995f0ae8a32996f6f57a82272b610e39322
      }
    }
  }
}
</style>

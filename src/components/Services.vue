<script setup>

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import Button from '@/components/Button.vue'

const modules = [Autoplay]

const galleries = [
  {
    id: 1,
    title: 'Перманентный макияж бровей. Пудровое напыление',
    price: '7000Р',
    autoplayDelay: 3000,
    images: [
      'photo_1.1.jpg',
      'photo_1.2.jpg',
      'photo_1.3.jpg',
      'photo_1.4.jpg',
      'photo_1.5.jpg',
      'photo_1.6.jpg'
    ].map(name => ({
      webp1x: new URL(`../assets/img/services/${name}?format=webp&width=400`, import.meta.url).href,
      webp2x: new URL(`../assets/img/services/${name}?format=webp&width=800`, import.meta.url).href,
      fallback: new URL(`../assets/img/services/${name}?width=400`, import.meta.url).href
    }))
  },
  {
    id: 2,
    title: 'Перманентный макияж бровей. Аппаратные волоски',
    price: '9000Р',
    autoplayDelay: 3500,
    images: [
      'photo_2.1.jpg',
      'photo_2.2.jpg',
      'photo_2.3.jpg',
      'photo_2.4.jpg',
      'photo_2.5.jpg',
      'photo_2.6.jpg'
    ].map(name => ({
      webp1x: new URL(`../assets/img/services/${name}?format=webp&width=400`, import.meta.url).href,
      webp2x: new URL(`../assets/img/services/${name}?format=webp&width=800`, import.meta.url).href,
      fallback: new URL(`../assets/img/services/${name}?width=400`, import.meta.url).href
    }))
  },
  {
    id: 3,
    title: 'Перманентный макияж век',
    price: '7000Р',
    autoplayDelay: 3800,
    images: [
      'photo_3.1.jpg',
      'photo_3.2.jpg',
      'photo_3.3.jpg',
      'photo_3.4.jpg',
      'photo_3.5.jpg',
      'photo_3.6.jpg',
      'photo_3.7.jpg',
      'photo_3.8.jpg',
      'photo_3.9.jpg'
    ].map(name => ({
      webp1x: new URL(`../assets/img/services/${name}?format=webp&width=400`, import.meta.url).href,
      webp2x: new URL(`../assets/img/services/${name}?format=webp&width=800`, import.meta.url).href,
      fallback: new URL(`../assets/img/services/${name}?width=400`, import.meta.url).href
    }))
  },
  {
    id: 4,
    title: 'Перманентный макияж губ',
    price: '7000Р',
    autoplayDelay: 3300,
    images: [
      'photo_4.1.jpg',
      'photo_4.2.jpg',
      'photo_4.3.jpg',
      'photo_4.4.jpg',
      'photo_4.5.jpg',
      'photo_4.6.jpg',
      'photo_4.7.jpg'
    ].map(name => ({
      webp1x: new URL(`../assets/img/services/${name}?format=webp&width=400`, import.meta.url).href,
      webp2x: new URL(`../assets/img/services/${name}?format=webp&width=800`, import.meta.url).href,
      fallback: new URL(`../assets/img/services/${name}?width=400`, import.meta.url).href
    }))
  },
  {
    id: 5,
    title: 'Мини тату',
    price: '4000Р',
    autoplayDelay: 3500,
    images: [
      'photo_5.1.jpg',
      'photo_5.2.jpg',
      'photo_5.3.jpg',
      'photo_5.4.jpg',
      'photo_5.5.jpg',
      'photo_5.6.jpg',
      'photo_5.7.jpg'
    ].map(name => ({
      webp1x: new URL(`../assets/img/services/${name}?format=webp&width=400`, import.meta.url).href,
      webp2x: new URL(`../assets/img/services/${name}?format=webp&width=800`, import.meta.url).href,
      fallback: new URL(`../assets/img/services/${name}?width=400`, import.meta.url).href
    }))
  },
  {
    id: 6,
    title: 'Ламинирование бровей',
    price: '2000Р',
    autoplayDelay: 3000,
    images: [
      'photo_6.1.jpg',
      'photo_6.2.jpg',
      'photo_6.3.jpg',
      'photo_6.4.jpg',
      'photo_6.5.jpg'
    ].map(name => ({
      webp1x: new URL(`../assets/img/services/${name}?format=webp&width=400`, import.meta.url).href,
      webp2x: new URL(`../assets/img/services/${name}?format=webp&width=800`, import.meta.url).href,
      fallback: new URL(`../assets/img/services/${name}?width=400`, import.meta.url).href
    }))
  },
  {
    id: 7,
    title: 'Ламинирование ресниц.',
    price: '2500Р',
    autoplayDelay: 3000,
    images: [
      'photo_7.1.jpg',
      'photo_7.2.jpg',
      'photo_7.3.jpg',
      'photo_7.4.jpg',
      'photo_7.5.jpg'
    ].map(name => ({
      webp1x: new URL(`../assets/img/services/${name}?format=webp&width=400`, import.meta.url).href,
      webp2x: new URL(`../assets/img/services/${name}?format=webp&width=800`, import.meta.url).href,
      fallback: new URL(`../assets/img/services/${name}?width=400`, import.meta.url).href
    }))
  }
]

</script>

<template>
  <div class="services" id="services">
    <div class="container">
      <h2 class="services__title">Мои услуги</h2>
      <ul class="services__list">
        <li
          v-for="(item, id) in galleries"
          :key="item.id"
          class="services__item"
        >
          <div class="services__main">
            <div class="services__subtitle-price" :class="{ 'order-2': id % 2 === 1 }">
              <h3 class="services__subtitle">{{ item.title }}</h3>
              <div class="services__price-button">
                <p class="services__price">{{ item.price }}</p>
                <Button />
              </div>
            </div>

            <Swiper lazy="true"
                    :modules="modules"
                    :slides-per-view="3"
                    :loop="true"
                    :speed="1000"
                    :autoplay="{ delay: item.autoplayDelay, disableOnInteraction: false, pauseOnMouseEnter: false }"
                    :class="['services__swiper', { 'swiper--reversed': id % 2 === 1 }]"
                    :space-between="10"
                    :breakpoints="{
                      767: {slidesPerView: 2},
                      1440: {slidesPerView: 3}
                    }"
            >
              <SwiperSlide v-for="(image, idx) in item.images" :key="idx">
                <picture>
                  <source
                    :srcset="`${image.webp1x} 1x, ${image.webp2x} 2x`"
                    type="image/webp"
                  />
                  <img
                    :data-src="image.fallback"
                    width="300"
                    height="450"
                    alt="фото услуги"
                  />
                </picture>
                <div class="swiper-lazy-preloader"></div>
              </SwiperSlide>

            </Swiper>

          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;
@use '@/assets/styles/container.scss' as *;

.services {
  padding: 100px 0;

  @include vp-767 {
    padding: 40px 0;
  }

  .services__title {
    font-size: 45px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 70px;
    color: var(--color-bright-grey);

    @include vp-767 {
      font-size: 24px;
      margin-bottom: 25px;
    }
  }

  .services__list {
    display: flex;
    flex-direction: column;
    gap: 40px 0;

    .services__item {
      border: 1px solid var(--color-can-can);
      padding: 20px;
      box-shadow: 0 5px 5px var(--color-can-can);

      @include vp-767 {
        box-shadow: 0 1px 2px var(--color-electric-purple);
      }
    }

    .services__main {
      display: grid;
      grid-template-columns: auto auto;
      gap: 0 40px;

      @include vp-767 {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
      }
    }
  }

  .services__subtitle-price {
    display: flex;
    flex-wrap: wrap;
    font-size: 35px;
    font-weight: 600;
    justify-content: center;
    align-items: center;
    text-align: center;
    order: 1;
    width: 560px;

    @include vp-767 {
      width: 100%;
      justify-content: start;
      gap: 20px 0;
    }

    &.order-2 {
      order: 2;

      @include vp-767 {
        order: 1;
      }
    }

    .services__subtitle {
      font-size: 30px;
      width: 450px;
      text-transform: uppercase;
      color: var(--color-bright-grey);

      @include vp-767 {
        font-size: 22px;
        width: 100%;
        text-transform: inherit;
        font-weight: 400;
      }
    }

    .services__price-button {
      display: flex;
      gap: 0 35px;
      align-items: center;

      @include vp-767 {
        gap: 0 17px;
        justify-content: flex-end;
        width: 100%;
      }

      .services__price {
        color: var(--color-bright-grey);

        @include vp-767 {
          font-size: 20px;
          font-weight: 400;
          width: 80px;
          text-align: center;
        }
      }
    }
  }

  .services__swiper {
    order: 2;

    &.swiper--reversed {
      order: 1;
    }

    :deep(.swiper-wrapper) {
      @include vp-767 {
        gap: 0;
      }
    }

    :deep(.swiper-slide) {
      width: calc((100% - 20px) / 3) !important;

      @include vp-767 {
        width: calc((100% - 5px) / 2) !important;
      }
    }

    .services__slide--left {
      display: flex;
      order: 2;
    }

    img {
      object-fit: cover;
      width: 100%;
      border-radius: 20px;

      @include vp-767 {
        height: 220px;
        border-radius: 10px;
      }
    }
  }
}

</style>

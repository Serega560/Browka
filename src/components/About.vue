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
      'photo_1.6.jpg',
    ].map(name => ({
      webp1x: new URL(`../assets/img/${name}?format=webp&width=400`, import.meta.url).href,
      webp2x: new URL(`../assets/img/${name}?format=webp&width=800`, import.meta.url).href,
      original: new URL(`../assets/img/${name}`, import.meta.url).href,
    }))
  },
  {
    id: 2,
    title: 'Перманентный макияж бровей. Аппаратные волоски.',
    price: '9000Р',
    autoplayDelay: 3500,
    images: [
      'photo_2.1.jpg',
      'photo_2.2.jpg',
      'photo_2.3.jpg',
      'photo_2.4.jpg',
      'photo_2.5.jpg',
      'photo_2.6.jpg',
    ].map(name => ({
      webp1x: new URL(`../assets/img/${name}?format=webp&width=400`, import.meta.url).href,
      webp2x: new URL(`../assets/img/${name}?format=webp&width=800`, import.meta.url).href,
      original: new URL(`../assets/img/${name}`, import.meta.url).href,
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
      'photo_3.9.jpg',
    ].map(name => ({
      webp1x: new URL(`../assets/img/${name}?format=webp&width=400`, import.meta.url).href,
      webp2x: new URL(`../assets/img/${name}?format=webp&width=800`, import.meta.url).href,
      original: new URL(`../assets/img/${name}`, import.meta.url).href,
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
      'photo_4.7.jpg',
    ].map(name => ({
      webp1x: new URL(`../assets/img/${name}?format=webp&width=400`, import.meta.url).href,
      webp2x: new URL(`../assets/img/${name}?format=webp&width=800`, import.meta.url).href,
      original: new URL(`../assets/img/${name}`, import.meta.url).href,
    }))
  },
  {
    id: 5,
    title: 'Мини тату',
    price: '4000Р',
    autoplayDelay: 3500,
    images: [
      'photo_5.1.png',
      'photo_5.2.png',
      'photo_5.3.jpg',
      'photo_5.4.jpg',
      'photo_5.5.jpg',
      'photo_5.6.jpg',
      'photo_5.7.jpg',
      'photo_5.8.jpg',
    ].map(name => ({
      webp1x: new URL(`../assets/img/${name}?format=webp&width=400`, import.meta.url).href,
      webp2x: new URL(`../assets/img/${name}?format=webp&width=800`, import.meta.url).href,
      original: new URL(`../assets/img/${name}`, import.meta.url).href,
    }))
  },
  {
    id: 6,
    title: 'Ламинирование бровей и ресниц.',
    price: '3000Р',
    autoplayDelay: 3000,
    images: [
      'photo_6.5.jpg',
      'photo_6.6.jpg',
      'photo_6.3.png',
      'photo_6.4.jpg',
    ].map(name => ({
      webp1x: new URL(`../assets/img/${name}?format=webp&width=400`, import.meta.url).href,
      webp2x: new URL(`../assets/img/${name}?format=webp&width=800`, import.meta.url).href,
      original: new URL(`../assets/img/${name}`, import.meta.url).href,
    }))
  }
]

</script>

<template>
  <div class="about">
    <div class="container">
      <h2 class="about__title">Мои услуги</h2>
      <ul class="about__list">
        <li
          v-for="(item, id) in galleries"
          :key="id"
          class="about__item"
        >
          <div class="about__main">
            <div class="about__subtitle-price">
              <h3 class="about__subtitle">{{ item.title }}</h3>
              <p class="about__price">{{ item.price }}</p>

              <Button />

            </div>

            <Swiper class="about__swiper"
                    :modules="modules"
                    :slides-per-view="3"
                    :loop="true"
                    :speed="1000"
                    :autoplay="{ delay: item.autoplayDelay, disableOnInteraction: false, pauseOnMouseEnter: false }"
                    :class="{ 'about__slide--left': id % 2 === 1 }"
                    space-between="10"
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
                    :src="image.original"
                    width="300"
                    height="450"
                    alt="фото услуги"
                  />
                </picture>
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
@use '@/assets/styles/container' as *;

.about {
  padding: 100px 0;

  @include vp-767 {
    padding: 40px 0;
  }

  .about__title {
    font-size: 45px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 100px;
    color: var(--color-bright-grey);

    @include vp-767 {
      font-size: 28px;
      margin-bottom: 25px;
    }
  }

  .about__list {
    display: flex;
    flex-direction: column;
    gap: 40px 0;

    .about__item {
      border: 1px solid var(--color-can-can);
      padding: 20px;
      box-shadow: 0 5px 5px var(--color-can-can);

      @include vp-767 {
        box-shadow: 0 1px 2px var(--color-can-can);
      }
    }

    .about__main {
      display: grid;
      grid-template-columns: 560px auto;
      gap: 0 40px;

      @include vp-767 {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
      }
    }
  }

  .about__subtitle-price {
    display: flex;
    flex-wrap: wrap;
    font-size: 35px;
    font-weight: 600;
    gap: 0 20px;
    justify-content: center;

    @include vp-767 {
      width: 100%;
      gap: 10px 20px;
      justify-content: start;
    }

    .about__subtitle {
      font-size: 30px;
      width: 450px;
      text-transform: uppercase;
      color: var(--color-bright-grey);

      @include vp-767 {
        font-size: 16px;
        text-transform: inherit;
        width: 60%;
        font-weight: 400;
      }
    }

    .about__price {
      color: var(--color-bright-grey);

      @include vp-767 {
        font-size: 18px;
        font-weight: 400;
        width: 80px;
        text-align: center;
      }
    }
  }

  .about__swiper {

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

    .about__slide--left {
      display: flex;
      order: 2;
    }

    img {
      object-fit: cover;
      width: 100%;
      border-radius: 20px;

      @include vp-767 {
        height: 220px;
        width: auto;
        border-radius: 10px;
      }
    }
  }
}

</style>

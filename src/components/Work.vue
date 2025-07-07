<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCoverflow, Autoplay, Pagination} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

const modules = [Autoplay, Pagination, EffectCoverflow]

const images = [
  'photo_1.jpg',
  'photo_2.jpg',
  'photo_3.jpg',
  'photo_4.jpg',
  'photo_5.jpg',
  'photo_6.jpg',
  'photo_7.jpg',
  'photo_8.jpg',
  'photo_9.jpg',
  'photo_10.jpg',
  'photo_11.jpg',
  'photo_12.jpg',
  'photo_13.jpg',
  'photo_14.jpg',
  'photo_15.jpg',
  'photo_16.jpg',
  'photo_17.jpg',
  'photo_18.jpg',
  'photo_19.jpg',
  'photo_20.jpg',
  'photo_21.jpg',
  'photo_22.jpg',
  'photo_23.jpg',
  'photo_24.jpg',
  'photo_25.jpg',
  'photo_26.jpg',
  'photo_27.jpg'
].map(name => ({
  webp1x: new URL(`../assets/img/work/${name}?format=webp&width=400`, import.meta.url).href,
  fallback: new URL(`../assets/img/work/${name}?width=400`, import.meta.url).href
}))
</script>

<template>
  <div class="work" id="work">
    <div class="container">
      <h1 class="work__title">Работы</h1>

      <Swiper class="work__swiper"
              :modules="modules"
              effect="coverflow"
              :loop="true"
              :speed="800"
              :slides-per-view="3"
              :centered-slides="true"
              :lazy="true"
              :autoplay="{ delay: 3000, disableOnInteraction: false }"
              :grabCursor="true"
              :pagination="{
                el: '.custom-swiper-pagination',
                clickable: true
               }"
              :coverflowEffect="{
                rotate: 10,
                stretch: 70,
                depth: 100,
                modifier: 2,
              }"
              :space-between="10"
              :breakpoints="{
                320: {
                  slidesPerView: 'auto',
                  centeredSlides: true
                },
                576: {
                  slidesPerView: 'auto',
                  centeredSlides: true
                },
                1024: { slidesPerView: 3 },
                1440: { slidesPerView: 3 }
                }"
      >
        <SwiperSlide v-for="(image, idx) in images" :key="idx">
          <picture>
            <source
              :srcset="`${image.webp1x} 1x`"
              type="image/webp"
            />
            <img
              class="swiper-lazy"
              :data-src="image.fallback"
              width="300"
              height="450"
              alt="фото услуги"
            />
          </picture>
          <div class="swiper-lazy-preloader"></div>
        </SwiperSlide>

      </Swiper>

      <div class="custom-swiper-pagination"></div>

    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;
@use '@/assets/styles/container' as *;

.work {
  touch-action: manipulation;
  padding: 100px 0;

  @include vp-767 {
    padding: 40px 0;
  }

  .work__title {
    font-size: 45px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 50px;
    color: var(--color-bright-grey);

    @include vp-767 {
      font-size: 24px;
      margin-bottom: 25px;
    }
  }

  .work__swiper {
    width: 100%;

    :deep(.swiper-wrapper) {
      @include vp-767 {
        gap: 0;
      }
    }

    :deep(.swiper-slide) {
      width: 90%;
      display: flex;
      justify-content: center;

      img {
        width: 600px;
        object-fit: cover;
        border-radius: 20px;
        transition: transform 0.3s;

        @include vp-767 {
          width: 100%;
        }
      }
    }
  }

  .custom-swiper-pagination {
    margin-top: 50px;
    display: flex;
    justify-content: center;

    ::v-deep(.swiper-pagination-bullet) {
      width: 20px;
      height: 20px;
      background: var(--color-bright-grey);
      opacity: 1;
      margin: 0 6px;
      border-radius: 50%;
      transition: all 0.3s ease;
    }

    ::v-deep(.swiper-pagination-bullet-active) {
      background: var(--color-deep-pink);
      transform: scale(1.5);
    }

    :deep(.swiper-slide-active) {

      img {
        transform: scale(1.2);
      }
    }

    @include vp-767 {
      display: none;
    }
  }
}

</style>

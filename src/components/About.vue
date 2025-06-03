<script setup>

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import { ref, onMounted } from 'vue'
import Button from '@/components/Button.vue'

const swiperRef = ref(null)
onMounted(() => {
  if (swiperRef.value && swiperRef.value.swiper) {
    swiperRef.value.swiper.autoplay.start()
  }
})

const modules = [Autoplay]

const galleries = [
  {
    id: 1,
    title: 'Перманентный макияж бровей. Пудровое напыление',
    price: '7000p',
    autoplayDelay: 3000,
    images: [
      import.meta.env.BASE_URL + '/img/swiper-photo/photo_1.1.jpg',
      import.meta.env.BASE_URL + '/img/swiper-photo/photo_1.2.jpg',
      import.meta.env.BASE_URL + '/img/swiper-photo/photo_1.3.jpg',
      import.meta.env.BASE_URL + '/img/swiper-photo/photo_1.4.jpg',
      import.meta.env.BASE_URL + '/img/swiper-photo/photo_1.5.jpg',
      import.meta.env.BASE_URL + '/img/swiper-photo/photo_1.6.jpg'
    ]
  },
  {
    id: 2,
    title: 'Перманентный макияж бровей. Аппаратные волоски.',
    price: '9000p',
    autoplayDelay: 3500,
    images: [
      import.meta.env.BASE_URL + '/img/swiper-photo/photo_2.1.jpg',
      import.meta.env.BASE_URL + '/img/swiper-photo/photo_2.2.jpg',
      import.meta.env.BASE_URL + '/img/swiper-photo/photo_2.3.jpg',
      import.meta.env.BASE_URL + '/img/swiper-photo/photo_2.4.jpg',
      import.meta.env.BASE_URL + '/img/swiper-photo/photo_2.5.jpg',
      import.meta.env.BASE_URL + '/img/swiper-photo/photo_2.6.jpg'
    ]
  },
  {
    id: 3,
    title: 'Перманентный макияж век',
    price: '7000p',
    autoplayDelay: 3800,
    images: [
      import.meta.env.BASE_URL + '/img/swiper-photo/photo_3.1.jpg',
      import.meta.env.BASE_URL + '/img/swiper-photo/photo_3.2.jpg',
      import.meta.env.BASE_URL + '/img/swiper-photo/photo_3.3.jpg',
      import.meta.env.BASE_URL + '/img/swiper-photo/photo_3.4.jpg',
      import.meta.env.BASE_URL + '/img/swiper-photo/photo_3.5.jpg',
      import.meta.env.BASE_URL + '/img/swiper-photo/photo_3.6.jpg'
    ]
  },
  {
    id: 4,
    title: 'Перманентный макияж губ',
    price: '7000p',
    autoplayDelay: 3300,
    images: [
      import.meta.env.BASE_URL + '/img/swiper-photo/photo_4.1.jpg',
      import.meta.env.BASE_URL + '/img/swiper-photo/photo_4.2.jpg',
      import.meta.env.BASE_URL + '/img/swiper-photo/photo_4.3.jpg',
      import.meta.env.BASE_URL + '/img/swiper-photo/photo_4.4.jpg',
      import.meta.env.BASE_URL + '/img/swiper-photo/photo_4.5.jpg',
      import.meta.env.BASE_URL + '/img/swiper-photo/photo_4.6.jpg',
      import.meta.env.BASE_URL + '/img/swiper-photo/photo_4.7.jpg',
      import.meta.env.BASE_URL + '/img/swiper-photo/photo_4.8.jpg',
      import.meta.env.BASE_URL + '/img/swiper-photo/photo_4.9.jpg'
    ]
  },
  {
    id: 5,
    title: 'Мини тату',
    price: '4000p',
    autoplayDelay: 3500,
    images: [
      import.meta.env.BASE_URL + '/img/swiper-photo/photo_5.1.png',
      import.meta.env.BASE_URL + '/img/swiper-photo/photo_5.2.png',
      import.meta.env.BASE_URL + '/img/swiper-photo/photo_5.3.jpg',
      import.meta.env.BASE_URL + '/img/swiper-photo/photo_5.4.jpg',
      import.meta.env.BASE_URL + '/img/swiper-photo/photo_5.5.jpg',
      import.meta.env.BASE_URL + '/img/swiper-photo/photo_5.6.jpg',
      import.meta.env.BASE_URL + '/img/swiper-photo/photo_5.7.jpg',
      import.meta.env.BASE_URL + '/img/swiper-photo/photo_5.8.jpg'
    ]
  },
  {
    id: 6,
    title: 'Ламинирование бровей и ресниц.',
    price: '3000p',
    autoplayDelay: 3000,
    images: [
      import.meta.env.BASE_URL + '/img/swiper-photo/photo_6.1.png',
      import.meta.env.BASE_URL + '/img/swiper-photo/photo_6.2.png',
      import.meta.env.BASE_URL + '/img/swiper-photo/photo_6.3.png',
      import.meta.env.BASE_URL + '/img/swiper-photo/photo_6.4.jpg'
    ]
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
                    :autoplay="{ delay: item.autoplayDelay, disableOnInteraction: false, pauseOnMouseEnter: false }"
                    :speed="1000"
                    :class="{ 'about__slide--left': id % 2 === 1 }"
                    space-between="10"
                    :breakpoints="{
                      767: {slidesPerView: 2},
                      1440: {slidesPerView: 3}
                    }"
            >
              <SwiperSlide v-for="(image, idx) in item.images"
                           :key="idx">
                <img :src="image" width="300" height="450" alt="фото бровей" />
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
      gap: 10px;
      align-items: center;
    }

    .about__subtitle {
      font-size: 30px;
      width: 450px;
      text-transform: uppercase;

      @include vp-767 {
        font-size: 16px;
        text-transform: inherit;
        width: 100%;
        font-weight: 400;
        text-align: center;
      }
    }

    .about__price {
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

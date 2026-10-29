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
    title: 'Перманентный макияж бровей. Аппаратные волоски',
    price: '12 000 ₽',
    autoplayDelay: 3500,
    images: [
      'photo_2.1.jpg',
      'photo_2.2.jpg',
      'photo_2.3.jpg',
      'photo_2.4.jpg',
      'photo_2.5.jpg',
      'photo_2.6.jpg'
    ].map((name) => ({
      webp1x: new URL(`../assets/img/services/${name}?format=webp&width=400`, import.meta.url).href,
      webp2x: new URL(`../assets/img/services/${name}?format=webp&width=800`, import.meta.url).href,
      fallback: new URL(`../assets/img/services/${name}?width=400`, import.meta.url).href
    }))
  },
  {
    id: 2,
    title: 'Перманентный макияж бровей. Пудровое напыление',
    price: '8 000 ₽',
    autoplayDelay: 3000,
    images: [
      'photo_1.1.jpg',
      'photo_1.2.jpg',
      'photo_1.3.jpg',
      'photo_1.4.jpg',
      'photo_1.5.jpg',
      'photo_1.6.jpg'
    ].map((name) => ({
      webp1x: new URL(`../assets/img/services/${name}?format=webp&width=400`, import.meta.url).href,
      webp2x: new URL(`../assets/img/services/${name}?format=webp&width=800`, import.meta.url).href,
      fallback: new URL(`../assets/img/services/${name}?width=400`, import.meta.url).href
    }))
  },
  {
    id: 3,
    title: 'Перманентный макияж век',
    price: '8 000 ₽',
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
    ].map((name) => ({
      webp1x: new URL(`../assets/img/services/${name}?format=webp&width=400`, import.meta.url).href,
      webp2x: new URL(`../assets/img/services/${name}?format=webp&width=800`, import.meta.url).href,
      fallback: new URL(`../assets/img/services/${name}?width=400`, import.meta.url).href
    }))
  },
  {
    id: 4,
    title: 'Перманентный макияж губ',
    price: '8 000 ₽',
    autoplayDelay: 3300,
    images: [
      'photo_4.1.jpg',
      'photo_4.2.jpg',
      'photo_4.3.jpg',
      'photo_4.4.jpg',
      'photo_4.5.jpg',
      'photo_4.6.jpg',
      'photo_4.7.jpg'
    ].map((name) => ({
      webp1x: new URL(`../assets/img/services/${name}?format=webp&width=400`, import.meta.url).href,
      webp2x: new URL(`../assets/img/services/${name}?format=webp&width=800`, import.meta.url).href,
      fallback: new URL(`../assets/img/services/${name}?width=400`, import.meta.url).href
    }))
  },
  {
    id: 5,
    title: 'Мини тату',
    price: '4 000 ₽',
    autoplayDelay: 3500,
    images: [
      'photo_5.1.jpg',
      'photo_5.2.jpg',
      'photo_5.3.jpg',
      'photo_5.4.jpg',
      'photo_5.5.jpg',
      'photo_5.6.jpg',
      'photo_5.7.jpg'
    ].map((name) => ({
      webp1x: new URL(`../assets/img/services/${name}?format=webp&width=400`, import.meta.url).href,
      webp2x: new URL(`../assets/img/services/${name}?format=webp&width=800`, import.meta.url).href,
      fallback: new URL(`../assets/img/services/${name}?width=400`, import.meta.url).href
    }))
  },
  {
    id: 6,
    title: 'Ламинирование ресниц',
    price: '2 500 ₽',
    autoplayDelay: 3000,
    images: [
      'photo_7.1.jpg',
      'photo_7.2.jpg',
      'photo_7.3.jpg',
      'photo_7.4.jpg',
      'photo_7.5.jpg'
    ].map((name) => ({
      webp1x: new URL(`../assets/img/services/${name}?format=webp&width=400`, import.meta.url).href,
      webp2x: new URL(`../assets/img/services/${name}?format=webp&width=800`, import.meta.url).href,
      fallback: new URL(`../assets/img/services/${name}?width=400`, import.meta.url).href
    }))
  },
  {
    id: 7,
    title: 'Ламинирование бровей',
    price: '2 000 ₽',
    autoplayDelay: 3000,
    images: [
      'photo_6.1.jpg',
      'photo_6.2.jpg',
      'photo_6.3.jpg',
      'photo_6.4.jpg',
      'photo_6.5.jpg'
    ].map((name) => ({
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
      <div class="services__header">
        <h2 class="services__title">Услуги студии</h2>
        <p class="services__subtitle-text">Искусство перманентного макияжа и ухода</p>
      </div>

      <ul class="services__list">
        <li
          v-for="(item, id) in galleries"
          :id="`service-${item.id}`"
          :key="item.id"
          class="services__item"
        >
          <div class="services__main" :class="{ 'services__main--reversed': id % 2 === 1 }">

            <div class="services__info">
              <h3 class="services__item-title">{{ item.title }}</h3>

              <div class="services__action">
                <span class="services__price">{{ item.price }}</span>
                <Button />
              </div>
            </div>

            <Swiper
              lazy="true"
              :modules="modules"
              :slides-per-view="2"
              :loop="true"
              :speed="1000"
              :autoplay="{
                delay: item.autoplayDelay,
                disableOnInteraction: false,
                pauseOnMouseEnter: false
              }"
              class="services__swiper"
              :space-between="15"
              :breakpoints="{
                767: { slidesPerView: 2, spaceBetween: 10 },
                1440: { slidesPerView: 3 }
              }"
            >
              <SwiperSlide v-for="(image, idx) in item.images" :key="idx">
                <div class="services__image-wrapper">
                  <picture>
                    <source :srcset="`${image.webp1x} 1x, ${image.webp2x} 2x`" type="image/webp" />
                    <img :data-src="image.fallback" width="300" height="400" alt="Фото работы" />
                  </picture>
                  <div class="swiper-lazy-preloader"></div>
                </div>
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
  background-color: #faf9f8;

  @include vp-767 {
    padding: 60px 0;
  }

  .services__header {
    text-align: center;
    margin-bottom: 60px;

    @include vp-767 {
      margin-bottom: 40px;
    }
  }

  .services__title {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 500;
    font-size: 56px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--color-bright-grey);
    margin: 0 0 15px 0;

    @include vp-767 {
      font-size: 32px;
      letter-spacing: 1px;
    }
  }

  .services__subtitle-text {
    font-family: 'Cormorant Garamond', serif;
    font-size: 22px;
    font-style: italic;
    color: var(--color-mulberry);
    margin: 0;

    @include vp-767 {
      font-size: 18px;
    }
  }

  .services__list {
    display: flex;
    flex-direction: column;
    gap: 80px 0;

    @include vp-767 {
      gap: 50px 0;
    }

    .services__item {
      background: var(--color-default-white);
      border-radius: 30px;
      padding: 40px;
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.04);
      transition:
        transform 0.4s ease,
        box-shadow 0.4s ease;
      scroll-margin-top: 100px;

      @include vp-767 {
        padding: 20px;
        border-radius: 20px;
      }

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 50px rgba(219, 85, 151, 0.1);
      }
    }

    .services__main {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 50px;
      align-items: center;

      @include vp-767 {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      &--reversed {
        grid-template-columns: 1.5fr 1fr;

        @include vp-767 {
          display: flex;
          flex-direction: column;
        }

        .services__info {
          order: 2;
          text-align: right;
          align-items: flex-end;

          @include vp-767 {
            order: 1;
            text-align: left;
            align-items: flex-start;
          }
        }

        .services__action {
          justify-content: flex-end;
          @include vp-767 {
            justify-content: space-between;
          }
        }

        .services__swiper {
          order: 1;
          @include vp-767 {
            order: 2;
          }
        }
      }
    }
  }

  .services__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    .services__item-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: 36px;
      font-weight: 500;
      line-height: 1.2;
      color: var(--color-bright-grey);
      margin: 0 0 30px 0;

      @include vp-767 {
        font-size: 24px;
        margin-bottom: 20px;
      }
    }

    .services__action {
      display: flex;
      align-items: center;
      gap: 25px;

      @include vp-767 {
        justify-content: space-between;
        width: 100%;
      }

      .services__price {
        font-family: 'Cormorant Garamond', serif;
        font-size: 32px;
        font-weight: 500;
        color: var(--color-deep-pink);

        @include vp-767 {
          font-size: 24px;
        }
      }
    }
  }

  .services__swiper {
    width: 100%;
    border-radius: 20px;
    overflow: hidden;

    :deep(.swiper-wrapper) {
      height: 380px;

      @include vp-767 {
        height: 250px;
      }
    }

    :deep(.swiper-slide) {
      height: 100%;
      border-radius: 15px;
      overflow: hidden;
    }

    .services__image-wrapper {
      width: 100%;
      height: 100%;

      picture {
        display: block;
        width: 100%;
        height: 100%;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.6s ease;

        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }
}
</style>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { onMounted, ref } from 'vue'

const swiperRef = ref(null)
onMounted(() => {
  if (swiperRef.value && swiperRef.value.swiper) {
    swiperRef.value.swiper.autoplay.start()
  }
})

const reviews = [
  {
    idx: 1,
    name: 'Анна.',
    comment: 'Сделала у Екатерины татуаж бровей, очень понравилось. Очень аккуратный и старательный мастер!'
  },
  {
    idx: 2,
    name: 'Екатерина.',
    comment: 'Услугой довольна. Очень долго и придирчиво искала мастера т.к. был негативный опыт. ' +
      'Екатерина успокоила и подобрала форму. Процедура прошла в комфортной обстановке. Рекомендую!'
  },
  {
    idx: 3,
    name: 'Галина.',
    comment: 'Екатерина-отличный мастер! Делала у нее перманентный макияж бровей, осталась довольна!👍🏼 ' +
      'Видно, что грамотный и опытный мастер, отлично подобрала цвет, все объяснила, ответила на вопросы и дала рекомендации. ' +
      'У Екатерины легкая рука, процедура безболезненная. Однозначно рекомендую 🌺'
  },
  {
    idx: 4,
    name: 'Александра.',
    comment: 'Отличный мастер!\n' +
      'Сделала сразу 3 зоны! Получила за это еще приятную скидку!\n' +
      'Легкая рука, качественный и красивый ПМ всех моих трех зон-стрелки с растушевкой, губы-помадная техника, брови-комбо-волоски+тень.\n' +
      'Рекомендую 100!\n' +
      'Цены отличные, мастер прекрасный, место в студии тоже комфортное!'
  },
  {
    idx: 5,
    name: 'Елена.',
    comment: 'Работа Екатерины выполнена замечательно! Делала брови-волосковый татуаж. Брови выглядят как свои!'
  },
  {
    idx: 6,
    name: 'Оксана.',
    comment: 'Огромное спасибо Екатерине. Она воплотила мечту в реальность! ' +
      'У мастера золотые ручки, быстро, качественно и безболезненно . ' +
      'Сделала волосковый татуаж бровей, приятная атмосфера, спокойная обстановка в студии.\n' +
      'Отдельное спасибо, что нашли для меня местечко и время. ' +
      'Теперь жду коррекции и буду делать губки без опасения, что мне что-то может не понравится!☺️'
  },
  {
    idx: 7,
    name: 'Юлия.',
    comment: 'Огромное спасибо мастеру Екатерине и ее ручкам, мастерству спасибо. ' +
      'Всем понравилось! И почему я раньше не сделала губы!'
  }
]
</script>

<template>
  <div class="reviews">
    <div class="container">
      <h2 class="reviews--title">Отзывы</h2>
      <Swiper
        :loop="true"
        :speed="1000"
        :space-between="10"
        :breakpoints="{
          767: {slidesPerView: 1},
          1440: {slidesPerView: 3}
        }"
        class="reviews__swiper"
      >
        <SwiperSlide v-for="(review, idx) in reviews"
                     :key="idx"
                     class="review--slide"
        >
          <p class="reviews__name">{{ review.name }}</p>
          <p class="reviews__text">{{ review.comment }}</p>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;
@use '@/assets/styles/container.scss' as *;

.reviews {
  padding: 80px 0;
  background-color: var(--color-can-can);

  @include vp-767 {
    padding: 40px 0;
  }

  .reviews--title {
    font-size: 45px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 100px;
    color: var(--color-bright-grey);

    @include vp-767 {
      margin-bottom: 25px;
      font-size: 24px;
    }
  }

  .reviews__swiper {

    :deep(.swiper-slide) {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 30px 1fr;
      flex-direction: column;
      border: 1px solid var(--color-default-black);
      padding: 20px;
      min-height: 430px;
      background-color: var(--color-default-white);
      border-radius: 20px;
      flex-shrink: 0;
      box-sizing: border-box;

      @include vp-767 {
        padding: 10px;
        min-height: 220px;
        grid-template-rows: 22px 1fr;
      }
    }

    .reviews__name {
      font-size: 28px;
      height: min-content;

      @include vp-767 {
        font-size: 18px;
      }
    }

    .reviews__text {
      font-size: 24px;
      line-height: 32px;
      align-self: center;

      @include vp-767 {
        font-size: 16px;
        line-height: 18px;
      }
    }
  }
}

</style>

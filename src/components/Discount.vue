<script setup>
import Button from '@/components/Button.vue'
import { computed, watch, ref } from 'vue'

const isOpen = ref(false)

// Следим за изменением состояния попапа
watch(isOpen, (newVal) => {
  if (newVal) {
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = scrollBarWidth + 'px'
  } else {
    document.body.style.overflow = ''
    document.body.style.paddingRight = ''
  }
})

const emit = defineEmits(['close'])

const services = ref([
  { name: 'Перманентный макияж бровей. Пудровое напыление: ', price: 7000, selected: false },
  { name: 'Перманентный макияж бровей. Аппаратные волоски: ', price: 9000, selected: false },
  { name: 'Перманентный макияж век: ', price: 7000, selected: false },
  { name: 'Перманентный макияж губ: ', price: 7000, selected: false },
  { name: 'Мини тату: ', price: 4000, selected: false },
  { name: 'Ламинирование бровей и ресниц: ', price: 7000, selected: false }
])

const selectedCount = computed(() =>
  services.value.filter(service => service.selected).length
)

const discount = computed(() => {
  if (selectedCount.value >= 3) return 15
  if (selectedCount.value === 2) return 10
  return 0
})

const totalPrice = computed(() =>
  services.value
    .filter(service => service.selected)
    .reduce((sum, service) => sum + service.price, 0)
)

const discountedPrice = computed(() =>
  Math.round(totalPrice.value * (1 - discount.value / 100))
)

const closePopup = () => {
  isOpen.value = false
  emit('close')
}
</script>

<template>
  <div v-if="isOpen" class="discount-overlay" @click.self="closePopup">
    <div class="discount">
      <button class="discount__close" @click="closePopup">✖</button>
      <h2 class="discount__title">Выберите услуги</h2>
      <div class="discount__block">
        <p>*При выборе двух услуг скидка 10%</p>
        <p>*При выборе трех услуг скидка 15%</p>
      </div>
      <ul class="discount__list">
        <li class="discount__item" v-for="(service, index) in services" :key="index">
          <label class="discount__checkbox" :for="'service-' + index">
            <input
              type="checkbox"
              :id="'service-' + index"
              v-model="service.selected"
            >
            {{ service.name }}
          </label>
          <span>{{ service.price }}₽</span>
        </li>
      </ul>

      <div class="discount__info">
        <p>Выбрано услуг: {{ selectedCount }}</p>
        <p>Скидка: {{ discount }}%</p>
      </div>

      <div class="discount__price-button">
        <div class="discount__total">Итоговая цена: {{ discountedPrice }}₽</div>
        <Button />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;

.discount-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  inset: 0;
}

.discount {
  background-color: var(--color-bright-grey);
  width: 60%;
  padding: 30px;
  color: var(--color-default-white);
  position: relative;
  margin: auto;

  @include vp-767 {
    width: 80%;
    padding: 15px 15px 40px;
  }

  .discount__close {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    color: var(--color-default-white);
    font-size: 24px;
    cursor: pointer;

    @include vp-767 {
      font-size: 18px;
    }
  }

  .discount__title {
    text-align: center;
    margin-bottom: 20px;
    font-size: 32px;

    @include vp-767 {
      font-size: 24px;
    }
  }

  .discount__block {
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    gap: 7px 0;

    @include vp-767 {
      font-size: 16px;
    }
  }

  .discount__list {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;

    @include vp-767 {
      gap: 10px;
    }

    .discount__item {
      width: 80%;

      .discount__checkbox {
        transition: color .3s ease-in-out;

        input {
          width: 17px;
          height: 17px;

          @include vp-767 {
            width: 15px;
            height: 15px;
          }
        }

        &:hover {
          color: var(--color-mulberry);
          cursor: pointer;

          @include vp-767 {
            color: var(--color-default-white);
          }
        }
      }
    }
  }

  .discount__info {
    display: flex;
    gap: 0 20px;
    margin-bottom: 25px;

    @include vp-767 {
      justify-content: center;
    }
  }

  .discount__price-button {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    font-size: 28px;
    gap: 20px;

    @include vp-767 {
      font-size: 24px;
      justify-content: flex-end;
    }
  }
}

</style>

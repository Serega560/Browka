<script setup>
import Button from '@/components/Button.vue'
import { ref, computed, watch } from 'vue'

const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])

// Блокируем прокрутку при открытом попапе
watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = scrollBarWidth + 'px'
  } else {
    document.body.style.overflow = ''
    document.body.style.paddingRight = ''
  }
})

const services = ref([
  { name: 'Перманентный макияж бровей. Аппаратные волоски: ', price: 10000, selected: false },
  { name: 'Перманентный макияж бровей. Пудровое напыление: ', price: 8000, selected: false },
  { name: 'Перманентный макияж век: ', price: 8000, selected: false },
  { name: 'Перманентный макияж губ: ', price: 7000, selected: false },
  { name: 'Мини тату: ', price: 4000, selected: false },
  { name: 'Ламинирование ресниц: ', price: 2500, selected: false },
  { name: 'Ламинирование бровей: ', price: 2000, selected: false },
  { name: 'Окрашивание бровей, ресниц, коррекция: ', price: 1300, selected: false },
])

const mainServices = computed(() => services.value.slice(0, 4))
const extraServices = computed(() => services.value.slice(4))

const selectedMainCount = computed(() =>
  mainServices.value.filter(s => s.selected).length
)

const discount = computed(() => {
  if (selectedMainCount.value >= 3) return 11
  if (selectedMainCount.value === 2) return 7
  return 0
})

const fullPrice = computed(() =>
  services.value
    .filter(s => s.selected)
    .reduce((sum, s) => sum + s.price, 0)
)

const discountedPrice = computed(() => {
  const totalMain = mainServices.value
    .filter(s => s.selected)
    .reduce((sum, s) => sum + s.price, 0)

  const totalExtra = extraServices.value
    .filter(s => s.selected)
    .reduce((sum, s) => sum + s.price, 0)

  const discountedMain = Math.round(totalMain * (1 - discount.value / 100))
  return discountedMain + totalExtra
})

const closePopup = () => {
  emit('close')

}
</script>
<template>
  <div v-if="props.isOpen" class="discount-overlay" @click.self="closePopup">
    <div class="discount">
      <button class="discount__close" @click="closePopup">✖</button>
      <h2 class="discount__title">Выберите услуги</h2>
      <div class="discount__block">
        <p>* Выгодное предложение на перманентный макияж</p>
        <p>* Две зоны в один день/ три зоны в один день</p>
      </div>

      <ul class="discount__list">
        <li class="discount__item" v-for="(service, index) in services" :key="index">
          <label class="discount__label" :for="'service-' + index">
            <input
              class="discount__checkbox"
              type="checkbox"
              :id="'service-' + index"
              v-model="service.selected"
            >
            <span class="discount__checkbox-box">
              <svg
                :class="{ visible: service.selected }"
                viewBox="0 0 24 24"
                width="12"
                height="12"
                fill="none"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span class="discount__text">{{ service.name }}</span>
            <span class="discount__price">{{ service.price }}₽</span>
          </label>
        </li>
      </ul>

      <div class="discount__info">
        <p v-if="discount > 0">
          Было: <s>{{ fullPrice }}₽</s>
        </p>
        <p>
          Итог: <strong>{{ discountedPrice }}₽</strong>
        </p>
        <p v-if="discount > 0">
          Экономия: {{ fullPrice - discountedPrice }}₽
        </p>
      </div>

      <div class="discount__price-button">
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
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  inset: 0;
}

.discount {
  background: linear-gradient(13deg, #5b5e64, #d27ea7);
  width: 60%;
  padding: 30px;
  color: var(--color-default-white);
  position: relative;
  margin: auto;

  @include vp-767 {
    width: 90%;
    padding: 15px 15px 40px;
    border-radius: 17px;
  }

  .discount__close {
    position: absolute;
    top: 17px;
    right: 17px;
    background: none;
    border: none;
    color: var(--color-default-white);
    font-size: 24px;
    cursor: pointer;

    @include vp-767 {
      font-size: 18px;
      top: 3px;
      right: 3px;
    }
  }

  .discount__title {
    text-align: center;
    margin-bottom: 20px;
    font-size: 32px;

    @include vp-767 {
      font-size: 24px;
      margin-bottom: 15px;
    }
  }

  .discount__block {
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    gap: 7px 0;

    @include vp-767 {
      font-size: 16px;
      gap: 1px 0;
      margin-bottom: 20px;
    }
  }

  .discount__list {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-bottom: 25px;

    @include vp-767 {
      gap: 11px;
    }

    .discount__item {
      width: 80%;

      @include vp-767 {
        width: 100%;
      }

      .discount__label {
        display: flex;
        align-items: center;
        cursor: pointer;
        gap: 10px;
        transition: color .3s ease-in-out;

        @include vp-767 {
          gap: 5px;
        }

        .discount__checkbox {
          position: absolute;
          opacity: 0;
          pointer-events: none;
        }

        .discount__checkbox-box {
          width: 17px;
          height: 17px;
          border: 1px solid var(--color-default-white);
          border-radius: 4px;
          background-color: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color .2s ease, border-color .2s ease;

          @include vp-767 {
            width: 15px;
            height: 15px;
          }

          svg {
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.2s ease;
          }

          svg.visible {
            opacity: 1;
            visibility: visible;
          }
        }

        .discount__text {
          width: 100%;
          font-size: 22px;

          @include vp-767 {
            font-size: 15px;
          }
        }

        .discount__price {
          align-self: end;
          font-size: 22px;

          @include vp-767 {
            font-size: 17px;
          }
        }

        .discount__checkbox:checked + .discount__checkbox-box {
          background-color: var(--color-mulberry);
          border-color: var(--color-mulberry);
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

</style>

<script setup>
import WhatsappIcon from '@/assets/icons/whatsapp.svg'
import Vk from '@/assets/icons/vk.svg'
import Max from '@/assets/icons/max.svg'

defineProps({
  position: {
    type: String,
    default: 'header',
    validator: (value) => ['header', 'footer'].includes(value)
  }
})
</script>

<template>
  <ul :class="['social', `social--${position}`]">
    <li class="social__item social__item--telegram">
      <a href="https://t.me/katerina_browka" aria-label="Написать в Telegram">
        <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
          <use xlink:href="#icon-telegram" />
        </svg>
      </a>
    </li>

    <!-- <li class="social__item social__item--whatsapp">
      <a href="https://wa.me/79261283908" target="_blank" aria-label="Написать в WhatsApp">
        <WhatsappIcon aria-hidden="true" />
      </a>
    </li> -->

    <li class="social__item social__item--vk">
      <a href="https://vk.com/ekaterinabrowka" aria-label="Перейти в группу ВКонтакте">
        <Vk aria-hidden="true" />
      </a>
    </li>
    <li class="social__item social__item--vk">
      <a
        href="https://max.ru/u/f9LHodD0cOI6yVrVjwFwbJ9wOL3A4at8gGEnfsTC9-M-c_ZwOR_lK_ANRDg"
        aria-label="Написать в Max"
      >
        <Max aria-hidden="true" />
      </a>
    </li>
  </ul>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;

.social {
  display: flex;
  gap: 0 12px;
  align-items: center;

  .social__item {
    cursor: pointer;

    a {
      display: flex;
      padding: 0;
      color: var(--color-bright-grey);
      transition:
        color 0.3s ease,
        transform 0.3s ease-in-out;

      svg {
        width: 35px;
        height: 35px;
      }

      /* Эффект только для мыши */
      @media (hover: hover) and (pointer: fine) {
        &:hover {
          color: var(--color-mulberry);
          transform: scale(1.1);
        }
      }

      /* ЖЕСТКО отменяем эффекты для мобильных */
      @include vp-767 {
        &:hover,
        &:active {
          transform: none !important;
          color: var(--color-bright-grey) !important;
        }
      }
    }
  }

  &--header {
    @include vp-767 {
      gap: 0 8px;
      order: -1;
    }
  }

  &--footer {
    @include vp-767 {
      order: 0;
      flex-direction: column;
      gap: 15px 0;
      margin-top: 5px;
      align-self: flex-start;
    }

    .social__item a {
      @media (hover: hover) and (pointer: fine) {
        &:hover {
          color: var(--color-mulberry);
        }
      }

      /* ЖЕСТКО отменяем эффекты для мобильных в футере */
      @include vp-767 {
        &:hover,
        &:active {
          transform: none !important;
        }
      }
    }
  }
}
</style>

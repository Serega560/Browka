<script setup>
import Vk from '@/assets/icons/vk.svg'
import Max from '@/assets/icons/max.svg'

defineProps({
  variant: {
    type: String,
    default: 'solid'
  }
})
</script>

<template>
  <div class="button-wrapper" :class="`button-wrapper--${variant}`">
    <a href="https://t.me/ekaterina_browka" class="button">Записаться</a>

    <div class="button-socials">
      <a href="https://t.me/katerina_browka" target="_blank" aria-label="Telegram">
        <svg width="28" height="28" viewBox="0 0 30 30" aria-hidden="true">
          <use xlink:href="#icon-telegram" />
        </svg>
      </a>
      <a
        href="https://max.ru/u/f9LHodD0cOI6yVrVjwFwbJ9wOL3A4at8gGEnfsTC9-M-c_ZwOR_lK_ANRDg"
        target="_blank"
        aria-label="Max"
      >
        <Max aria-hidden="true" />
      </a>
      <a href="https://vk.com/ekaterinabrowka" target="_blank" aria-label="VK">
        <Vk aria-hidden="true" />
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;

.button-wrapper {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 25px;
    z-index: 5;
    display: none;
    @media (hover: hover) and (pointer: fine) {
      display: block;
    }
  }

  .button {
    display: flex;
    width: 280px;
    border: 1px solid var(--color-bright-grey);
    cursor: pointer;
    padding: 10px 20px;
    background-color: var(--color-bright-grey);
    transition:
      background-color 0.3s ease,
      color 0.3s ease,
      border-color 0.3s ease;
    color: var(--color-default-white);
    height: min-content;
    font-size: 24px;
    align-items: center;
    justify-content: center;

    @include vp-767 {
      font-size: 18px;
      padding: 5px 10px;
      width: 180px;
      border-radius: 5px;
    }

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        background-color: var(--color-mulberry);
        border-color: var(--color-mulberry);
      }
    }

    &:active {
      background-color: var(--color-deep-pink);
      border-color: var(--color-deep-pink);

      @include vp-767 {
        background-color: var(--color-bright-grey);
        border-color: var(--color-bright-grey);
      }
    }
  }

  /* МОДИФИКАТОР ДЛЯ ТЕКСТОВОЙ КНОПКИ (БЕЗ ФОНА) */
  &--text {
    .button {
      background-color: transparent;
      color: var(--color-bright-grey);
      border: none;
      outline: none;
      font-size: 34px;
      padding: 10px 20px;
      width: auto;

      @include vp-767 {
        font-size: 18px;
        padding: 7px 15px;
        width: auto;
      }

      @media (hover: hover) and (pointer: fine) {
        &:hover {
          background-color: transparent;
          color: var(--color-mulberry);
        }
      }

      &:active {
        background-color: transparent;
        color: var(--color-mulberry);
        @include vp-767 {
          color: var(--color-bright-grey);
        }
      }
    }

    /* ПРИБЛИЖАЕМ ИКОНКИ И ДОБАВЛЯЕМ ФОН ТОЛЬКО В ШАПКЕ */
    .button-socials {
      padding-top: 8px;

      /* Стили для круглого полупрозрачного фона вокруг иконок */
      a {
        background-color: rgba(255, 255, 255, 0.8); /* Белый прозрачный фон */
        border-radius: 50%; /* Делаем круглыми */
        padding: 6px; /* Отступ внутри круга */
        backdrop-filter: blur(4px); /* Легкое размытие фона позади (эффект стекла) */
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05); /* Легкая тень для объема */

        @media (hover: hover) and (pointer: fine) {
          &:hover {
            background-color: rgba(255, 255, 255, 1); /* При наведении делаем полностью белым */
          }
        }

        svg {
          width: 35px;
          height: 35px;
          display: block; /* Убираем лишние отступы у svg */
        }
      }
    }

    /* Уменьшаем высоту мостика, чтобы он соответствовал новому отступу */
    &::after {
      height: 8px;
    }
  }

  .button-socials {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(-10px);
    display: flex;
    gap: 18px; /* Чуть увеличили отступ между иконками */
    margin-top: 10px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    z-index: 10;

    @include vp-767 {
      display: none;
    }

    a {
      display: flex;
      color: var(--color-bright-grey);
      transition:
        color 0.3s ease,
        transform 0.3s ease;

      svg {
        width: 35px;
        height: 35px;
      }

      @media (hover: hover) and (pointer: fine) {
        &:hover {
          color: var(--color-mulberry);
          transform: translateY(-3px) scale(1.1);
        }
      }
    }
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      .button-socials {
        opacity: 1;
        visibility: visible;
        transform: translateX(-50%) translateY(0);
      }
    }
  }
}
</style>

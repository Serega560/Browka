<script setup>
import Button from '@/components/Button.vue'
import Vk from '@/assets/icons/vk.svg'
import Max from '@/assets/icons/max.svg'
import { ref, onMounted, onUnmounted, inject, watch } from 'vue'

const openDiscountPopup = inject('openDiscountPopup')
const isMenuOpen = ref(false)
const isDesktop = ref(window.innerWidth > 767)
const menuRef = ref(null)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function onResize() {
  isDesktop.value = window.innerWidth > 767
  if (isDesktop.value) {
    isMenuOpen.value = false
  }
}

function handleClickOutside(event) {
  if (isMenuOpen.value && menuRef.value && !menuRef.value.contains(event.target)) {
    isMenuOpen.value = false
  }
}

function closeMenu() {
  isMenuOpen.value = false
}

watch(isMenuOpen, (newVal) => {
  if (!isDesktop.value) {
    if (newVal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
})

onMounted(() => {
  window.addEventListener('resize', onResize)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
  document.removeEventListener('click', handleClickOutside)
  document.body.style.overflow = ''
})

defineProps({
  inFooter: {
    type: Boolean,
    default: false
  }
})

const menuItems = [
  { label: 'Услуги', href: '#services' },
  { label: 'Работы', href: '#work' },
  { label: 'Расчет стоимости' }
]
</script>

<template>
  <nav class="header__menu menu">
    <button
      class="menu__button"
      :class="{ active: isMenuOpen }"
      @click.stop="toggleMenu"
      v-if="!inFooter"
      :aria-label="isMenuOpen ? 'Закрыть меню' : 'Открыть меню'"
      :aria-expanded="isMenuOpen"
    >
      <span class="menu__span"></span>
      <span></span>
      <span class="menu__span"></span>
    </button>

    <transition name="menu">
      <ul
        ref="menuRef"
        class="menu__list"
        :class="{ 'menu__list--footer': inFooter }"
        v-show="inFooter ? true : isMenuOpen || isDesktop"
      >
        <li v-for="(item, index) in menuItems" :key="index" class="menu__item">
          <button
            v-if="item.label === 'Расчет стоимости'"
            class="menu__link"
            type="button"
            @click="
              () => {
                openDiscountPopup()
                closeMenu()
              }
            "
          >
            {{ item.label }}
          </button>
          <a v-else class="menu__link" :href="item.href" @click="closeMenu">
            {{ item.label }}
          </a>
        </li>

        <li class="menu__item menu__item--button" v-if="!inFooter">
          <Button variant="text" />
        </li>

        <li class="menu__socials" v-if="!inFooter">
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
        </li>
      </ul>
    </transition>
  </nav>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;

.menu {
  .menu__button {
    display: none;
    transition: top 0.3s ease-in-out;

    @include vp-767 {
      display: flex;
      flex-direction: column;
      width: 44px;
      border: none;
      gap: 9px 0;
      cursor: pointer;
      background-color: transparent;
      padding: 8px 0;
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 100;

      span {
        background-color: var(--color-can-can);
        width: 44px;
        height: 2px;
        border-radius: 1px;
        transition: all 0.3s ease-in-out;
        transform-origin: center;
        align-self: center;
      }

      .menu__span {
        width: 34px;
      }
    }

    /* Анимация превращения в крестик */
    &.active {
      transform: translateY(-50%);
      span:nth-child(1) {
        transform: translateY(11px) rotate(45deg);
      }
      span:nth-child(2) {
        opacity: 0;
      }
      span:nth-child(3) {
        transform: translateY(-11px) rotate(-45deg);
      }
    }
  }

  .menu__list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 0 25px;

    @include vp-767 {
      display: flex;
      flex-direction: column;
      position: absolute;
      width: 100%;
      height: 100vh;
      align-items: center;
      gap: 0;
      left: 0;
      top: 0;
      text-align: center;
      background: linear-gradient(180deg, #ffffff 0%, #f8e6ef 100%);
      padding: 100px 20px 40px; /* Увеличили верхний отступ, чтобы не наезжать на крестик */
      z-index: 90; /* Чуть ниже бургера, чтобы крестик был кликабельным */
    }

    .menu__item {
      display: flex;
      width: auto;
      justify-content: center;

      @include vp-767 {
        width: 100%;
        padding: 15px 0;
      }
    }

    /* Кнопка Записаться */
    .menu__item--button {
      display: flex;
      justify-content: center;

      @include vp-767 {
        width: 100%;
        margin-left: 0;
        margin-top: 10px;
        padding-bottom: 20px;
        max-width: 320px;
      }

      :deep(.button-wrapper) {
        display: flex;
        justify-content: center;
        width: 100%;

        .button {
          font-size: 34px;
          font-weight: 400;
          font-family: inherit;
          color: var(--color-bright-grey);
          line-height: normal;
          padding: 0;

          @include vp-767 {
            font-size: 24px;
            width: auto;
          }

          &:active {
            color: var(--color-mulberry);
          }
        }
      }
    }
    .menu__socials {
      display: none;
      width: 100%;

      @include vp-767 {
        display: flex;
        justify-content: center;
        gap: 15px;
        margin-top: auto;
        padding-top: 10px;
        margin-bottom: 70px;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
      }

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 44px;
        height: 44px;
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 50%;
        color: var(--color-bright-grey);
        transition: all 0.3s ease;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

        &:active {
          background-color: var(--color-mulberry);
          color: white;
        }

        svg {
          width: 24px;
          height: 24px;
        }
      }
    }

    .menu__link {
      font-size: 34px;
      padding: 0;
      color: var(--color-bright-grey);
      background-color: inherit;
      border: none;
      transition: color 0.3s ease-in-out;
      text-align: left;
      width: auto;

      @include vp-767 {
        font-size: 24px;
        color: var(--color-bright-grey);
        text-align: center;
        width: 100%;
      }

      &:hover {
        cursor: pointer;
        color: var(--color-mulberry);

        @include vp-767 {
          color: var(--color-bright-grey);
        }
      }
    }
  }

  /* Футер */
  .menu__list--footer {
    all: unset;
    display: flex;
    list-style: none;
    gap: 12px;

    @include vp-767 {
      flex-direction: column;
      gap: 5px;
    }

    .menu__item {
      padding: 5px 0;

      .menu__link {
        color: white;
        font-size: 34px;
        align-self: flex-start;

        @include vp-767 {
          font-size: 18px;
          width: 85px;
          text-align: center;
          padding: 5px 15px;
        }

        &:hover {
          cursor: pointer;
          color: var(--color-mulberry);

          @include vp-767 {
            color: var(--color-default-white);
          }
        }
      }
    }
  }
}

/* Анимации */
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
.menu-enter-to,
.menu-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.menu-enter-active,
.menu-leave-active {
  transition:
    opacity 0.4s ease,
    transform 0.4s ease;
}
</style>

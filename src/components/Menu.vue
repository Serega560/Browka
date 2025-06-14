<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const isDesktop = ref(window.innerWidth > 767)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

// Обработчик изменения размера окна, чтобы обновлять isDesktop
function onResize() {
  isDesktop.value = window.innerWidth > 767

  // Если переключились на десктоп, принудительно показываем меню
  if (isDesktop.value) {
    isMenuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
})

defineProps({
  inFooter: {
    type: Boolean,
    default: false
  }
})

const menuItems = [
  { label: 'Услуги', href: '#' },
  { label: 'Работы', href: '#' },
  { label: 'Расчет стоимости', href: '#' },
  { label: 'Записаться', href: '#' }
]
</script>

<template>
  <nav class="header__menu menu">
    <button
      class="menu__button"
      :class="{ active: isMenuOpen }"
      @click="toggleMenu"
      v-if="!inFooter"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <transition name="menu">
      <ul
        class="menu__list"
        :class="{ 'menu__list--footer': inFooter }"
        v-show="inFooter ? true : (isMenuOpen || isDesktop)">
        <li
          v-for="(item, index) in menuItems"
          :key="index"
          class="menu__item"
        >
          <a class="menu__link" :href="item.href">{{ item.label }}</a>
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
      width: 100%;
      border: none;
      gap: 12px 0;
      cursor: pointer;
      background-color: transparent;
      padding: 8px 0;
      order: 0;

      span {
        background-color: var(--color-can-can);
        width: 44px;
        height: 2px;
        border-radius: 1px;
        transition: all 0.3s ease-in-out;
        transform-origin: center;
      }
    }

    &.active {
      span:nth-child(1) {
        transform: translateY(14px) rotate(45deg);
      }

      span:nth-child(2) {
        opacity: 0;
      }

      span:nth-child(3) {
        transform: translateY(-13px) rotate(-45deg);
      }
    }
  }


  .menu__list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 0 15px;

    @include vp-767 {
      display: flex;
      position: absolute;
      width: 41%;
      flex-direction: column;
      gap: 15px 0;
      right: 0;
      top: 68px;
      text-align: right;
      border-top: 1px solid var(--color-default-white);
      border-bottom: 1px solid var(--color-default-white);
      background-color: var(--color-bright-grey);
      height: 401px;
      padding: 30px 0;
    }

    .menu__link {
      font-size: 34px;
      padding: 10px 20px;
      color: var(--color-default-white);

      @include vp-767 {
        font-size: 28px;
        color: var(--color-default-white);
      }

      &:hover {
        cursor: pointer;
        color: var(--color-mulberry);
        transform: scale(1.1);

        @include vp-767 {
          color: var(--color-default-white);
          transform: scale(1);
        }
      }
    }
  }
  .menu__list--footer {
    all: unset;
    display: flex;
    list-style: none;
    flex-direction: column;
    gap: 15px;

    .menu__link {
      color: white;
      font-size: 20px;
      align-self: flex-start;
    }
  }
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.menu-enter-active,
.menu-leave-active {
  transition: all 0.3s ease;
}

.menu-enter-to,
.menu-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>

<script setup>
// Импортируем реактивные переменные и хуки жизненного цикла из Vue
import { ref, onMounted, onUnmounted } from 'vue'

// Импортируем функцию inject для получения зависимости из provide/inject
import { inject } from 'vue'

// Получаем из контекста функцию открытия попапа "Расчет стоимости"
const openDiscountPopup = inject('openDiscountPopup')

// Реактивная переменная: открыто ли мобильное меню
const isMenuOpen = ref(false)

// Реактивная переменная: флаг, десктоп ли сейчас (ширина окна > 767)
const isDesktop = ref(window.innerWidth > 767)

// Ссылка на DOM-элемент меню, чтобы отследить клик вне него
const menuRef = ref(null)

// Функция для открытия/закрытия меню (по клику на бургер)
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

// Обработчик изменения размера окна
// Обновляет isDesktop и принудительно закрывает меню при переходе на десктоп
function onResize() {
  isDesktop.value = window.innerWidth > 767

  if (isDesktop.value) {
    isMenuOpen.value = false
  }
}

// Обработчик клика вне меню: закрывает меню, если кликнули не по нему
function handleClickOutside(event) {
  if (isMenuOpen.value && menuRef.value && !menuRef.value.contains(event.target)) {
    isMenuOpen.value = false
  }
}

// Обработчик скролла страницы: закрывает меню при скролле вниз
function handleScroll() {
  if (isMenuOpen.value) {
    isMenuOpen.value = false
  }
}

// Утилита: явно закрыть меню (например, при клике на пункт меню)
function closeMenu() {
  isMenuOpen.value = false;
}

// Хук: при монтировании компонента навешиваем обработчики событий
onMounted(() => {
  window.addEventListener('resize', onResize)
  document.addEventListener('click', handleClickOutside)
  window.addEventListener('scroll', handleScroll, { passive: true })
})

// Хук: при размонтировании компонента снимаем обработчики событий
onUnmounted(() => {
  window.removeEventListener('resize', onResize)
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('scroll', handleScroll)
})

// Описание пропса, который приходит в компонент: inFooter
defineProps({
  inFooter: {
    type: Boolean,
    default: false
  }
})

// Массив пунктов меню для рендера
const menuItems = [
  { label: 'Услуги', href: '#services' },
  { label: 'Работы', href: '#work' },
  { label: 'Расчет стоимости' },
  { label: 'Записаться', href: 'https://wa.me/79261283908' }
]
</script>


<template>
  <nav class="header__menu menu">
    <button
      class="menu__button"
      :class="{ active: isMenuOpen }"
      @click.stop="toggleMenu"
      v-if="!inFooter"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <transition name="menu">
      <ul
        ref="menuRef"
        class="menu__list"
        :class="{ 'menu__list--footer': inFooter }"
        v-show="inFooter ? true : (isMenuOpen || isDesktop)">
        <li
          v-for="(item, index) in menuItems"
          :key="index"
          class="menu__item"
        >
          <button
            v-if="item.label === 'Расчет стоимости'"
            class="menu__link"
            type="button"
            @click="() => { openDiscountPopup(); closeMenu(); }"
          >
            {{ item.label }}
          </button>
          <a
            v-else
            class="menu__link"
            :href="item.href"
            @click="closeMenu"
          >
            {{ item.label }}
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
      width: 100%;
      border: none;
      gap: 12px 0;
      cursor: pointer;
      background-color: transparent;
      padding: 8px 0;
      order: 0;
      right: 250px;

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
      width: 50%;
      flex-direction: column;
      gap: 15px 0;
      right: 0;
      top: 66px;
      text-align: right;
      background: linear-gradient( #ffffff, #d27ea7);
      height: 400px;
      padding: 30px 0;
      justify-content: center;
    }

    .menu__link {
      font-size: 34px;
      padding: 10px 20px;
      color: var(--color-bright-grey);
      background-color: inherit;
      border: none;
      transition: color 0.3s ease-in-out;

      @include vp-767 {
        font-size: 26px;
        color: var(--color-bright-grey);
        text-align: end;
        padding: 7px 15px;
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

  .menu__list--footer {
    all: unset;
    display: flex;
    list-style: none;
    gap: 15px;

    @include vp-767 {
      flex-direction: column;
    }

    .menu__link {
      color: white;
      font-size: 34px;
      align-self: flex-start;

      @include vp-767 {
        font-size: 20px;
        width: 85px;
        text-align: center;
      }
    }
  }
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateX(200px);
}

.menu-enter-to,
.menu-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.menu-enter-active, .menu-leave-active {
  transition: opacity 0.6s cubic-bezier(0.25, 0.8, 0.25, 1), transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
}

</style>

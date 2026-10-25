<script setup>
defineProps({
  position: {
    type: String,
    default: 'header',
    validator: (value) => ['header', 'footer'].includes(value)
  }
})
</script>

<template>
  <a href="/" aria-label="Browka - Главная" :class="['logo', `logo--${position}`]">
    <span class="logo__main">BROWKA</span>
    <span class="logo__sub">beauty salon</span>
  </a>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;

.logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  line-height: 1;
  color: var(--color-bright-grey);
  z-index: 10;

  @media (hover: hover) and (pointer: fine) {
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-mulberry);
    }
  }

  .logo__main {
    font-family: 'Cormorant Garamond', serif;
    font-size: 38px;
    font-weight: 600;
    letter-spacing: 6px;
    text-transform: uppercase;
    margin-bottom: 4px;
    margin-right: -6px;
    white-space: nowrap;

    @include vp-767 {
      font-size: 28px;
      letter-spacing: 4px;
      margin-right: -4px;
    }
  }

  .logo__sub {
    font-family: 'Cormorant Garamond', serif;
    font-size: 14px;
    font-style: italic;
    letter-spacing: 1px;
    color: var(--color-mulberry);
    text-transform: lowercase;

    @include vp-767 {
      font-size: 11px;
    }
  }

  @include vp-767 {
    &:hover,
    &:active {
      color: var(--color-bright-grey) !important;
    }
  }

  &--footer {
    margin-top: 10px;
  }
}
</style>

<script setup>
import Telegram from '@/assets/icons/telegram.svg'
</script>

<template>
  <a
    class="dev"
    href="https://t.me/Serega580"
    target="_blank"
    aria-label="перейти на Телеграмм разработчика"
  >
    <span>Разработал Сергей А</span><Telegram />
  </a>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;
@use '@/assets/styles/container.scss' as *;

.dev {
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  color: var(--color-default-white);
  margin-top: 200px;
  margin-left: auto;

  span {
    color: var(--color-default-white);
  }

  svg {
    color: var(--color-bright-grey);
    width: 35px;
    height: 35px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: var(--color-mulberry);
    }
  }

  @include vp-767 {
    font-size: 18px;
    margin-bottom: 20px;
    color: var(--color-default-white);
    margin-top: 130px;
    text-align: center;
    border-top: 1px solid var(--color-default-white);
    padding-top: 10px;
    width: 100%;
    &:hover,
    &:active {
      transform: none !important;
      color: var(--color-default-white) !important;
    }
  }
}
</style>

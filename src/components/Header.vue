<script setup>
import Logo from '@/components/Logo.vue'
import Menu from '@/components/Menu.vue'
import Social from '@/components/Social.vue'
import Telephone from '@/components/Telephone.vue'
</script>

<template>
  <div class="header">
    <div class="container">
      <div class="header-block">

        <Logo />
        <Menu />
        <Telephone />

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;
@use '@/assets/styles/container.scss' as *;

.header {
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: var(--color-default-white);
  width: 100%;

  /* Можно добавить легкую тень, чтобы шапка не сливалась с белым фоном сайта */
  /* box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03); */

  .header-block {
    display: flex;
    align-items: center;
    justify-content: space-between; /* Логотип слева, Меню (бургер) справа */
    padding: 15px 0; /* Чуть увеличили отступы сверху и снизу для "воздуха" */

    @include vp-767 {
      padding: 10px 0;
    }
  }
}
</style>

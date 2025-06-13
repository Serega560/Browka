<script setup>
import Menu from '@/components/Menu.vue'
import Social from '@/components/Social.vue'
import Logo from '@/components/Logo.vue'
</script>

<template>
  <div class="header">
    <div class="container">
      <div class="header-block">

        <Logo />
        <Menu />
        <Social />

        <a class="header__tel tel" href="tel:89261283908">+7 (926) 128-39-08</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;
@use '@/assets/styles/container' as *;

.header {
  display: flex;
  justify-content: space-between;

  .header-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;

    @include vp-767 {
      padding: 8px 0;
    }

    .tel {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      width: max-content;
      padding: 12px 0;
      font-size: 30px;

      &:hover {
        color: var(--color-mulberry);
      }

      @include vp-767 {
        display: none;
      }
    }
  }

}

</style>

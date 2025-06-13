<script setup>

</script>

<template>
  <a class="header__img" href="#">
    <img class="header__logo header__logo-ds" src="../assets/icons/logo-ds.svg" alt="Логотип" width="50"
         height="50">
    <img class="header__logo header__logo-mb" src="../assets/icons/logo-mb.svg" alt="Логотип" width="50"
         height="50">
  </a>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;
@use '@/assets/styles/container' as *;

.header__img {

  @include vp-767 {
    order: -2;
  }

  .header__logo-ds {
    border-radius: 50%;
    width: 100px;
    height: 100px;

    @include vp-767 {
      width: 40px;
      height: 40px;
      display: none;
    }
  }

  .header__logo-mb {
    display: none;
    border-radius: 50%;

    @include vp-767 {
      display: block;
    }
  }
}

</style>

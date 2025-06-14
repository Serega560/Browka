<script setup>
import LogoDs from '@/assets/icons/logo-ds.svg'
import LogoMb from '@/assets/icons/logo-mb.svg'

</script>

<template>
  <a class="header__img" href="#">
    <LogoDs class="header__logo header__logo-ds" />
    <LogoMb class="header__logo header__logo-mb" />
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

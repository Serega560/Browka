<script setup>
import Logo from '@/assets/img/logo.jpg'

</script>

<template>
  <a class="img" href="#">
    <img :src="Logo" alt="Logo" class="logo" />
  </a>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;
@use '@/assets/styles/container' as *;

.img {
  border: none;

  @include vp-767 {
    order: -2;
  }

  .logo {
    border-radius: 50%;
    width: 100px;
    height: 100px;

    @include vp-767 {
      width: 50px;
      height: 50px;
    }
  }
}

</style>

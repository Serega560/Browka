<script setup>
import Logo from '@/components/Logo.vue'
import Social from '@/components/Social.vue'
import Menu from '@/components/Menu.vue'
</script>

<template>
<div class="footer">
  <div class="container">
    <div class="footer__block">

      <Logo />
      <Menu />
      <Social />

    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;
@use '@/assets/styles/container' as *;

.footer {
  background-color: var(--color-default-black);
  padding: 120px 0;

  @include vp-767 {
    padding: 40px 0;
  }

  .footer__block {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

</style>

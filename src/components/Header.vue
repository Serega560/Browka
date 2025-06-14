<script setup>
import Menu from '@/components/Menu.vue'
import Social from '@/components/Social.vue'
import Logo from '@/components/Logo.vue'
import Telephone from '@/components/Telephone.vue'
</script>

<template>
  <div class="header">
    <div class="container">
      <div class="header-block">

        <Logo />
        <Menu />
        <Social />
        <Telephone />

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
  background-color: var(--color-bright-grey);

  .header-block {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;

    @include vp-767 {
      padding: 8px 0;
    }
  }
}
</style>

<script setup>
import Logo from '@/components/Logo.vue'
import Menu from '@/components/Menu.vue'
import Social from '@/components/Social.vue'
import Telephone from '@/components/Telephone.vue'
</script>

<template>
<div class="footer">
  <div class="container">
    <h2 class="footer__title">Контакты</h2>
    <div class="footer__block">

      <Logo />
      <Menu :inFooter="true" />
      <Social position="footer"/>
      <Telephone />

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

  .footer__title {
    color: var(--color-default-white);
    font-size: 45px;
    margin-bottom: 70px;
    text-align: center;
    text-transform: uppercase;

    @include vp-767 {
      margin-bottom: 25px;
      font-size: 24px;
    }
  }

  .footer__block {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include vp-767 {
      justify-content: space-around;
      align-items: flex-start;
    }
  }
}

</style>

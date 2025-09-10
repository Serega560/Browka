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

      <Logo position="footer" />
      <Menu :inFooter="true" />
      <Social position="footer"/>
      <Telephone />

    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;
@use '@/assets/styles/container.scss' as *;

.footer {
  background-color: var(--color-default-black);
  padding: 60px 0;

  @include vp-767 {
    padding: 40px 0;
  }

  .footer__title {
    color: var(--color-default-white);
    font-size: 36px;
    margin-bottom: 30px;
    text-align: center;
    text-transform: uppercase;

    @include vp-767 {
      font-size: 18px;
      margin-bottom: 20px;
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

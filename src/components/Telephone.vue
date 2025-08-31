<script setup>
</script>

<template>
  <a class="telephone" href="tel:89261283908">+7 (926) 128-39-08</a>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;
@use '@/assets/styles/container.scss' as *;


.telephone {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: max-content;
  padding: 12px 0;
  font-size: 30px;
  color: var(--color-bright-grey);

  &:hover {
    color: var(--color-mulberry);
  }

  @include vp-767 {
    display: none;
  }
}
</style>

<script setup>

</script>

<template>
  <a href="https://wa.me/79261283908" class="button">Записаться</a>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;

.button {
  display: flex;
  width: 280px;
  border: 1px solid var(--color-can-can);
  cursor: pointer;
  padding: 10px 20px;
  background-color: var(--color-can-can);
  transition: width 0.3s, background-color 0.3s;
  color: var(--color-default-white);
  height: min-content;
  font-size: var(--font-size-small);
  align-items: center;
  justify-content: center;

  @include vp-767 {
    font-size: 18px;
    padding: 5px 10px;
    width: 180px;
    margin-left: auto;
    border-radius: 5px;
  }

  &:hover {
    width: 380px;
    background-color: var(--color-mulberry);

    @include vp-767 {
      width: 180px;
      background-color: var(--color-can-can);
    }
  }

  &:active {
    width: 280px;
    background-color: var(--color-deep-pink);

    @include vp-767 {
      width: 180px;
      background-color: var(--color-can-can);
    }
  }
}
</style>

<script setup>

</script>

<template>
  <div class="education">
    <div class="container">
      <h1 class="education__title">Обучение</h1>

    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;
@use '@/assets/styles/container.scss' as *;

.education {
  padding: 100px 0;

  @include vp-767 {
    padding: 40px 0;
  }

  .education__title {
    color: var(--color-bright-grey);
    font-size: 45px;
    margin-bottom: 70px;
    text-align: center;
    text-transform: uppercase;

    @include vp-767 {
      margin-bottom: 25px;
      font-size: 24px;
    }
  }
}

</style>

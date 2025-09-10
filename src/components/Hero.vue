<script setup>
</script>

<template>
  <div class="hero">
    <div class="container">
      <div class="hero__block">
        <h1 class="hero__title">Студия перманентного макияжа</h1>
        <p class="hero__text">Екатерина Плисенко</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;
@use '@/assets/styles/container.scss' as *;

.hero {
  height: 600px;
  background-color: var(--color-default-black);
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/img/main.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 78%;

  @include vp-767 {
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url('../assets/img/main.jpg');
    background-position: center center;
    height: 400px;
    width: auto;
  }

  .hero__block {
    display: flex;
    gap: 0 30px;
    flex-direction: column;

    @include vp-767 {
      width: 100%;
    }

    .hero__title {
      font-size: clamp(16px, 4vw, 110px);
      padding-bottom: 70px;
      color: var(--color-default-white);
      padding-top: 120px;
      text-transform: uppercase;

      @include vp-767 {
        padding-top: 40px;
        width: 200px;
      }
    }

    .hero__text {
      padding-top: 70px;
      border-top: 2px solid var(--color-default-white);
      color: var(--color-default-white);
      font-size: clamp(16px, 3vw, 100px);
      width: 600px;

      @include vp-767 {
        border: none;
        width: 70px;
        align-self: flex-end;
        padding-top: 150px;
      }
    }
  }
}

</style>

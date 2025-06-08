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
@use '@/assets/styles/container' as *;

.hero {
  height: 700px;
  background-color: var(--color-default-black);
  background-image: url('../assets/img/main.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 73%;

  @include vp-767 {
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

    .hero__button {
      position: relative;
      background-color: var(--color-default-white);
      padding: 13px 25px;
      border: 1px solid #5e3e2b;
      border-radius: 15px;
      cursor: pointer;
      font-size: 30px;
      bottom: -330px;
      left: 150px;
      text-align: center;
      box-shadow: 8px 8px 1px var(--color-bright-grey);

      &:hover {
        bottom: -335px;
        left: 155px;
        box-shadow: 4px 4px 0 var(--color-default-black);
        background-color: #efefef;
      }

      &:active {
        bottom: -340px;
        left: 160px;
        box-shadow: 0 0 0 var(--color-bright-grey);
        color: var(--color-default-white);
        background-color: var(--color-default-black);
      }
    }

    img {
      width: 570px;
      height: auto;
      margin-top: 50px;
    }
  }
}

</style>

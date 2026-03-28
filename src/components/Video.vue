<script setup>

</script>

<template>
  <div class="video">
    <div class="container">
      <h1 class="video__title">Результат сразу после процедуры</h1>
      <div class="video__block">
        <video src="../assets/img/video_1.mp4" width="300px" height="auto" muted playsinline controls autoplay loop></video>
        <video src="../assets/img/video_2.mp4" width="300px" height="auto" muted playsinline controls autoplay loop></video>
        <video src="../assets/img/video_3.mp4" width="300px" height="auto" muted playsinline controls autoplay loop></video>
        <video src="../assets/img/video_4.mp4" width="300px" height="auto" muted playsinline controls autoplay loop></video>
        <video src="../assets/img/video_5.mp4" width="300px" height="auto" muted playsinline controls autoplay loop></video>
        <video src="../assets/img/video_6.mp4" width="300px" height="auto" muted playsinline controls autoplay loop></video>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;
@use '@/assets/styles/container.scss' as *;

.video {
  padding: 100px;
  background-color: var(--color-can-can);

  @include vp-767 {
    padding: 40px 0;
  }

  .video__title {
    color: var(--color-bright-grey);
    font-size: 45px;
    margin-bottom: 70px;
    text-align: center;
    text-transform: uppercase;

    @include vp-767 {
      font-size: 18px;
      margin-bottom: 20px;
    }
  }

  .video__block {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    justify-content: center;

    video {
      border-radius: 20px;

      @include vp-767 {
        width: auto;
        height: 500px;
      }
    }
  }
}

</style>

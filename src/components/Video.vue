<script setup>
</script>

<template>
  <div class="video">
    <div class="container">
      <h1 class="video__title">Результат сразу после процедуры</h1>
      <div class="video__block">
        <video
          v-for="(video, index) in videos"
          :key="index"
          :src="video"
          width="auto"
          height="500px"
          muted
          playsinline
          controls
          autoplay
          loop
        ></video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videos: [
        '../assets/img/video_1.mp4',
        '../assets/img/video_2.mp4',
        '../assets/img/video_3.mp4',
        '../assets/img/video_4.mp4',
        '../assets/img/video_5.mp4',
        '../assets/img/video_6.mp4',
        '../assets/img/video_7.mp4',
        '../assets/img/video_8.mp4',
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;
@use '@/assets/styles/container.scss' as *;

.video {
  padding: 100px;
  background-color: var(--color-bright-grey);

  @include vp-767 {
    padding: 40px 0;
  }

  .video__title {
    color: var(--color-default-white);
    font-size: 36px;
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
        height: 285px;
      }
    }
  }
}
</style>

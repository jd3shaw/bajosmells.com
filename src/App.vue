<template>
  <div class="app">
    <div @click="playVideo" class="background">
      <img src="bajosmells.jpg" alt="Background Image" />
    </div>
    <div class="click-text" @click="handleClick">
      Click
    </div>
    <video v-if="showVideo" autoplay @ended="stopVideo" ref="videoElement">
      <source src="bajosmells.mp4" type="video/mp4" />
    </video>
    <div class="twitch-link">
      <a class="twitch-link click-text larger-text" href="https://www.twitch.tv/bajo" target="_blank">Visit Bajo's Twitch Channel</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showVideo: false,
    };
  },
  methods: {
    playVideo() {
      this.showVideo = true;
      const video = this.$refs.videoElement;
      if (video) {
        video.play();
      }
    },
    stopVideo() {
      this.showVideo = false;
      const video = this.$refs.videoElement;
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    },
  },
};
</script>

<style scoped>
.app {
  width: 100vw;
  height: 100vh;
  position: relative;
  margin: 0;
  padding: 0;
}

.background {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
}

img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.click-text {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: black;
  color: white;
  padding: 5px 5px;
  font-size: 12px;
  z-index: 2; /* Set a high z-index to ensure it appears on top of everything else */
  pointer-events: none;
}
.larger-text {
  font-size: 32px; /* Larger font size */
}

video {
  max-width: 90%;
  max-height: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
}

.twitch-link {
  position: absolute;
  bottom: 30px;
  width: 100%;
  text-align: center;
}
</style>

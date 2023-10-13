<template>
  <div class="app">
    <div @click="playVideo" class="background">
      <img src="bajosmells.jpg" alt="Background Image" />
    </div>
    <video v-if="showVideo" autoplay @ended="stopVideo" ref="videoElement">
      <source src="bajosmells.mp4" type="video/mp4" />
    </video>
    <div class="twitch-link">
      <a href="https://www.twitch.tv/bajo" target="_blank">Visit Bajo's Twitch Channel</a>
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
  overflow: hidden;
  position: relative;
}

.background {
  width: 100%;
  height: 100%;
  position: relative;
}

img {
  width: auto;
  max-height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

video {
  width: 85%;
  max-height: 85vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.twitch-link {
  position: absolute;
  bottom: 20px; /* Adjust the distance from the bottom as needed */
  width: 100%;
  text-align: center;
}

.twitch-link a {
  color: black;
  text-decoration: underline;
  cursor: pointer;
}
</style>

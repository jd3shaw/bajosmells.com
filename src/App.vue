<template>
  <div class="app">
    <div>
      <router-link to="/healsohasworms" class="worms-link">He Also Has Worms</router-link>
    </div>
    <div @click="playVideo" class="background" ref="backgroundElement">
      <img src="bajosmells1.png" alt="Background Image 1" style="width: 33%;" />
      <img src="bajosmells3.jpg" alt="Background Image 3" style="width: 34%;" />
      <img src="bajosmells2.png" alt="Background Image 2" style="width: 33%;" />
    </div>
    <div class="click-text" @click="handleClick">
      Clickies
    </div>
    <video v-if="showVideo" autoplay @ended="stopVideo" ref="videoElement">
      <source src="bajosmells.mp4" type="video/mp4" />
    </video>
    <div>
      <a class="twitch-link" href="https://www.twitch.tv/bajo" target="_blank">Visit Bajo's Smelly Twitch Channel</a>
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
  mounted() {
    // Add click event listener to the entire document
    document.addEventListener('click', this.togglePlayPause);
  },
  beforeUnmount() { // Use beforeUnmount instead of beforeDestroy
    // Remove click event listener from the document
    document.removeEventListener('click', this.togglePlayPause);
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
    togglePlayPause() {
      const video = this.$refs.videoElement;
      if (video) {
        if (video.paused) {
          if (video.ended) {
            this.stopVideo();
          } else {
            video.play();
          }
        } else {
          video.pause();
        }
      }
    },
  },
};
</script>

<!-- <script>
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
</script> -->

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
  display: flex;
}

img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.click-text {
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 5px;
  font-size: 12px;
  z-index: 2; /* Set a high z-index to ensure it appears on top of everything else */
  pointer-events: none;
}

video {
  max-width: 90%;
  max-height: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
}

.form {
  position: absolute;
  top: 0px;
  width: 100%;
  text-align: center;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 32px;
  display: inline-block;
  text-decoration: none;
  padding: 10px 20px;
  z-index: 1;
}
.form:hover {
  color: white;
}

.twitch-link {
  position: absolute;
  bottom: 0px;
  width: 100%;
  text-align: center;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 32px;
  display: inline-block;
  text-decoration: none;
  padding: 10px 20px;
  z-index: 1;
}
.twitch-link:hover {
  color: white;
}

.worms-link {
  position: absolute;
  bottom: 50px;
  width: 100%;
  text-align: center;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 32px;
  display: inline-block;
  text-decoration: none;
  padding: 10px 20px;
  z-index: 1;
}
.worms-link:hover {
  color: white;
}
</style>

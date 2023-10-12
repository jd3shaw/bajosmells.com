<template>
  <div class="app">
    <PhotoGallery imageSrc="bajosmells.jpg" />
  </div>
</template>

<script>
import PhotoGallery from './components/PhotoGallery.vue';

export default {
  name: 'App',
  components: {
    PhotoGallery,
  },
};
</script>

<style scoped>
.app {
  text-align: center;
  background-color: black;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  font-size: 24px;
}

/* Additional styles can be added as needed */
</style>

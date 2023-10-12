<template>
  <div class="photo-container">
    <img class="photo" :src="imageSrc" alt="Photo" />
  </div>
</template>

<script>
export default {
  name: 'PhotoGallery',
  props: {
    imageSrc: String,
  },
};
</script>

<style scoped>
.photo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  height: 100vh;
}

.photo {
  max-width: 100%;
  max-height: 100%;
}
</style>

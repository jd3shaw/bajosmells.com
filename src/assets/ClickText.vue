// ClickText.vue
<template>
  <div class="click-text" @click="handleClick">Click</div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      // Handle the click event here
    },
  },
};
</script>

<style>
.click-text {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: black;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  z-index: 9999; /* Set a high z-index to ensure it appears on top of everything else */
}
</style>

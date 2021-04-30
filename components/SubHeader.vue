<template>
  <div
    class="sub-header"
    :style="{
      backgroundImage:
        'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(' +
        image +
        ')',
    }"
  >
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
  },
}
</script>

<style scoped>
.sub-header {
  font-family: 'Bebas Neue', cursive;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 140px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
  background-size: cover;
  background-position: center;
  position: relative;
  color: white;
  font-size: 2rem;
  z-index: 10;
}
</style>

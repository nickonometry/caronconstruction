<template>
  <div class="image-effect">
    <img :src="image" :alt="alt" :style="{ height: height }" />
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    alt: String,
    height: String,
  },
}
</script>

<style lang="scss" scoped>
.image-effect {
  margin-top: 16px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  color: #717790;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;

  img {
    border-radius: 4px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: -2rem;
    left: 0;
    margin: -1rem;
    overflow: hidden;
    z-index: -1;
    background: #e3e3e3;
    // -webkit-clip-path: inset(2rem 0 2rem 2rem 4px);
    clip-path: inset(2rem 0 2rem 2rem round 4px);
    contain: strict;
    -webkit-transition: -webkit-clip-path 0.3s ease 0.1s;
    transition: -webkit-clip-path 0.3s ease 0.1s;
    transition: clip-path 0.3s ease 0.1s;
    transition: clip-path 0.3s ease 0.1s, -webkit-clip-path 0.3s ease 0.1s;
  }
}

@media screen and (max-width: 864px) {
  .image-effect {
    img {
      width: 100%;
    }
  }
}
</style>

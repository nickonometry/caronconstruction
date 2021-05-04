<template>
  <div>
    <SubHeader
      title="Photos"
      image="https://images.unsplash.com/photo-1601284953533-6cadbbebb347?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    />
    <div v-if="photos" class="main">
      <p>We have photos</p>
      <ul>
        <li v-for="(photo, index) in photos" :key="index">{{ photo.title }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    photos() {
      return this.$store.state.photos
    },
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString(process.env.lang) || ''
    },
  },
}
</script>

<style></style>

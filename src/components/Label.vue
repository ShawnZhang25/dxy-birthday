<template>
  <div class="label">
    <iframe width="100%" style="height: 100vh;border: none;" src="https://shawnzhang25.github.io/dxy-birthday/dist/static/label.html"></iframe>
  </div>
</template>

<script>
export default {
  name: 'Label',
  mounted () {
    setTimeout(() => {
      this.$router.push({
        path: '/img'
      })
    }, 16000)
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="label">
    <iframe width="100%" style="height: 100vh;border: none;" src="/dxy-birthday/index/static/label.html"></iframe>
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

<template>
<div class="bg" :style="{height: height}"></div>
</template>

<script>
export default {
  name: "background",
  props: {
    height: String
  }
}
</script>

<style scoped>
.bg{
  background-color: #f4f4f4;
}
</style>
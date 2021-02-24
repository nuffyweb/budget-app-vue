<template>
<div class="total-value title"> Balance: {{total}}</div>
</template>

<script>
export default {
name: "AppTotalBalance",
  props: {
  total: {
    type: Number,
    default: 0,
  }
  }
}
</script>

<style scoped>
.total-value {
  font-size: 26px;
  text-transform: uppercase;
  padding: 20px;
}
</style>
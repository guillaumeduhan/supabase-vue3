<script setup>
const props = defineProps(["text"])
const text = props.text
</script>

<template>
  <div class="alert">
    {{ text }}
  </div>
</template>

<style lang='scss'></style>
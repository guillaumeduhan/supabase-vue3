<template>
  <div class="flex flex-col h-screen items-center justify-center">
    <div class="w-8 h-8 border-4 border-gray-300 border-t-gray-900 rounded-full animate-spin"></div>
  </div>
</template>

<style scoped>
.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
<script setup lang="ts">
defineProps<{
  onBrowseProducts: () => void
}>()
</script>

<template>
  <div class="flex flex-col items-center justify-center py-16">
    <Icon
      name="ph:shopping-cart-simple-bold"
      class="text-gray-500 w-12 h-12 mb-4" />
    <p class="text-xl text-gray-600 dark:text-gray-400 mb-4">
      Your cart is empty.
    </p>
    <button
      class="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors"
      @click="onBrowseProducts">
      Browse Products
    </button>
  </div>
</template> 
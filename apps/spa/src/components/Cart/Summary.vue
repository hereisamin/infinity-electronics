<script setup lang="ts">
interface Props {
  itemCount: number
  subtotal: number
  onClearCart: () => void
  onCheckout: () => void
}

defineProps<Props>()
</script>

<template>
  <div class="lg:col-span-1 border border-secondary rounded p-4 bg-white dark:bg-black dark:border-gray-700 flex flex-col h-fit">
    <h2 class="text-xl font-bold mb-4">
      Order Summary
    </h2>
    <p class="mb-2">
      Total Items: {{ itemCount }}
    </p>
    <p class="font-bold text-lg mb-6">
      Subtotal: ${{ subtotal.toFixed(2) }}
    </p>

    <!-- Clear Cart -->
    <button
      class="mb-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
      @click="onClearCart">
      Clear Cart
    </button>

    <!-- Proceed / Checkout -->
    <button
      class="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors"
      @click="onCheckout">
      Proceed to Checkout
    </button>
  </div>
</template> 
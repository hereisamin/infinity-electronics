<script setup lang="ts">
import type { Product } from '../types/api.type'

defineProps<{
  product: Product
}>()

</script>

<template>
  <div class="w-72 h-96 bg-background border border-gray-200 rounded-lg overflow-hidden shadow-md flex flex-col">
    <!-- Image Container -->
    <div class="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
      <img
        class="w-full h-full object-cover"
        :src="product.image"
        :alt="product.title">
    </div>

    <!-- Details -->
    <div class="p-4 flex flex-col justify-between flex-1">
      <h3 class="text-lg font-semibold mb-2 line-clamp-1">
        {{ product.title }}
      </h3>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-3">
        {{ product.description }}
      </p>
      <span>Rating: ${{ product.rating.rate }}/5</span>
      <span class="font-bold text-lg">Price: ${{ product.price }}</span>
    </div>
  </div>
</template>

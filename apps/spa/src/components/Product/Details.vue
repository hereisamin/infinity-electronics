<script setup lang="ts">
import type { Product } from '@spa/types/api.type'

interface Props {
  product: Product
  showDescription?: boolean
  showRating?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showDescription: true,
  showRating: true
})
</script>

<template>
  <div class="flex flex-col justify-between flex-1">
    <div>
      <h3 class="text-lg font-semibold mb-2 line-clamp-1">
        {{ product.title }}
      </h3>

      <p
        v-if="showDescription"
        class="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-3">
        {{ product.description }}
      </p>

      <ProductRating
        v-if="showRating"
        :rate="product.rating.rate"
        :count="product.rating.count"
        class="mb-2" />
    </div>

    <div class="flex items-center justify-between mt-auto">
      <span class="font-bold text-lg">${{ product.price }}</span>
      <NuxtLink
        :to="`/products/${product.id}`"
        class="text-primary hover:underline">
        View Details
      </NuxtLink>
    </div>
  </div>
</template>

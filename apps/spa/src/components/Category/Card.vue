<script setup lang="ts">
import {Card} from '@ie/ui'
import type { Product } from '@spa/types/api.type'

const props = defineProps<{
  category: string
  products: Product[]
}>()
</script>

<template>
  <Card
    variant="bordered"
    class="overflow-hidden">
    <CategoryImageCollage :products="products" />

    <div class="p-4 flex flex-col items-start">
      <h3 class="text-xl font-bold mb-2 capitalize">
        {{ category }}
      </h3>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {{ products.length }} items available
      </p>
      <NuxtLink
        :to="`/products?cat=${encodeURIComponent(category)}`"
        class="mt-auto inline-block bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
        View {{ category }}
      </NuxtLink>
    </div>
  </Card>
</template>

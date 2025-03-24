<script setup lang="ts">
import type { Product } from '@spa/types/api.type'

const props = defineProps<{
  products: Product[]
}>()

const collageImages = computed(() => {
  if (!props.products.length) return []
  const shuffled = [...props.products].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, 4)
})
</script>

<template>
  <div class="relative grid grid-cols-2 grid-rows-2 gap-1 h-48">
    <div
      v-for="(product, idx) in collageImages"
      :key="idx"
      class="relative">
      <NuxtImg
        :src="product.image"
        :alt="product.title"
        class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black/30 hover:bg-black/10 cursor-pointer" />
    </div>
  </div>
</template>

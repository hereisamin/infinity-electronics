<script setup lang="ts">
import type { Product } from '../types/api.type'

const props = defineProps<{
  categories: string[]
  categoryToProducts: Record<string, Product[]>
}>()

function collageImages(cat: string) {
  const products = props.categoryToProducts[cat] || []
  if (!products.length) return []

  const shuffled = [...products].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, 4)
}
</script>

<template>
  <section class="py-10 bg-background text-text">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold mb-8">
        Explore by Category
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Category Card -->
        <div
          v-for="cat in categories"
          :key="cat"
          class="bg-background rounded-lg shadow hover:shadow-md border border-secondary overflow-hidden">
          <!-- Collage Container -->
          <div class="relative grid grid-cols-2 grid-rows-2 gap-1 h-48">
            <div
              v-for="(img, idx) in collageImages(cat)"
              :key="idx"
              class="relative">
              <NuxtImg
                :src="img.image"
                :alt="img.title"
                class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-black/30 hover:bg-black/10 cursor-pointer" />
            </div>
          </div>

          <!-- Category Info -->
          <div class="p-4 flex flex-col items-start">
            <h3 class="text-xl font-bold mb-2 capitalize">
              {{ cat }}
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {{ props.categoryToProducts[cat]?.length }} items available
            </p>
            <NuxtLink
              :to="`/products?cat=${encodeURIComponent(cat)}`"
              class="mt-auto inline-block bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
              View {{ cat }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

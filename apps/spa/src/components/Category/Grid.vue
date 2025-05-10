<script setup lang="ts">
import type { Product } from '@spa/types/api.type'

defineProps<{
  categories: string[]
  categoryToProducts: Record<string, Product[]>
}>()
</script>

<template>
  <section class="py-10 bg-background text-text">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold mb-8">
        Explore by Category
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <CategoryCard
          v-for="cat in categories"
          :key="cat"
          :category="cat"
          :products="categoryToProducts[cat] || []" />
      </div>
    </div>
  </section>
</template>

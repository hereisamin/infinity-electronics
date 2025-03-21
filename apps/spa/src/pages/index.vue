<script setup lang="ts">
import { IeError, IeLoading } from '@ie/ui'
import { Product } from '../types/api.type'
import { useGetManyProducts } from '../composable/use-query'

const { data, isLoading, isError, error, refetch } = useGetManyProducts()

const products = computed(() => data.value?.pages.flatMap((page) => page.data) ?? [])

// Categories list
const categories = computed(() => {
  if (!products.value) return []

  const unique = new Set(products.value.map((p) => p.category))
  return Array.from(unique)
})

// Map category => products in that category
const categoryToProducts = computed(() => {
  if (!products.value) return {}

  const map: Record<string, Product[]> = {}
  for (const cat of categories.value) {
    map[cat] = products.value.filter((p) => p.category === cat)
  }
  return map
})

const shuffledProducts = computed(() => {
  if (!products.value) return []
  return products.value.sort(() => Math.random() - 0.5)
})
</script>

<template>
  <div class="p-4">
    <IeLoading v-if="isLoading">
      Loading awesome products...
    </IeLoading>

    <IeError
      v-else-if="isError"
      @retry="refetch">
      <template #button>
        <Icon
          name="ph:arrow-counter-clockwise-bold"
          class="mr-2" />
        Try Again
      </template>
      Error: {{ (error as Error)?.message }}
    </IeError>

    <!-- Success -->
    <div v-if="data">
      <Hero :products="shuffledProducts.slice(0, 5)" />

      <CategoryGrid
        :categories="categories"
        :category-to-products="categoryToProducts" />
    </div>
  </div>
</template>

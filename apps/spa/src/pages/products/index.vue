<script setup lang="ts">
import { IeError, IeLoading } from '@ie/ui'
import { useGetManyProducts } from '../../composable/use-query'
import { useProductFilters } from '../../composable/use-product-filters'

const {
  data,
  isLoading,
  isError,
  error,
  fetchNextPage,
  isFetching,
  refetch
} = useGetManyProducts()

const products = computed(() => data.value?.pages.flatMap((page) => page.data) ?? [])

// Initialize filters from query parameters
const route = useRoute()
const {
  selectedCategory,
  searchText,
  sortBy,
  categories,
  filteredProducts,
  initializeFilters
} = useProductFilters(products)

// Initialize filters from URL query parameters
onMounted(() => {
  initializeFilters({
    category: route.query.cat as string,
    search: route.query.search as string,
    sortBy: route.query.sort as string
  })
})

function generateId() {
  const timestampPart = Date.now().toString(36)
  const randomPart = Math.random().toString(36).substring(2)
  return timestampPart + randomPart
}

useHead({
  title: 'Products',
  meta: [
    {
      name: 'description',
      content:
        'Discover top-rated electronics, accessories, and more at InfinityElectronics. Enjoy a fast and secure shopping experience, from the latest gadgets to everyday essentials.'
    }
  ]
})

const [productsWrapper] = useAutoAnimate()
</script>

<template>
  <div class="min-h-screen bg-background text-text px-4 sm:px-6 lg:px-8 py-8">
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-3xl font-bold">
        All Products
      </h1>
    </div>

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

    <div v-if="data">
      <ProductFilters
        v-model:selected-category="selectedCategory"
        v-model:search-text="searchText"
        v-model:sort-by="sortBy"
        :categories="categories" />

      <div
        ref="productsWrapper"
        class="flex flex-wrap gap-6 justify-center">
        <ProductCard
          v-for="product in filteredProducts"
          :key="generateId() + product.id"
          :product="product"
          class="transform transition duration-150 hover:scale-105" />
      </div>

      <!-- Load More -->
      <div class="flex justify-center mt-10">
        <button
          :disabled="isFetching"
          class="bg-primary text-white font-semibold px-4 py-2 rounded-md shadow hover:shadow-lg hover:opacity-90"
          @click="() => fetchNextPage()">
          Load more ...
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IeError, IeLoading } from '@ie/ui'
import { useGetManyProducts } from '../../composable/use-query'

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

const selectedCategory = ref('All')
const sortBy = ref('price-asc')
const searchText = ref('')

// Extract categories from the data once it arrives
const categories = computed(() => {
  if (!products.value) return []
  const uniqueCats = new Set(products.value.map((p) => p.category))
  return ['All', ...Array.from(uniqueCats)]
})

const filteredProducts = computed(() => {
  if (!products.value) return []

  // Category Filter
  let result = selectedCategory.value === 'All'
    ? [...products.value]
    : products.value.filter((p) => p.category === selectedCategory.value)

  // Text Search TODO: use fuse library
  const text = searchText.value.toLowerCase().trim()
  if (text) {
    result = result.filter((p) => {
      return (
        p.title.toLowerCase().includes(text) ||
        p.description.toLowerCase().includes(text)
      )
    })
  }

  // Sorting TODO: bring it out to utils
  if (sortBy.value === 'price-asc') {
    result.sort((a, b) => a.price - b.price)
  } else if (sortBy.value === 'price-desc') {
    result.sort((a, b) => b.price - a.price)
  } else if (sortBy.value === 'rating-desc') {
    result.sort((a, b) => b.rating.rate - a.rating.rate)
  } else if (sortBy.value === 'rating-asc') {
    result.sort((a, b) => a.rating.rate - b.rating.rate)
  }

  return result
})

function generateId() {
  const timestampPart = Date.now().toString(36)
  const randomPart = Math.random().toString(36).substring(2)
  return timestampPart + randomPart
}
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
      <!-- Filters & Sorting TODO: move to new component -->
      <div class="flex flex-col md:flex-row md:items-end gap-4 mb-6">
        <!-- Search -->
        <div class="flex-1">
          <label class="block text-sm font-medium mb-1">
            Search
          </label>
          <input
            v-model="searchText"
            type="text"
            placeholder="Search by title or description"
            class="border border-gray-300 px-3 py-2 w-full rounded focus:outline-none focus:ring-1 focus:ring-primary">
        </div>
        <!-- Category Filter -->
        <div>
          <label class="block text-sm font-medium mb-1">
            Category
          </label>
          <select
            v-model="selectedCategory"
            class="border border-gray-300 px-3 py-2 h-10 rounded focus:outline-none focus:ring-1 focus:ring-primary">
            <option
              v-for="cat in categories"
              :key="cat"
              :value="cat">
              {{ cat }}
            </option>
          </select>
        </div>

        <!-- Sort Select -->
        <div>
          <label class="block text-sm font-medium mb-1">
            Sort By
          </label>
          <select
            v-model="sortBy"
            class="border border-gray-300 h-10 px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-primary">
            <option value="price-asc">
              Price: Low to High
            </option>
            <option value="price-desc">
              Price: High to Low
            </option>
            <option value="rating-desc">
              Rating: High to Low
            </option>
            <option value="rating-asc">
              Rating: Low to High
            </option>
          </select>
        </div>
      </div>

      <div class="flex flex-wrap gap-6 justify-center">
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

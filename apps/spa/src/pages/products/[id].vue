<script setup lang="ts">
import { useCartStore } from '@spa/store/cart'
import { IeError, IeLoading } from '@ie/ui'
import { useGetOneProduct } from '../../composable/use-query'

const route = useRoute()
const productId = route.params.id as string

const {
  data,
  isLoading,
  isError,
  error,
  refetch
} = useGetOneProduct({ id: productId })

const product = computed(() => data.value?.data)

const quantity = ref(1)
const cartStore = useCartStore()

function addToCart() {
  if (!product.value) return

  const qty = quantity.value > 0 ? quantity.value : 1
  cartStore.addItem(
    {
      id: product.value.id,
      title: product.value.title,
      price: product.value.price,
      image: product.value.image
    },
    qty
  )
}

useHead({
  title: product.value?.title,
  meta: [
    {
      name: 'description',
      content: product.value?.description
    }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-background text-text px-4 sm:px-6 lg:px-8 py-8">
    <IeLoading v-if="isLoading">
      Loading ...
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

    <div
      v-else-if="product"
      class="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
      <!-- Left: Product Image (or gallery) -->
      <div class="flex-1">
        <div class="aspect-w-1 aspect-h-1 mb-4">
          <NuxtImg
            :src="product.image"
            :alt="product.title"
            class="w-full h-full object-cover" />
        </div>
      </div>

      <!-- Right: Product Info -->
      <div class="flex-1 flex flex-col">
        <h1 class="text-3xl font-bold mb-2">
          {{ product.title }}
        </h1>
        <p class="text-gray-500 dark:text-gray-400 mb-4 capitalize">
          Category: {{ product.category }}
        </p>
        <p class="text-lg text-gray-700 dark:text-gray-300 mb-4">
          {{ product.description }}
        </p>
        <p class="text-2xl text-primary font-bold mb-4">
          Price: ${{ product.price }}
        </p>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-6">
          Rating: {{ product.rating.rate }} ({{ product.rating.count }} reviews)
        </p>

        <!-- Add to Cart Section -->
        <div class="flex items-center gap-4 mb-4">
          <label
            for="quantity"
            class="text-sm font-medium">Quantity:</label>
          <input
            id="quantity"
            v-model="quantity"
            type="number"
            class="w-20 border border-secondary rounded p-2 text-center"
            min="1">
        </div>
        <button
          class="bg-primary text-white px-6 py-3 rounded hover:bg-opacity-90 transition-colors cursor-pointer"
          @click="addToCart">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

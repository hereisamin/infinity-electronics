<script setup lang="ts">
import { computed } from 'vue'

interface CartItem {
  productId: number
  title: string
  price: number
  quantity: number
  image: string
}

interface Props {
  item: CartItem
  onRemove: (productId: number) => void
  onQuantityChange: (productId: number, quantity: number) => void
}

const props = defineProps<Props>()

const quantity = computed({
  get: () => props.item.quantity,
  set: (value) => props.onQuantityChange(props.item.productId, value)
})
</script>

<template>
  <div class="border border-secondary rounded p-4 bg-white dark:bg-black dark:border-gray-700 flex items-start gap-4">
    <div class="w-20 h-20 flex-shrink-0 overflow-hidden">
      <NuxtImg
        :src="item.image"
        :alt="item.title"
        class="w-full h-full object-cover" />
    </div>

    <!-- Info -->
    <div class="flex-1 flex flex-col">
      <h3 class="font-bold text-lg">
        <NuxtLink
          :to="`/products/${item.productId}`"
          class="hover:underline">
          {{ item.title }}
        </NuxtLink>
      </h3>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Price: ${{ item.price.toFixed(2) }}
      </p>

      <div class="mt-auto flex items-center gap-2">
        <label
          for="qty"
          class="text-sm font-medium">Qty:</label>
        <input
          id="qty"
          v-model="quantity"
          type="number"
          min="1"
          class="w-20 border border-secondary rounded p-1 text-center">

        <!-- Remove button -->
        <button
          class="ml-auto text-red-600 hover:text-red-800 cursor-pointer"
          @click="onRemove(item.productId)">
          Remove
        </button>
      </div>
    </div>
  </div>
</template> 
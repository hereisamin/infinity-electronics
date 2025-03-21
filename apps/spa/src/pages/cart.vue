<script setup lang="ts">
import { useCartStore } from '@spa/store/cart'

const cartStore = useCartStore()

const cartItems = computed(() => cartStore.items)
const cartTotal = computed(() => cartStore.cartTotal)
const cartCount = computed(() => cartStore.cartCount)

function removeItem(productId: number) {
  cartStore.removeItem(productId)
}

// Clear entire cart
function clearCart() {
  cartStore.clearCart()
}

useHead({
  title: 'Cart',
  meta: [
    {
      name: 'description',
      content:
        'Discover top-rated electronics, accessories, and more at InfinityElectronics. Enjoy a fast and secure shopping experience, from the latest gadgets to everyday essentials.'
    }
  ]
})
</script>

<template>
  <div class="min-h-screen xl:px-86 bg-background text-text px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-3xl font-bold mb-6">
      Your Cart
    </h1>

    <!-- If no items in cart, show empty state -->
    <div
      v-if="cartCount === 0"
      class="flex flex-col items-center justify-center py-16">
      <Icon
        name="ph:shopping-cart-simple-bold"
        class="text-gray-500 w-12 h-12 mb-4" />
      <p class="text-xl text-gray-600 dark:text-gray-400 mb-4">
        Your cart is empty.
      </p>
      <NuxtLink
        to="/products"
        class="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors">
        Browse Products
      </NuxtLink>
    </div>

    <!-- Otherwise, display cart items -->
    <div
      v-else
      class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div class="lg:col-span-3 flex flex-col gap-4">
        <div
          v-for="item in cartItems"
          :key="item.productId"
          class="border border-secondary rounded p-4 bg-white dark:bg-black dark:border-gray-700 flex items-start gap-4">
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
                v-model="item.quantity"
                type="number"
                min="1"
                class="w-20 border border-secondary rounded p-1 text-center">

              <!-- Remove button -->
              <button
                class="ml-auto text-red-600 hover:text-red-800 cursor-pointer"
                @click="removeItem(item.productId)">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Summary Column (right 1 column on large screens) -->
      <div class="lg:col-span-1 border border-secondary rounded p-4 bg-white dark:bg-black dark:border-gray-700 flex flex-col h-fit">
        <h2 class="text-xl font-bold mb-4">
          Order Summary
        </h2>
        <p class="mb-2">
          Total Items: {{ cartCount }}
        </p>
        <p class="font-bold text-lg mb-6">
          Subtotal: ${{ cartTotal.toFixed(2) }}
        </p>

        <!-- Clear Cart -->
        <button
          class="mb-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
          @click="clearCart">
          Clear Cart
        </button>

        <!-- Proceed / Checkout -->
        <button
          class="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors">
          Proceed to Checkout
        </button>
      </div>
    </div>
  </div>
</template>

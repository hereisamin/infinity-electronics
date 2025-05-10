<script setup lang="ts">
import { useCartStore } from '@spa/store/cart'

const cartStore = useCartStore()

const cartItems = computed(() => cartStore.items)
const cartTotal = computed(() => cartStore.cartTotal)
const cartCount = computed(() => cartStore.cartCount)

function removeItem(productId: number) {
  cartStore.removeItem(productId)
}

function updateQuantity(productId: number, quantity: number) {
  cartStore.updateQuantity(productId, quantity)
}

function clearCart() {
  cartStore.clearCart()
}

function proceedToCheckout() {
  // TODO: Implement checkout flow
  console.log('Proceeding to checkout...')
}

function navigateToProducts() {
  navigateTo('/products')
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
    <CartEmpty
      v-if="cartCount === 0"
      :on-browse-products="navigateToProducts" />

    <!-- Otherwise, display cart items -->
    <div
      v-else
      class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div class="lg:col-span-3 flex flex-col gap-4">
        <CartItem
          v-for="item in cartItems"
          :key="item.productId"
          :item="item"
          :on-remove="removeItem"
          :on-quantity-change="updateQuantity" />
      </div>

      <!-- Summary Column -->
      <CartSummary
        :item-count="cartCount"
        :subtotal="cartTotal"
        :on-clear-cart="clearCart"
        :on-checkout="proceedToCheckout" />
    </div>
  </div>
</template>

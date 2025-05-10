<script setup lang="ts">
import { useCartStore } from '@spa/store/cart'

const cartStore = useCartStore()
const cartCount = computed(() => cartStore.cartCount)

interface Props {
  onCartClick?: () => void
}

const props = withDefaults(defineProps<Props>(), {
  onCartClick: undefined
})
</script>

<template>
  <NuxtLink
    to="/cart"
    class="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary hover:text-primary"
    @click="onCartClick">
    <Icon
      name="heroicons:shopping-cart"
      class="text-2xl h-6 w-6 inline-block" />
    <span
      v-if="cartCount > 0"
      class="relative -top-5 right-0 transform translate-x-1/2 -translate-y-1/2 text-xs bg-red-600 text-white px-1.5 py-0.5 rounded-full">
      {{ cartCount }}
    </span>
  </NuxtLink>
</template>

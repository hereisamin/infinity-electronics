<script setup lang="ts">
import type { Product } from '~/types/api.type'

defineProps<{
  products: Product[]
}>()
</script>

<template>
  <div class="hero w-full bg-background text-text py-10">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
      <HeroContent
        title="Welcome to Infinity Electronics"
        subtitle="The place to get all your needs."
        cta-text="Shop Now"
        cta-link="/products" />
      <HeroImageSlider :products="products" />
    </div>
  </div>
</template>

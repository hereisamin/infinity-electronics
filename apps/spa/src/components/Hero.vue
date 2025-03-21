<script setup lang="ts">
import type { Product } from '../types/api.type'

const props = defineProps<{
  products: Product[]
}>()

const currentSlide = ref(0)

function nextSlide() {
  if (!props.products.length) return
  currentSlide.value = (currentSlide.value + 1) % props.products.length
}

function prevSlide() {
  if (!props.products.length) return
  currentSlide.value = (currentSlide.value - 1 + props.products.length) % props.products.length
}
</script>

<template>
  <div class="hero w-full bg-background text-text py-10">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
      <!-- Left Side: Text Content -->
      <div class="flex-1">
        <h1 class="text-4xl md:text-6xl font-extrabold mb-4">
          Welcome to <br>
          Infinity Electronics
        </h1>
        <p class="text-lg mb-6">
          The place to get all your needs.
        </p>
        <NuxtLink
          to="/products"
          class="inline-block bg-primary text-white px-5 py-3 rounded-md hover:bg-opacity-90 transition-colors">
          Shop Now
        </NuxtLink>
      </div>

      <!-- Right Side: Image Slider -->
      <div class="relative w-full md:w-1/2 h-72 overflow-hidden">
        <!-- Slider Track -->
        <div
          class="flex transition-transform duration-500"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
          <!-- Each Slide -->
          <div
            v-for="product in products"
            :key="product.id"
            class="w-full flex-shrink-0">
            <NuxtImg
              :src="product.image"
              :alt="product.title"
              class="w-full h-72 object-cover" />
          </div>
        </div>

        <!-- Prev Button -->
        <button
          class="absolute top-1/2 left-4 -translate-y-1/2 bg-background bg-opacity-75 p-2 rounded-full hover:bg-opacity-100 shadow"
          @click="prevSlide">
          <Icon
            name="ph:caret-left-bold"
            class="h-5 w-5" />
        </button>

        <!-- Next Button -->
        <button
          class="absolute top-1/2 right-4 -translate-y-1/2 bg-background bg-opacity-75 p-2 rounded-full hover:bg-opacity-100 shadow"
          @click="nextSlide">
          <Icon
            name="ph:caret-right-bold"
            class="h-5 w-5" />
        </button>
      </div>
    </div>
  </div>
</template>

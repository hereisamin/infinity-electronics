<script setup lang="ts">
import type { Product } from '@spa/types/api.type'
import {ImageSlider} from '@ie/ui'

const props = defineProps<{
  products: Product[]
}>()

const sliderImages = computed(() =>
  props.products.map(product => ({
    src: product.image,
    alt: product.title
  }))
)
</script>

<template>
  <div class="w-full md:w-1/2 h-72">
    <ImageSlider
      :images="sliderImages"
      :auto-play="true"
      :interval="5000" />
  </div>
</template>

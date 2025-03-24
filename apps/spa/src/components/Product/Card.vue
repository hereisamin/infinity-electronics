<script setup lang="ts">
import type { Product } from '~/types/api.type'
import {Card} from '@ie/ui'

interface Props {
  product: Product
  showDescription?: boolean
  showRating?: boolean
  imageAspectRatio?: 'square' | 'video' | 'landscape'
}

const props = withDefaults(defineProps<Props>(), {
  showDescription: true,
  showRating: true,
  imageAspectRatio: 'square'
})
</script>

<template>
  <Card
    variant="bordered"
    class="w-72 h-96 overflow-hidden flex flex-col">
    <ProductImage
      :src="product.image"
      :alt="product.title"
      :aspect-ratio="imageAspectRatio" />

    <div class="p-4">
      <ProductDetails
        :product="product"
        :show-description="showDescription"
        :show-rating="showRating" />
    </div>
  </Card>
</template>

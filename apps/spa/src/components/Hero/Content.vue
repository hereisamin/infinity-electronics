<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
  ctaText?: string
  ctaLink?: string
}

const props = withDefaults(defineProps<Props>(), {
  subtitle: 'The place to get all your needs.',
  ctaText: 'Shop Now',
  ctaLink: '/products'
})
</script>

<template>
  <div class="flex-1">
    <h1 class="text-4xl md:text-6xl font-extrabold mb-4">
      {{ title }}
    </h1>
    <p class="text-lg mb-6">
      {{ subtitle }}
    </p>
    <NuxtLink
      :to="ctaLink"
      class="inline-block bg-primary text-white px-5 py-3 rounded-md hover:bg-opacity-90 transition-colors">
      {{ ctaText }}
    </NuxtLink>
  </div>
</template> 
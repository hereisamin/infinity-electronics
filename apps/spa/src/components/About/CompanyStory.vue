<script setup lang="ts">
interface Props {
  title: string
  paragraphs: string[]
  imageSrc: string
  imageAlt: string
}

defineProps<Props>()
</script>

<template>
  <section class="bg-white dark:bg-black border-t border-secondary py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div class="relative">
          <img
            src="~/assets/about.jpg"
            alt="Infinity Electronics Store"
            class="w-full h-auto rounded-lg shadow-lg">
        </div>
        <div>
          <h2 class="text-2xl md:text-3xl font-bold mb-6">
            {{ title }}
          </h2>
          <div class="space-y-4">
            <p
              v-for="(paragraph, index) in paragraphs"
              :key="index"
              class="text-gray-600 dark:text-gray-400">
              {{ paragraph }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

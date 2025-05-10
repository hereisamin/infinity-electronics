<script setup lang="ts">
interface Value {
  icon: string
  title: string
  description: string
}

interface Props {
  title: string
  subtitle: string
  values: Value[]
}

defineProps<Props>()
</script>

<template>
  <section class="bg-white dark:bg-black border-t border-secondary py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-8">
        <h2 class="text-2xl md:text-3xl font-bold mb-2">
          {{ title }}
        </h2>
        <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {{ subtitle }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(value, index) in values"
          :key="index"
          class="p-4 text-center">
          <div class="mb-3 flex items-center justify-center">
            <Icon
              :name="value.icon"
              class="text-primary w-10 h-10" />
          </div>
          <h3 class="font-bold text-lg mb-2">
            {{ value.title }}
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            {{ value.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template> 
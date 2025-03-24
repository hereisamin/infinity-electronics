<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
}

const props = withDefaults(defineProps<Props>(), {
  subtitle: 'Your One-Stop Shop for Modern Electronics',
})

</script>

<template>
  <section class="relative h-64 w-full flex items-center justify-center bg-cover bg-center bg-black">
    <div class="relative text-center px-4">
      <h1 class="text-3xl md:text-5xl font-extrabold text-white mb-2">
        {{ title }}
      </h1>
      <p class="text-white text-sm md:text-lg">
        {{ subtitle }}
      </p>
    </div>
  </section>
</template>

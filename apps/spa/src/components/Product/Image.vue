<script setup lang="ts">
interface Props {
  src: string
  alt: string
  aspectRatio?: 'square' | 'video' | 'landscape'
}

const props = withDefaults(defineProps<Props>(), {
  aspectRatio: 'square'
})

const containerClasses = computed(() => {
  const baseClasses = 'w-full bg-gray-100 flex items-center justify-center overflow-hidden'
  
  const aspectRatios = {
    square: 'aspect-square',
    video: 'aspect-video',
    landscape: 'aspect-[16/9]'
  }

  return `${baseClasses} ${aspectRatios[props.aspectRatio]}`
})
</script>

<template>
  <div :class="containerClasses">
    <NuxtImg
      class="w-full h-full object-cover"
      :src="src"
      :alt="alt" />
  </div>
</template> 
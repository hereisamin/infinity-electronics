<script setup lang="ts">
interface Props {
  images: Array<{
    src: string
    alt: string
  }>
  showControls?: boolean
  autoPlay?: boolean
  interval?: number
}

const props = withDefaults(defineProps<Props>(), {
  showControls: true,
  autoPlay: false,
  interval: 5000
})

const currentSlide = ref(0)
let autoPlayInterval: NodeJS.Timeout | null = null

function nextSlide() {
  if (!props.images.length) return
  currentSlide.value = (currentSlide.value + 1) % props.images.length
}

function prevSlide() {
  if (!props.images.length) return
  currentSlide.value = (currentSlide.value - 1 + props.images.length) % props.images.length
}

// Auto-play functionality
watch(() => props.autoPlay, (newValue) => {
  if (newValue) {
    autoPlayInterval = setInterval(nextSlide, props.interval)
  } else if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
    autoPlayInterval = null
  }
}, { immediate: true })

// Cleanup on unmount
onUnmounted(() => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
  }
})
</script>

<template>
  <div class="relative w-full h-full overflow-hidden">
    <!-- Slider Track -->
    <div
      class="flex transition-transform duration-500"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <!-- Each Slide -->
      <div
        v-for="(image, index) in images"
        :key="index"
        class="w-full flex-shrink-0">
        <img
          :src="image.src"
          :alt="image.alt"
          class="w-full h-full object-cover">
      </div>
    </div>

    <!-- Navigation Controls -->
    <template v-if="showControls">
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
    </template>

    <!-- Slide Indicators -->
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
      <button
        v-for="(_, index) in images"
        :key="index"
        class="w-2 h-2 rounded-full transition-colors"
        :class="index === currentSlide ? 'bg-primary' : 'bg-white/50'"
        :aria-label="`Go to slide ${index + 1}`"
        @click="currentSlide = index" />
    </div>
  </div>
</template>

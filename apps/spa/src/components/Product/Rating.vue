<script setup lang="ts">
interface Props {
  rate: number
  count?: number
  showCount?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showCount: false,
  count: 0
})

const fullStars = computed(() => Math.floor(props.rate))
const hasHalfStar = computed(() => props.rate % 1 !== 0)
</script>

<template>
  <div class="flex items-center gap-1">
    <div class="flex">
      <Icon
        v-for="i in 5"
        :key="i"
        :name="i <= fullStars ? 'ph:star-fill' : i === fullStars + 1 && hasHalfStar ? 'ph:star-half-fill' : 'ph:star'"
        class="text-yellow-400" />
    </div>
    <span class="text-sm text-gray-600 dark:text-gray-400">
      {{ rate }}/5
      <span
        v-if="showCount && count"
        class="ml-1">
        ({{ count }})
      </span>
    </span>
  </div>
</template>

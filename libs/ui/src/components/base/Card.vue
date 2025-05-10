<script setup lang="ts">
interface Props {
  variant?: 'default' | 'hover' | 'bordered'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  padding: 'md'
})

const cardClasses = computed(() => {
  const baseClasses = 'bg-background rounded-lg shadow transition-shadow'
  
  const variants = {
    default: '',
    hover: 'hover:shadow-md',
    bordered: 'border border-secondary'
  }

  const paddings = {
    none: '',
    sm: 'p-2',
    md: 'p-4',
    lg: 'p-6'
  }

  return `${baseClasses} ${variants[props.variant]} ${paddings[props.padding]}`
})
</script>

<template>
  <div :class="cardClasses">
    <slot />
  </div>
</template> 
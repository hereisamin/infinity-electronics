<script setup lang="ts">
interface NavLink {
  label: string
  href: string
}

interface Props {
  links: NavLink[]
  isMobile?: boolean
  onLinkClick?: () => void
}

const props = withDefaults(defineProps<Props>(), {
  isMobile: false,
  onLinkClick: undefined
})

const linkClasses = computed(() => {
  return props.isMobile
    ? 'block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary hover:text-primary'
    : 'px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary hover:text-primary'
})
</script>

<template>
  <NuxtLink
    v-for="(link, idx) in links"
    :key="idx"
    :to="link.href"
    :class="linkClasses"
    @click="onLinkClick">
    {{ link.label }}
  </NuxtLink>
</template> 
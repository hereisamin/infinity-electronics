<script setup lang="ts">
/// <reference lib="dom" />


const isOpen = ref(false)


const colorMode = useColorMode()


const themes = ['system', 'light', 'dark', 'sepia']

/**
 * Map each theme to a Phosphor icon name
 * (adjust as needed from https://icones.js.org/collection/ph)
*/
function iconName(theme: string) {
  if (theme === 'system') return 'ph:laptop'
  if (theme === 'light') return 'ph:sun'
  if (theme === 'dark') return 'ph:moon'
  if (theme === 'sepia') return 'ph:coffee'
  return 'ph:question'
}


function setTheme(theme: string) {
  colorMode.preference = theme
  isOpen.value = false
}


const currentTheme = computed(() => colorMode.value)

const target = useTemplateRef<HTMLElement>('parent')

onClickOutside(target, () => {
  isOpen.value = false
})

const [parent] = useAutoAnimate()
</script>

<template>
  <div class="relative inline-block text-left">
    <button
      class="inline-flex items-center gap-1 rounded-md px-3 py-2 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      @click="isOpen = !isOpen">
      <Icon
        :name="iconName(currentTheme)"
        class="text-xl" />


      <span class="capitalize text-sm font-medium">
        {{ currentTheme }}
      </span>


      <Icon
        name="ph:caret-down"
        class="text-base" />
    </button>


    <div ref="parent">
      <div
        v-if="isOpen"
        class="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg border border-secondary bg-background ring-1 ring-black ring-opacity-5 py-2 z-50">
        <div
          v-for="theme in themes"
          :key="theme"
          class="flex items-center gap-2 px-3 py-2 hover:bg-secondary hover:text-primary cursor-pointer"
          @click="setTheme(theme)">
          <Icon
            :name="iconName(theme)"
            class="text-xl" />
          <span class="text-sm font-medium capitalize">
            {{ theme }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

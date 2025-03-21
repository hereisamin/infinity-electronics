<script setup lang="ts">
function iconName(theme: string) {
  if (theme === 'system') return 'i-ph-laptop'
  if (theme === 'light') return 'i-ph-sun'
  if (theme === 'dark') return 'i-ph-moon'
  return 'i-ph-coffee'
}

const colorMode = useColorMode()
</script>

<!-- eslint-disable vue/valid-v-for -->
<template>
  <div>
    <ul class="flex gap-2 p-2">
      <li
        v-for="theme of ['system', 'light', 'dark', 'sepia']"
        :key="theme"
        :class="{
          preferred: !colorMode.unknown && theme === colorMode.preference,
          selected: !colorMode.unknown && theme === colorMode.value,
        }">
        <Icon
          :name="iconName(theme)"
          class="text-xl"
          @click="colorMode.preference = theme" />
      </li>
    </ul>
    <p>
      <ColorScheme
        placeholder="..."
        tag="span">
        Preference: <b>{{ colorMode.preference }}</b>
        <span v-if="colorMode.preference === 'system'">&nbsp;(<i>{{ colorMode.value }}</i> mode detected)</span>
        <span v-if="colorMode.forced">&nbsp;(<i>{{ colorMode.value }}</i> forced)</span>
      </ColorScheme>
    </p>
  </div>
</template>

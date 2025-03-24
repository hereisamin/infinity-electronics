<template>
  <div class="flex flex-col items-center justify-center py-8 bg-background">
    <div class="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4" />
    <!-- Message -->
    <p class="text-text text-lg font-semibold">
      <slot />
    </p>
  </div>
</template>

<template>
  <!-- Error State -->
  <div class="bg-red-50 border border-red-200 p-10 rounded-md flex items-start gap-4">
    <!-- Message & Action -->
    <div class="flex-1">
      <h3 class="text-red-700 font-bold mb-1">
        Oops! Something went wrong
      </h3>
      <p class="text-sm text-red-600 mb-3">
        <slot />
      </p>
      <button
        class="inline-flex items-center bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
        @click="$emit('retry')">
        <slot name="button" />
      </button>
    </div>
  </div>
</template>

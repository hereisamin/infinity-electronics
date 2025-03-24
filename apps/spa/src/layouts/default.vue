<template>
  <div class="fixed inset-0 bg-background text-text">
    <NavigationNavbar />
    <div class="h-full overflow-auto pb-20">
      <slot />
      <LayoutFooter />
    </div>
  </div>
</template>

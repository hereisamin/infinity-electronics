<template>
  <nav class="bg-background text-text border-b border-secondary">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Left Section: Logo / Brand Name -->
        <div class="flex-shrink-0 flex items-center">
          <NuxtLink to="/">
            <img
              src="~/assets/logo.png"
              alt="InfinityElectronics Logo"
              class="w-12 mr-2 object-contain">
          </NuxtLink>
          <NuxtLink
            to="/"
            class="text-xl font-bold hover:text-primary">
            Infinity Electronics
          </NuxtLink>
        </div>

        <!-- Desktop Nav Links -->
        <div class="hidden md:ml-6 md:flex md:items-center md:space-x-4">
          <NuxtLink
            v-for="(link, idx) in navLinks"
            :key="idx"
            :to="link.href"
            class="px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary hover:text-primary">
            {{ link.label }}
          </NuxtLink>
        </div>

        <!-- Right Section: Theme Picker & Cart -->
        <div class="hidden md:flex md:items-center md:space-x-4">
          <NuxtLink
            to="/cart"
            class="relative px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary hover:text-primary">
            <Icon
              name="heroicons:shopping-cart"
              class="text-2xl h-6 w-6 inline-block" />
            <span class="absolute top-1 right-0 transform translate-x-1/2 -translate-y-1/2 text-xs bg-red-600 text-white px-1.5 py-0.5 rounded-full">
              {{ 5 }}
            </span>
          </NuxtLink>

          <ColorInput />
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex items-center md:hidden">
          <button
            class="inline-flex items-center justify-center p-2 rounded-md hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            @click="isOpen = !isOpen">
            <Icon
              v-if="!isOpen"
              name="heroicons:bars-3"
              class="block h-6 w-6 text-2xl"
              aria-hidden="true" />
            <Icon
              v-else
              name="heroicons:x-mark"
              class="block h-6 w-6 text-2xl"
              aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <div
      v-if="isOpen"
      class="md:hidden border-t border-secondary">
      <!-- Mobile Nav Links -->
      <div class="px-2 pt-2 pb-3 space-y-1">
        <NuxtLink
          v-for="(link, idx) in navLinks"
          :key="idx"
          :to="link.href"
          class="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary hover:text-primary"
          @click="isOpen = false">
          {{ link.label }}
        </NuxtLink>
      </div>

      <!-- Mobile Theme Picker (ColorInput) & Cart Link -->
      <div class="px-2 py-2 border-t border-secondary space-y-1">
        <NuxtLink
          to="/cart"
          class="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary hover:text-primary"
          @click="isOpen = false">
          Cart ({{ 5 }})
        </NuxtLink>
      </div>

      <div
        class="flex items-center"
        @click="isOpen = false">
        <ColorInput />
      </div>
    </div>
  </nav>
</template>

  <script setup lang="ts">
  const isOpen = ref(false)

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'About Us', href: '/about' }
  ]
  </script>

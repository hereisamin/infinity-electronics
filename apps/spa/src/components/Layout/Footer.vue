<template>
  <footer class="bg-background text-text border-t border-secondary py-8 mt-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Column 1: Brand / About -->
      <div class="flex flex-col">
        <NuxtLink
          to="/"
          class="text-lg font-bold mb-2 hover:text-primary">
          Infinity Electronics
        </NuxtLink>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          Your one-stop shop for modern electronics and more.
        </p>
      </div>

      <!-- Column 2: Quick Links -->
      <div class="flex flex-col">
        <h3 class="text-lg font-semibold mb-2">
          Quick Links
        </h3>
        <NuxtLink
          to="/about"
          class="mb-1 hover:text-primary">
          About Us
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="mb-1 hover:text-primary">
          Contact
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="mb-1 hover:text-primary">
          Privacy Policy
        </NuxtLink>
      </div>

      <!-- Column 3: Social Media -->
      <div class="flex flex-col">
        <h3 class="text-lg font-semibold mb-2">
          Follow Us
        </h3>
        <div class="flex gap-4 items-center">
          <NuxtLink
            to="https://facebook.com"
            target="_blank"
            class="hover:text-primary">
            <Icon
              name="ph:facebook-logo-bold"
              class="w-5 h-5" />
          </NuxtLink>
          <NuxtLink
            to="https://instagram.com"
            target="_blank"
            class="hover:text-primary">
            <Icon
              name="ph:instagram-logo-bold"
              class="w-5 h-5" />
          </NuxtLink>
          <NuxtLink
            to="https://twitter.com"
            target="_blank"
            class="hover:text-primary">
            <Icon
              name="ph:twitter-logo-bold"
              class="w-5 h-5" />
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Bottom copyright -->
    <div class="mt-8 text-center text-sm text-gray-400">
      &copy; 2025 Infinity Electronics. All rights reserved.
    </div>
  </footer>
</template>

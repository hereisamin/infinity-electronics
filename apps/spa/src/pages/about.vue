<template>
  <div class="bg-background text-text min-h-screen">
    <!-- Hero Section -->
    <section class="relative w-full h-64 md:h-96 flex items-center justify-center bg-cover bg-center">
      <div class="absolute inset-0 bg-black bg-opacity-40" />
      <div class="relative z-10 text-center px-4">
        <h1 class="text-3xl md:text-5xl font-extrabold text-white mb-2">
          About Infinity Electronics
        </h1>
        <p class="text-white text-sm md:text-lg">
          Your One-Stop Shop for Modern Electronics
        </p>
      </div>
    </section>

    <!-- Company Overview -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <!-- Text Content -->
        <div>
          <h2 class="text-2xl md:text-3xl font-bold mb-4">
            Who We Are
          </h2>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            Infinity Electronics is dedicated to bringing you the latest and most innovative electronics on the market. Whether it's gadgets for your home, accessories for your daily commute, or specialized hardware for your business, we've got you covered.
          </p>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            Founded in 2025, we saw a need for a modern, user-friendly platform that delivers top-quality products with exceptional customer support.
          </p>
        </div>

        <!-- Image -->
        <div class="w-full h-64 md:h-96 overflow-hidden rounded-md">
          <img
            src="~/assets/about.jpg"
            alt="Office or Team Photo"
            class="w-full h-full object-cover">
        </div>
      </div>
    </section>

    <!-- Mission / Values -->
    <section class="bg-white dark:bg-black border-t border-secondary py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8">
          <h2 class="text-2xl md:text-3xl font-bold mb-2">
            Our Mission
          </h2>
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            To simplify electronics shopping by providing curated products,
            expert advice, and world-class support.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Value 1 -->
          <div class="p-4 text-center">
            <div class="mb-3 flex items-center justify-center">
              <Icon
                name="ph:rocket-bold"
                class="text-primary w-10 h-10" />
            </div>
            <h3 class="font-bold text-lg mb-2">
              Innovation
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              We constantly seek the newest and best tech to meet and exceed
              your expectations.
            </p>
          </div>
          <!-- Value 2 -->
          <div class="p-4 text-center">
            <div class="mb-3 flex items-center justify-center">
              <Icon
                name="ph:heart-bold"
                class="text-primary w-10 h-10" />
            </div>
            <h3 class="font-bold text-lg mb-2">
              Customer-Centric
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Our team is dedicated to helping you find the perfect gadgets
              for your needs.
            </p>
          </div>
          <!-- Value 3 -->
          <div class="p-4 text-center">
            <div class="mb-3 flex items-center justify-center">
              <Icon
                name="ph:handshake-bold"
                class="text-primary w-10 h-10" />
            </div>
            <h3 class="font-bold text-lg mb-2">
              Trust & Reliability
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              We stand behind our products and offer reliable warranties and
              customer support.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story or Team -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 class="text-2xl md:text-3xl font-bold mb-6 text-center">
        Our Journey
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <p class="text-gray-600 dark:text-gray-400">
          Infinity Electronics began as a small online store selling niche tech products.
          Over the years, we’ve grown into a full-fledged platform offering thousands
          of gadgets, hardware, and accessories for enthusiasts, professionals, and everyday users.
        </p>
        <p class="text-gray-600 dark:text-gray-400">
          Our commitment to innovation has led us to partner with leading manufacturers
          worldwide. We continually update our catalog with the latest trends in electronics.
          As we expand, we never lose sight of our mission: to make technology
          accessible, enjoyable, and reliable for everyone.
        </p>
      </div>
    </section>
  </div>
</template>

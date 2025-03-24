<script setup lang="ts">
interface Props {
  categories: string[]
  selectedCategory: string
  searchText: string
  sortBy: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:selectedCategory': [value: string]
  'update:searchText': [value: string]
  'update:sortBy': [value: string]
}>()

const sortOptions = [
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating-desc', label: 'Rating: High to Low' },
  { value: 'rating-asc', label: 'Rating: Low to High' }
]
</script>

<template>
  <div class="flex flex-col md:flex-row md:items-end gap-4 mb-6">
    <!-- Search -->
    <div class="flex-1">
      <label class="block text-sm font-medium mb-1">
        Search
      </label>
      <input
        :value="searchText"
        type="text"
        placeholder="Search by title or description"
        class="border border-gray-300 px-3 py-2 w-full rounded focus:outline-none focus:ring-1 focus:ring-primary"
        @input="emit('update:searchText', ($event.target as HTMLInputElement).value)">
    </div>

    <div class="flex justify-around gap-4">
      <!-- Category Filter -->
      <div>
        <label class="block text-sm font-medium mb-1">
          Category
        </label>
        <select
          :value="selectedCategory"
          class="border border-gray-300 px-3 py-2 h-10 rounded focus:outline-none focus:ring-1 focus:ring-primary"
          @change="emit('update:selectedCategory', ($event.target as HTMLSelectElement).value)">
          <option
            v-for="cat in categories"
            :key="cat"
            :value="cat">
            {{ cat }}
          </option>
        </select>
      </div>

      <!-- Sort Select -->
      <div>
        <label class="block text-sm font-medium mb-1">
          Sort By
        </label>
        <select
          :value="sortBy"
          class="border border-gray-300 h-10 px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-primary"
          @change="emit('update:sortBy', ($event.target as HTMLSelectElement).value)">
          <option
            v-for="option in sortOptions"
            :key="option.value"
            :value="option.value">
            {{ option.label }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

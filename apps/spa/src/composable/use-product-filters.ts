import { Ref } from 'vue'
import type { Product } from '@spa/types/api.type'

export interface FilterOptions {
  category?: string
  search?: string
  sortBy?: string
}

export function useProductFilters(products: Ref<Product[]>) {
  const selectedCategory = ref('All')
  const searchText = ref('')
  const sortBy = ref('price-asc')

  // Extract categories from the data
  const categories = computed(() => {
    if (!products.value) return []
    const uniqueCats = new Set(products.value.map((p) => p.category))
    return ['All', ...Array.from(uniqueCats)]
  })

  // Filter and sort products
  const filteredProducts = computed(() => {
    if (!products.value) return []

    // Category Filter
    let result = selectedCategory.value === 'All'
      ? [...products.value]
      : products.value.filter((p) => p.category === selectedCategory.value)

    // Text Search
    const text = searchText.value.toLowerCase().trim()
    if (text) {
      result = result.filter((p) => {
        return (
          p.title.toLowerCase().includes(text) ||
          p.description.toLowerCase().includes(text)
        )
      })
    }

    // Sorting
    switch (sortBy.value) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating-desc':
        result.sort((a, b) => b.rating.rate - a.rating.rate)
        break
      case 'rating-asc':
        result.sort((a, b) => a.rating.rate - b.rating.rate)
        break
    }

    return result
  })

  // Initialize filters from query parameters
  function initializeFilters(query: FilterOptions) {
    if (query.category) {
      selectedCategory.value = query.category
    }
    if (query.search) {
      searchText.value = query.search
    }
    if (query.sortBy) {
      sortBy.value = query.sortBy
    }
  }

  // Update URL with current filters
  function updateUrl() {
    const query: Record<string, string> = {}

    if (selectedCategory.value !== 'All') {
      query.cat = selectedCategory.value
    }
    if (searchText.value) {
      query.search = searchText.value
    }
    if (sortBy.value !== 'price-asc') {
      query.sort = sortBy.value
    }

    navigateTo({
      query,
      replace: true
    })
  }

  // Watch for filter changes and update URL
  watch([selectedCategory, searchText, sortBy], () => {
    updateUrl()
  })

  return {
    selectedCategory,
    searchText,
    sortBy,
    categories,
    filteredProducts,
    initializeFilters
  }
}

import { defineStore } from 'pinia'

interface CartItem {
  productId: number
  title: string
  price: number
  quantity: number
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[]
  }),

  getters: {
    cartCount: (state) => state.items.reduce((acc, item) => acc + item.quantity, 0),
    cartTotal: (state) => state.items.reduce((acc, item) => acc + item.quantity * item.price, 0)
  },

  actions: {
    addItem(product: { id: number; title: string; price: number }, quantity = 1) {
      const existingItem = this.items.find((item) => item.productId === product.id)
      if (existingItem) {
        existingItem.quantity += quantity
      } else {
        this.items.push({
          productId: product.id,
          title: product.title,
          price: product.price,
          quantity
        })
      }
    },
    removeItem(productId: number) {
      this.items = this.items.filter((item) => item.productId !== productId)
    },
    clearCart() {
      this.items = []
    }
  }
})

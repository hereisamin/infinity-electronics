import { defineStore } from 'pinia'

export interface CartItem {
  productId: number
  title: string
  price: number
  quantity: number
  image?: string
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[]
  }),
  getters: {
    cartCount: (state) => state.items.reduce((acc, item) => acc + item.quantity, 0),
    cartTotal: (state) => state.items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  },
  actions: {
    addItem(product: { id: number; title: string; price: number; image?: string }, qty = 1) {
      const existing = this.items.find((i) => i.productId === product.id)
      if (existing) {
        existing.quantity += qty
      } else {
        this.items.push({
          productId: product.id,
          title: product.title,
          price: product.price,
          quantity: qty,
          image: product.image
        })
      }
    },
    removeItem(productId: number) {
      this.items = this.items.filter((i) => i.productId !== productId)
    },
    clearCart() {
      this.items = []
    },
    updateQuantity(productId: number, newQty: number) {
      const item = this.items.find((i) => i.productId === productId)
      if (item && newQty > 0) {
        item.quantity = newQty
      }
    }
  }
})

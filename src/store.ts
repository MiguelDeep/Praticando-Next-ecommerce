import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ProductType } from "./app/types/ProductType";

type CardState = {
  cart: ProductType[],
  addToCart: (product: ProductType) => void;
  //removeCart:(productId : string) => void;
  isOpen: boolean;
  toggleCart: () => void;
};


export const useCartStore = create<CardState>()(
  persist((set) => ({
    cart: [],
    addToCart: (product) => set((state) => {
      const Product = state.cart.find((p) => p.id === product.id)
      if (product) {
        const updateCart = state.cart.map((p) => {
          if (product.id === p.id) {
            return { ...p, quantity: p.quantity ? p.quantity + 1 : 1 }
          }
          return p
        })
        return { cart : updateCart}
      } else {
        const prod = [...product]
          return {cart : [...state.cart,  { prod, quantity : 1 } ]};
      }
    }),
    isOpen: false,
    toggleCart: () => set((state) => ({ isOpen: !state.isOpen }))
  }), { name: 'cart-storage' })
)

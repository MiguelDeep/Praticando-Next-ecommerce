"use client"
import { useCartStore } from "@/store"
import { ProductType } from "../types/ProductType"

export default function AddCart({ product }: { product: ProductType }) {
  const { addToCart } = useCartStore()


  return (
    <button
    onClick={() => addToCart(product)}
      className=' rounded-md bg-teal-600 text-white px-3.5 py-2.5 text-center'
    >
      Adicionar ao Carrinho
    </button>
  )
}

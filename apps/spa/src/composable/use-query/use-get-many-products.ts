import { useQuery } from "@tanstack/vue-query"
import { Product } from "../../types/api.type"
import { manyProductsQueryKeys } from './'

async function fetchProducts(): Promise<Product[]> {
  const res = await fetch('https://fakestoreapi.com/products')
  if (!res.ok) throw new Error('Failed to fetch products')

  return res.json()
}

export const useGetManyProducts = () => useQuery({
  queryKey: manyProductsQueryKeys.all,
  queryFn: fetchProducts,
})

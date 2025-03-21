import { useQuery, type QueryFunctionContext } from '@tanstack/vue-query'
import { Product } from "@spa/types/api.type"
import { oneProductQueryKeys, Id } from './'
import { AxiosResponse } from 'axios'
import { UnwrapRef } from 'vue'
import { http } from '@spa/services/http'

type OneProductQueryContext = QueryFunctionContext<UnwrapRef<ReturnType<typeof oneProductQueryKeys['details']>>>

async function fetchOneProduct({ signal, queryKey }: OneProductQueryContext): Promise<AxiosResponse<Product, unknown>> {

  const res = await http.get(`/products/${queryKey[0].id}`, {
    signal,
  })

  if (res.status !== 200) throw new Error('Failed to fetch products')

  return res
}

export const useGetOneProduct = ({ id }: Id) => useQuery({
  queryKey: oneProductQueryKeys.details({ id }),
  queryFn: fetchOneProduct
 })

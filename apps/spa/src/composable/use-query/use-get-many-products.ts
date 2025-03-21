import { useInfiniteQuery, type QueryFunctionContext } from '@tanstack/vue-query'
import { Product } from "@spa/types/api.type"
import { manyProductsQueryKeys } from './'
import { AxiosResponse } from 'axios'
import { UnwrapRef } from 'vue'
import { http } from '@spa/services/http'
import { LOAD_PAGE_SIZE } from '@spa/constants'

type ProductQuickSearchQueryContext = QueryFunctionContext<UnwrapRef<typeof manyProductsQueryKeys['all']>, number>

async function fetchProducts({ pageParam, signal }: ProductQuickSearchQueryContext): Promise<AxiosResponse<Product[], unknown>> {

  const res = await http.get('/products', {
    params: {
      start: pageParam,
      limit: LOAD_PAGE_SIZE,
    },
    signal,
  })

  if (res.status !== 200) throw new Error('Failed to fetch products')

  return res
}

export const useGetManyProducts = () => useInfiniteQuery({
  initialPageParam: 0,
  getNextPageParam: (_lastPage, _allPages, lastPageParam) => lastPageParam + 1,
  queryKey: manyProductsQueryKeys.all,
  queryFn: fetchProducts,
})

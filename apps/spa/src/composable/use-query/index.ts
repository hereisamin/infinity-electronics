import { Ref } from 'vue'
export type SearchTerm = { searchTerm: Ref<string> }
export type StartAt = { startAt: Ref<number> }
export type Limit = { limit: Ref<number> }
export type Id = { id: string }

export const manyProductsQueryKeys = {
  all: [{ scope: 'product-list' }] as const,
  search: ({ startAt, limit, searchTerm }: SearchTerm & StartAt & Limit) => (
    [
      {
        ...manyProductsQueryKeys.all[0],
        startAt,
        limit,
        searchTerm,
      }
    ]) as const,
}

export const oneProductQueryKeys = {
  all: [{ scope: 'one-product' }] as const,
  details: ({ id }: Id) => (
    [
      {
        ...oneProductQueryKeys.all[0],
        id,
      }
    ]) as const,
}


export { useGetManyProducts } from './use-get-many-products'
export { useGetOneProduct } from './use-get-one-product'

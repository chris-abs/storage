import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

import { api } from '@/Global/utils/api'
import { queryKeys } from '@/Global/lib/queryKeys'
import { Container } from '@/Container/types'
import { CreateItemData, UpdateItemData } from '../schemas'
import { Item } from '../types'

export function useItem(id: number) {
  return useQuery({
    queryKey: queryKeys.items.detail(id),
    queryFn: async () => {
      const item = await api.get<Item>(`/items/${id}`)
      return {
        ...item,
        queryKey: [queryKeys.items.detail(id), item.container?.id],
      }
    },
    enabled: !!id,
  })
}

export function useItems() {
  return useQuery({
    queryKey: queryKeys.items.list,
    queryFn: () => api.get<Item[]>('/items'),
  })
}

export function useCreateItem() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: CreateItemData) => api.post<Item>('/items', data),
    onSuccess: (newItem) => {
      queryClient.setQueryData(queryKeys.items.list, (old: Item[] = []) => {
        return [...old, newItem]
      })
      if (newItem.containerId) {
        queryClient.setQueryData(
          queryKeys.containers.detail(newItem.containerId),
          (oldContainer: Container | undefined) => {
            if (!oldContainer) return oldContainer
            return {
              ...oldContainer,
              items: [...(oldContainer.items || []), newItem],
            }
          },
        )
      }
      queryClient.invalidateQueries({ queryKey: queryKeys.recent })
    },
  })
}

export function useUpdateItem() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: UpdateItemData) => {
      const formData = new FormData()
      formData.append('itemData', JSON.stringify(data))

      if (data.images?.length) {
        data.images.forEach((file) => formData.append('images', file))
      }

      return api.put<Item>(`/items/${data.id}`, formData)
    },
    onSuccess: (updatedItem) => {
      queryClient.setQueryData(queryKeys.items.detail(updatedItem.id), updatedItem)
      queryClient.invalidateQueries({ queryKey: queryKeys.items.list })
      queryClient.invalidateQueries({ queryKey: queryKeys.recent })
      queryClient.invalidateQueries({ queryKey: queryKeys.tags })

      if (updatedItem.containerId) {
        queryClient.invalidateQueries({
          queryKey: queryKeys.containers.detail(updatedItem.containerId),
        })
      }
    },
  })
}

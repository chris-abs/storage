import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import type { Tag } from '@/types'
import { api } from '@/utils/api'
import { CreateTagData, UpdateTagData } from '@/schemas/tag'
import { queryKeys } from '@/lib/queryKeys'

export function useTag(id: number) {
  return useQuery({
    queryKey: queryKeys.tags.detail(id),
    queryFn: () => api.get<Tag>(`/tags/${id}`),
    enabled: !!id,
  })
}

export function useTags() {
  return useQuery({
    queryKey: queryKeys.tags.list,
    queryFn: () => api.get<Tag[]>('/tags'),
  })
}

export function useCreateTag() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: CreateTagData) => api.post<Tag>('/tags', data),
    onSuccess: (newTag) => {
      queryClient.setQueryData(queryKeys.tags.list, (old: Tag[] = []) => {
        return [...old, newTag]
      })
      queryClient.invalidateQueries({ queryKey: queryKeys.recent })
    },
  })
}

export function useUpdateTag() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: UpdateTagData) => api.put<Tag>(`/tags/${data.id}`, data),
    onSuccess: (updatedTag, variables) => {
      queryClient.setQueryData(queryKeys.tags.detail(variables.id), updatedTag)
      queryClient.setQueryData(queryKeys.tags.list, (old: Tag[] = []) => {
        return old.map((tag) => (tag.id === variables.id ? updatedTag : tag))
      })
      queryClient.invalidateQueries({ queryKey: queryKeys.recent })
    },
  })
}

export function useDeleteTag() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: number) => api.delete(`/tags/${id}`),
    onSuccess: (_, deletedId) => {
      queryClient.removeQueries({ queryKey: queryKeys.tags.detail(deletedId) })
      queryClient.setQueryData(queryKeys.tags.list, (old: Tag[] = []) => {
        return old.filter((tag) => tag.id !== deletedId)
      })
      queryClient.invalidateQueries({ queryKey: queryKeys.recent })
    },
  })
}

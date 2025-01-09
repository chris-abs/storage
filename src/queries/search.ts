import { useQuery } from '@tanstack/react-query'
import type { SearchResponse } from '@/types/search'
import { api } from '@/utils/api'

export function useSearch(query: string, options?: { enabled?: boolean }) {
  return useQuery({
    queryKey: ['search', query],
    queryFn: () => api.get<SearchResponse>(`/search?q=${encodeURIComponent(query)}`),
    enabled: options?.enabled && !!query,
  })
}

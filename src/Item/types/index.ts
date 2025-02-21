import { Container } from '@/Container/types'
import { Tag } from '@/Tag/types'

export interface ItemImage {
  id: number
  url: string
  displayOrder: number
  createdAt: string
  updatedAt: string
}

export interface Item {
  id: number
  name: string
  description: string
  quantity: number
  containerId?: number
  container?: Container
  images: ItemImage[]
  tags: Tag[]
  familyId: number
  createdAt: string
  updatedAt: string
}

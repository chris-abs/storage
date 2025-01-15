import { Plus } from 'lucide-react'
import { useRouter } from '@tanstack/react-router'

import { Button } from '@/Global/components/atoms'
import { EntityType } from '@/Global/types'

interface EntityPageHeaderProps {
  title: string
  entityType: EntityType
  onAdd?: () => void
}

const entityAddRelations: Record<EntityType, EntityType | null> = {
  workspace: 'container',
  container: 'item',
  item: 'tag',
  tag: 'item',
}

export function EntityPageHeader({ title, entityType, onAdd }: EntityPageHeaderProps) {
  const router = useRouter()
  const isDetailPage = router.state.location.pathname.includes(`/${entityType}s/`)

  const getButtonText = () => {
    if (!isDetailPage) {
      return `New ${entityType}`
    }

    const addableType = entityAddRelations[entityType]
    return addableType ? `Add ${addableType}` : 'Add'
  }

  return (
    <div className="flex shrink-0 items-center justify-between p-4">
      <h1 className="text-xl font-semibold">{title}</h1>
      {onAdd && (
        <Button onClick={onAdd}>
          <Plus className="mr-2 h-4 w-4" />
          {getButtonText()}
        </Button>
      )}
    </div>
  )
}
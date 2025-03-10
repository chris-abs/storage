import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'

import { EntityHeader } from '@/Global/components/molecules/headers'
import { PageLayout } from '@/Global/layout/PageLayout'
import { useWorkspaces } from '@/Storage/Workspace/queries'
import { useContainers } from '@/Storage/Container/queries'
import { ItemOrganiser } from '@/Storage/Item/components/organisms/organiser'
import { CreateItemModal } from '@/Storage/Item/components/organisms/modal'
import { useItems, useUpdateItem } from '@/Storage/Item/queries'

export const Route = createFileRoute('/_authenticated/cadence/storage/items/assign/')({
  component: ItemsPage,
})

function ItemsPage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const { data: items } = useItems()
  const { data: workspaces } = useWorkspaces()
  const { data: containers } = useContainers()
  const updateItem = useUpdateItem()

  const handleUpdateItem = (itemId: number, containerId: number | null) => {
    const item = items?.find((item) => item.id === itemId)
    if (item) {
      updateItem.mutate({
        id: itemId,
        containerId,
        name: item.name,
        description: item.description,
        quantity: item.quantity,
        tags: item.tags.map((tag) => tag.id),
      })
    }
  }

  return (
    <PageLayout>
      <div className="flex flex-1 flex-col h-full">
        <div className="flex flex-1 flex-col gap-4 p-4 min-h-0">
          <EntityHeader
            title="Items"
            entityType="item"
            addEntity="item"
            onAdd={() => setIsCreateModalOpen(true)}
          />

          <ItemOrganiser
            items={items ?? []}
            workspaces={workspaces ?? []}
            containers={containers ?? []}
            onUpdateItem={handleUpdateItem}
          />
        </div>
      </div>
      <CreateItemModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} />
    </PageLayout>
  )
}

import { createFileRoute } from '@tanstack/react-router'
import { PageLayout } from '@/components/layouts'
import { EntityPageHeader } from '@/components/molecules'
import { useState } from 'react'
import { useItems } from '@/queries/item'
import { CreateItemModal } from '@/components/organisms/modals/entity/detailed/ItemModal'
import { ItemList } from '@/components/molecules/entityList/ItemList'

export const Route = createFileRoute('/_authenticated/items/')({
  component: ItemsPage,
})

function ItemsPage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const { data: items, isLoading } = useItems()

  const handleAdd = () => {
    setIsCreateModalOpen(true)
  }

  return (
    <PageLayout>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="bg-background border flex-1 rounded-xl">
          <EntityPageHeader title="Items" entityType="item" onAdd={handleAdd} />
        </div>
        <div className="bg-background border flex-1 rounded-xl">
          <div className="p-4">
            <ItemList items={items ?? []} isLoading={isLoading} />
          </div>
        </div>
      </div>
      <CreateItemModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </PageLayout>
  )
}
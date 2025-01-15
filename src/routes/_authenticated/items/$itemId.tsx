import { useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Package } from 'lucide-react'
import { toast } from 'sonner'

import { useItem, useUpdateItem } from '@/Item/queries'
import { PageLayout } from '@/Global/layout/PageLayout'
import { Alert, AlertDescription, AlertTitle } from '@/Global/components/atoms'
import { UpdateItemData } from '@/Item/schemas'
import { EntityPageHeader, NotAssignedSection } from '@/Global/components/molecules'
import { ItemsListSection } from '@/Item/components/molecules/sections/list'
import { ContainerSection } from '@/Container/components/molecules/sections/detailed/Container'
import { TagsListSection } from '@/Tag/components/molecules/sections/list/Tag'
import { CreateTagModal } from '@/Tag/components/organisms/TagModal'

export const Route = createFileRoute('/_authenticated/items/$itemId')({
  component: ItemPage,
})

function ItemPage() {
  const { itemId } = Route.useParams()
  const parsedItemId = parseInt(itemId)
  const { data: item } = useItem(parsedItemId)
  const updateItem = useUpdateItem()
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  if (!item) {
    return (
      <PageLayout>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <Alert>
            <Package className="h-4 w-4" />
            <AlertTitle>No Items have been found...</AlertTitle>
            <AlertDescription>
              You can create Items in the{' '}
              <Link className="underline" to="/">
                Dashboard
              </Link>{' '}
              and store them in Containers for better organising!
            </AlertDescription>
          </Alert>
        </div>
      </PageLayout>
    )
  }

  const handleAdd = () => {
    setIsCreateModalOpen(true)
  }

  const handleUpdateItem = async (data: UpdateItemData) => {
    try {
      await updateItem.mutateAsync(data)
      toast('Item updated', {
        description: `${data.name || item.name} has been updated successfully`,
      })
    } catch (err) {
      toast('Error', {
        description: 'Failed to update item',
        duration: 3000,
      })
      throw err
    }
  }

  return (
    <PageLayout>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="bg-background border rounded-xl">
          <EntityPageHeader title={item.name} entityType="tag" onAdd={handleAdd} />
        </div>

        <ItemsListSection
          item={item}
          onUpdate={handleUpdateItem}
          isUpdating={updateItem.isPending}
          emptyStateComponent={
            <NotAssignedSection title="Item" message="No item details available." />
          }
        />

        <ContainerSection
          container={item.container || null}
          emptyStateComponent={
            <NotAssignedSection
              title="Container"
              message="No container assigned to this item yet."
            />
          }
        />

        <TagsListSection
          tags={item.tags}
          emptyStateComponent={
            <NotAssignedSection title="Tags" message="No tags assigned to this item yet." />
          }
        />
      </div>

      <CreateTagModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} />
    </PageLayout>
  )
}

import { useState, useEffect } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'

import { Switch } from '@/Global/components/atoms'
import { EntityPageHeader, Section } from '@/Global/components/molecules'
import { PageLayout } from '@/Global/layout/PageLayout'
import { SortableItemCard } from '@/Item/components/atoms/card/SortableItemCard'
import { CompactItemCard } from '@/Item/components/atoms/card/CompactItemCard'
import { UnsortedItemsSection } from '@/Item/components/molecules/sections/list/UnsortedItems'
import { CreateItemModal } from '@/Item/components/organisms/ItemModal'
import { useItems, useUpdateItem } from '@/Item/queries'
import { useWorkspaces } from '@/Workspace/queries'
import { useContainers } from '@/Container/queries'
import { WorkspaceListSection } from '@/Workspace/components/molecules/sections/list/WorkspaceContainerList'

export const Route = createFileRoute('/_authenticated/items/')({
  component: ItemsPage,
})

function ItemsPage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [isCompactView, setIsCompactView] = useState(false)
  const { data: items } = useItems()
  const { data: workspaces } = useWorkspaces()
  const { data: containers } = useContainers()
  const updateItem = useUpdateItem()

  const [activeId, setActiveId] = useState<string | null>(null)
  const [visibleWorkspaceIds, setVisibleWorkspaceIds] = useState<Set<number>>(new Set())

  const unassignedContainers = containers?.filter((container) => !container.workspaceId) ?? []

  useEffect(() => {
    if (workspaces) {
      setVisibleWorkspaceIds(new Set(workspaces.map((w) => w.id)))
    }
  }, [workspaces])

  const sensors = useSensors(useSensor(PointerSensor))

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (over && active.id !== over.id) {
      const itemId = parseInt(active.id.toString().split('-')[1])
      let newContainerId = null

      if (over.id.toString().startsWith('container-')) {
        newContainerId = parseInt(over.id.toString().split('-')[1])
      }

      const item = items?.find((item) => item.id === itemId)
      if (item) {
        updateItem.mutate({
          id: itemId,
          containerId: newContainerId,
          name: item.name,
          description: item.description,
          quantity: item.quantity,
          imgUrl: item.imgUrl,
          tags: item.tags.map((tag) => tag.id),
        })
      }
    }
    setActiveId(null)
  }

  const viewToggleButton = (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">Compact View</span>
      <Switch
        checked={isCompactView}
        onCheckedChange={setIsCompactView}
        aria-label="Toggle compact view"
      />
    </div>
  )

  // todo: view toggle button needs implementing properly
  console.log(viewToggleButton)

  const ItemComponent = isCompactView ? CompactItemCard : SortableItemCard

  return (
    <PageLayout>
      <div className="flex flex-1 flex-col h-full">
        <div className="flex flex-1 flex-col gap-4 p-4 min-h-0">
          <EntityPageHeader
            title="Items"
            entityType="item"
            onAdd={() => setIsCreateModalOpen(true)}
          />
          {/* {viewToggleButton} */}

          <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
            <div className="flex flex-col gap-4 h-[calc(100vh-8rem)]">
              <div className="flex-grow min-h-0">
                <Section className="h-full">
                  <WorkspaceListSection
                    workspaces={workspaces ?? []}
                    items={items ?? []}
                    unassignedContainers={unassignedContainers}
                    visibleWorkspaceIds={visibleWorkspaceIds}
                    setVisibleWorkspaceIds={setVisibleWorkspaceIds}
                    isCompactView={isCompactView}
                  />
                </Section>
              </div>
              <div className="h-[30%] min-h-[200px]">
                <Section className="h-full">
                  <UnsortedItemsSection
                    items={items?.filter((item) => !item.containerId) ?? []}
                    isCompactView={isCompactView}
                  />
                </Section>
              </div>
            </div>
            <DragOverlay>
              {activeId && items && (
                <ItemComponent
                  item={items.find((item) => `item-${item.id}` === activeId) || null}
                />
              )}
            </DragOverlay>
          </DndContext>
        </div>
      </div>
      <CreateItemModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} />
    </PageLayout>
  )
}

import { Item } from '@/Item/types'
import { ItemList } from '../../catalogue/ItemCatalogue'

interface ItemsListSectionProps {
  items: Item[]
  emptyStateComponent?: React.ReactNode
}

export function ItemsListSection({ items, emptyStateComponent }: ItemsListSectionProps) {
  if (!items?.length) {
    return emptyStateComponent || null
  }

  return (
    <section className="bg-background border rounded-xl p-4" aria-labelledby="items-section-title">
      <div className="space-y-4">
        <header className="flex justify-between items-center">
          <h2 id="items-section-title" className="text-lg font-medium">
            Stored Items
          </h2>
        </header>
        <ItemList items={items} isLoading={false} />
      </div>
    </section>
  )
}
import { useState } from 'react'
import { useDroppable } from '@dnd-kit/core'

import {
  ScrollArea,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/Global/components/atoms'
import { Section, Muted } from '@/Global/components/molecules'
import { SortableItemCard } from '@/Item/components/atoms/card/SortableItemCard'
import { Item } from '@/Item/types'
import { useSettingsStore } from '@/Global/stores/useSettingsStore'
import { cn } from '@/Global/lib'

interface UnsortedItemsSectionProps {
  items: Item[]
}

export function UnsortedItemsSection({ items }: UnsortedItemsSectionProps) {
  const { isCompact } = useSettingsStore()
  const { setNodeRef, isOver } = useDroppable({ id: 'unsorted' })
  const [openSections, setOpenSections] = useState<string[]>(['unsorted'])
  const isExpanded = openSections.includes('unsorted')

  return (
    <div
      ref={setNodeRef}
      className={cn(
        'transition-all duration-200',
        isExpanded ? (isCompact ? 'h-[255px]' : 'h-[355px]') : 'h-[150px]',
      )}
    >
      <Section className="h-full overflow-hidden">
        <Accordion
          type="multiple"
          value={openSections}
          onValueChange={setOpenSections}
          className="h-full"
        >
          <AccordionItem value="unsorted" className="border-none h-full">
            <Card
              className={cn(
                'transition-all duration-200 h-full',
                isOver && 'bg-primary/5 border-primary/20',
              )}
            >
              <CardHeader className="py-6">
                <AccordionTrigger parent className="hover:no-underline w-full">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <CardTitle>Unsorted Items</CardTitle>
                        <Muted>({items.length} items)</Muted>
                      </div>
                      <CardDescription className="text-muted-foreground m-0">
                        All new Items will be placed here! Drag them into Containers to sort them
                      </CardDescription>
                    </div>
                  </div>
                </AccordionTrigger>
              </CardHeader>
              <AccordionContent>
                <CardContent>
                  <ScrollArea className={cn(isCompact ? 'h-[100px]' : 'h-[200px]')}>
                    <div
                      className={cn(
                        'grid gap-4 pb-4',
                        isCompact
                          ? 'grid-cols-[repeat(auto-fill,minmax(200px,1fr))]'
                          : 'grid-cols-[repeat(auto-fill,minmax(280px,1fr))]',
                      )}
                    >
                      {items.map((item) => (
                        <div
                          key={item.id}
                          className={cn(
                            'transition-opacity duration-200',
                            isExpanded ? 'opacity-100' : 'opacity-0',
                          )}
                        >
                          <SortableItemCard item={item} />
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </AccordionContent>
            </Card>
          </AccordionItem>
        </Accordion>
      </Section>
    </div>
  )
}

import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'

import { PageLayout } from '@/Global/layout/PageLayout'
import { EntityPageHeader } from '@/Global/components/molecules'
import { TagList } from '@/Tag/components/molecules/catalogue/TagCatalogue'
import { CreateTagModal } from '@/Tag/components/organisms/TagModal'
import { useTags } from '@/Tag/queries'

export const Route = createFileRoute('/_authenticated/tags/')({
  component: TagsPage,
})

function TagsPage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const { data: tags, isLoading } = useTags()

  const handleAdd = () => {
    setIsCreateModalOpen(true)
  }

  return (
    <PageLayout>
      <div className="flex flex-1 flex-col h-full">
        <div className="flex flex-1 flex-col gap-4 p-4 min-h-0">
          <div className="bg-background border rounded-xl">
            <EntityPageHeader title="Tags" entityType="tag" onAdd={handleAdd} />
          </div>
          <div className="bg-background border flex-1 rounded-xl">
            <div className="p-4">
              <TagList tags={tags ?? []} isLoading={isLoading} />
            </div>
          </div>
        </div>
      </div>
      <CreateTagModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} />
    </PageLayout>
  )
}

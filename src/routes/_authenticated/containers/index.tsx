import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

import { PageLayout } from '@/Global/layout/PageLayout'
import { SearchEntityHeader } from '@/Global/components/molecules/headers'
import { CreateContainerModal } from '@/Container/components/organisms/modals'
import { ContainerArchive } from '@/Container/components/organisms/archive'

export const Route = createFileRoute('/_authenticated/containers/')({
  component: ContainersPage,
})

function ContainersPage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleAdd = () => {
    setIsCreateModalOpen(true)
  }

  return (
    <PageLayout>
      <div className="flex flex-1 flex-col h-full">
        <div className="flex flex-1 flex-col gap-4 min-h-0 p-4">
          <SearchEntityHeader
            title="Containers"
            entityType="container"
            addEntity="container"
            onAdd={handleAdd}
            searchValue={searchQuery}
            onSearch={setSearchQuery}
          />
          <ContainerArchive />
        </div>
      </div>
      <CreateContainerModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </PageLayout>
  )
}

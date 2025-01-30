import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'

import { EntityHeader } from '@/Global/components/molecules/headers'
import { PageLayout } from '@/Global/layout/PageLayout'
import { useContainers, useUpdateContainer } from '@/Container/queries'
import { useWorkspaces } from '@/Workspace/queries'
import { ContainerOrganiser } from '@/Container/components/organisms/organiser/ContainerOrganiser'
import { CreateContainerModal } from '@/Container/components/organisms/modals/ContainerModal'

export const Route = createFileRoute('/_authenticated/containers/')({
  component: ContainersPage,
})

function ContainersPage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const { data: containers } = useContainers()
  const { data: workspaces } = useWorkspaces()
  const updateContainer = useUpdateContainer()

  const handleUpdateContainer = (containerId: number, workspaceId: number | undefined) => {
    const container = containers?.find((container) => container.id === containerId)
    if (container) {
      updateContainer.mutate({
        id: containerId,
        workspaceId,
        name: container.name,
        location: container.location,
        number: container.number,
      })
    }
  }

  return (
    <PageLayout>
      <div className="flex flex-1 flex-col h-full">
        <div className="flex flex-1 flex-col gap-4 p-4 min-h-0">
          <EntityHeader
            title="Containers"
            entityType="container"
            onAdd={() => setIsCreateModalOpen(true)}
          />

          <ContainerOrganiser
            containers={containers ?? []}
            workspaces={workspaces ?? []}
            onUpdateContainer={handleUpdateContainer}
          />
        </div>
      </div>
      <CreateContainerModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </PageLayout>
  )
}

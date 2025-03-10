import { useState } from 'react'
import { Pencil, Trash2, MoreVertical, ArrowRight } from 'lucide-react'

import {
  Button,
  Label,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  PrintQRButton,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/Global/components/atoms'
import { NotAssignedSection, Section, Muted } from '@/Global/components/molecules'
import { DeleteModal } from '@/Storage/Collection/components/organisms/modals'
import { Container } from '@/Storage/Container/types'
import { UpdateContainerData } from '@/Storage/Container/schemas'
import { ContainerDetailForm } from './ContainerDetailForm'

interface ContainerDetailsSectionProps {
  container: Container | undefined
  emptyStateComponent?: React.ReactNode
  onUpdateContainer?: (data: UpdateContainerData) => Promise<void>
  onAssignOrReassign?: () => void
  isUpdating?: boolean
  allowReassignment?: boolean
}

export function ContainerDetailsSection({
  container,
  emptyStateComponent,
  onUpdateContainer,
  onAssignOrReassign,
  isUpdating,
  allowReassignment,
}: ContainerDetailsSectionProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [formData, setFormData] = useState<Partial<UpdateContainerData> | null>(null)

  if (container?.name === '' || !container) {
    return (
      emptyStateComponent || (
        <NotAssignedSection
          title="Container"
          message="No container assigned to this item yet."
          actionLabel="Assign Container"
          onAction={onAssignOrReassign}
        />
      )
    )
  }

  const handleEdit = () => {
    setFormData({
      id: container.id,
      name: container.name,
      location: container.location,
    })
    setIsEditing(true)
  }

  const handleCancel = () => {
    setFormData(null)
    setIsEditing(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData || !onUpdateContainer) return

    await onUpdateContainer({
      id: container.id,
      name: formData.name || container.name,
      ...formData,
    })

    setIsEditing(false)
    setFormData(null)
  }

  return (
    <Section className="bg-background transition-colors duration-200">
      <Card className="h-fit">
        <CardHeader>
          <div className="flex justify-between items-center flex-shrink-0">
            <div>
              <CardTitle>Container Details</CardTitle>
              {container.description && <CardDescription>{container.description}</CardDescription>}
            </div>
            {!isEditing && (
              <div className="flex gap-2">
                <PrintQRButton qrImage={container.qrCodeImage} qrCode={container.qrCode} />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="secondary" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-background border-border">
                    {allowReassignment && (
                      <DropdownMenuItem onClick={onAssignOrReassign}>
                        <ArrowRight className="h-4 w-4 mr-2" />
                        <span>Reassign Container</span>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem onClick={handleEdit}>
                      <Pencil className="h-4 w-4 mr-2" />
                      <span>Edit</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => setIsDeleteModalOpen(true)}
                      className="text-destructive focus:text-destructive"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      <span>Delete</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}
            {isEditing && (
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  onClick={handleCancel}
                  disabled={isUpdating}
                  className="hover:bg-contrast-accent"
                >
                  Cancel
                </Button>
                <Button onClick={handleSubmit} disabled={isUpdating}>
                  {isUpdating ? 'Saving...' : 'Save Changes'}
                </Button>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4" role="group" aria-label="Container information">
            <div className="row-span-4 flex flex-col items-center justify-center">
              <Label className="text-center mb-1.5" htmlFor="qr-code">
                QR Code
              </Label>
              <div
                className="w-64 h-64 rounded-lg p-3 border border-border bg-background"
                id="qr-code"
                role="img"
                aria-label={`QR Code for container ${container.name}`}
              >
                <img
                  src={container.qrCodeImage}
                  alt={`QR Code for container ${container.name}`}
                  className="w-full h-full"
                />
              </div>
              <Muted className="mt-2 font-mono" aria-label="QR Code value">
                {container.qrCode}
              </Muted>
            </div>

            <ContainerDetailForm
              container={container}
              isEditing={isEditing}
              formData={formData}
              onInputChange={handleInputChange}
              onSubmit={handleSubmit}
            />
          </div>

          <DeleteModal
            isOpen={isDeleteModalOpen}
            onClose={() => setIsDeleteModalOpen(false)}
            entityType="container"
            entityId={container.id}
            entityName={container.name}
          />
        </CardContent>
      </Card>
    </Section>
  )
}

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  ScrollArea,
  ScrollBar,
  ToggleGroup,
  ToggleGroupItem,
} from '@/Global/components/atoms'
import { Section } from '@/Global/components/molecules'
import { cn } from '@/Global/lib'
import { Tag } from '@/Tag/types'

interface TagSelectorProps {
  tags: Tag[]
  selectedTagIds: string[]
  selectedItemIds: Set<number>
  onTagToggle: (values: string[]) => void
  onSave: () => void
}

export function TagSelector({
  tags,
  selectedTagIds,
  selectedItemIds,
  onTagToggle,
  onSave,
}: TagSelectorProps) {
  return (
    <Section>
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center flex-shrink-0">
            <div className="flex flex-col gap-2">
              <CardTitle className="gap-2 text-xl">All Tags</CardTitle>
              <CardDescription>
                Select any number of tags and items to tag selected items, dont forget to save!{' '}
              </CardDescription>
            </div>

            <div className="flex gap-2">
              <Button
                variant="ghost"
                // onClick={handleCancel}
                // disabled={isUpdating}
                className="hover:bg-contrast-accent"
              >
                Cancel
              </Button>
              <Button
                onClick={onSave}
                disabled={
                  // isUpdating ||
                  selectedTagIds.length === 0 || selectedItemIds.size === 0
                }
              >
                Save Changes
                {/* {isUpdating ? 'Saving...' : 'Save Changes'} */}
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex">
            <ScrollArea type="always" className="w-1 flex-1">
              <div className="min-w-max">
                <ToggleGroup
                  type="multiple"
                  value={selectedTagIds}
                  onValueChange={onTagToggle}
                  className="flex flex-wrap gap-2"
                >
                  {tags?.map((tag) => (
                    <ToggleGroupItem
                      key={tag.id}
                      value={String(tag.id)}
                      className={cn(
                        'px-2 py-0.5 text-sm',
                        'flex items-center gap-1.5 whitespace-nowrap',
                      )}
                      style={{
                        color: tag.colour || 'currentColor',
                      }}
                    >
                      <div
                        className="h-2 w-2 rounded-full"
                        style={{ backgroundColor: 'currentColor' }}
                      />
                      {tag.name}
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              </div>
              <ScrollBar orientation="horizontal" className="w-full" />
            </ScrollArea>
          </div>
        </CardContent>
      </Card>
    </Section>
  )
}

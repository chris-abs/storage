import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/cadence/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authenticated/cadence/"!</div>
}

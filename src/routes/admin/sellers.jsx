import AdminLayout from '@/components/admin/AdminLayout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/sellers')({
  component: RouteComponent,
})

function RouteComponent() {
    return(
        <AdminLayout>
            <div>Hello "/admin/sellers"!</div>
        </AdminLayout>
    )
}

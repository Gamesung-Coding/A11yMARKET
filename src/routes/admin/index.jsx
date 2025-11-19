import { createFileRoute, Link } from '@tanstack/react-router'
import AdminLayout from '@/components/admin/AdminLayout'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/admin/')({
  component: RouteComponent,
})

function RouteComponent() {

    // 임시 더미 데이터
    const pendingSellers = [
        { id: 1, name: "판매자 A" },
        { id: 2, name: "판매자 B" },
        { id: 3, name: "판매자 C" },
    ]

    const pendingProducts = [
        { id: 1, name: "상품 A", seller: "판매자 A" },
        { id: 2, name: "상품 B", seller: "판매자 B" },
        { id: 3, name: "상품 C", seller: "판매자 C" },
        { id: 4, name: "상품 D", seller: "판매자 A" },
    ]

    const pendingAccessibility = [
        { id: 1, seller: "판매자 B" },
        { id: 2, seller: "판매자 C" },
    ]

    return (
        <AdminLayout>
        <div className="text-3xl font-semibold text-center mb-10">관리자페이지</div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white shadow-md">
            <CardContent>
                <div className="text-lg font-medium mb-2">승인 대기 판매자</div>
                <div className="text-gray-600">현재 승인 대기 판매자는 {pendingSellers.length}명 입니다.</div>
            </CardContent>
            <CardFooter>
                <Link to="/admin/sellers" className="w-full block">
                <Button variant="default" className="w-full">
                    판매자 관리
                </Button>
                </Link>
            </CardFooter>
            </Card>

            <Card className="bg-white shadow-md">
            <CardContent>
                <div className="text-lg font-medium mb-2">미승인 상품</div>
                <div className="text-gray-600">현재 미승인 상품 수는 {pendingProducts.length}개 입니다.</div>
            </CardContent>
            <CardFooter>
                <Link to="/admin/products" className="w-full block">
                <Button variant="default" className="w-full">
                    상품 승인 관리
                </Button>
                </Link>
            </CardFooter>
            </Card>

            <Card className="bg-white shadow-md">
            <CardContent>
                <div className="text-lg font-medium mb-2">접근성 인증 대기 판매자</div>
                <div className="text-gray-600">현재 접근성 인증 대기 판매자는 {pendingAccessibility.length}명 입니다.</div>
            </CardContent>
            <CardFooter>
                <Link to="/admin/accessibility" className="w-full block">
                <Button variant="default" className="w-full">
                    접근성 인증 관리
                </Button>
                </Link>
            </CardFooter>
            </Card>
        </div>
        </AdminLayout>
    )
}


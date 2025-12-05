import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import ProductDetail from "@/components/ProductDetail"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Product Details - Apex Arms",
  description: "View detailed specifications, pricing, and safety information for this product.",
}

export default function ProductDetailPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <ProductDetail />
      </main>
      <Footer />
    </>
  )
}

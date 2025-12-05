import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import ProductListing from "@/components/ProductListing"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shop All Products - Apex Arms",
  description: "Browse our complete selection of firearms, ammunition, and accessories. Quality products from trusted manufacturers.",
}

export default function ProductsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <ProductListing />
      </main>
      <Footer />
    </>
  )
}

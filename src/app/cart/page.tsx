import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import ShoppingCart from "@/components/ShoppingCart"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shopping Cart - Apex Arms",
  description: "Review your cart and proceed to checkout.",
}

export default function CartPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <ShoppingCart />
      </main>
      <Footer />
    </>
  )
}

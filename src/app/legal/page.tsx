import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import LegalCompliance from "@/components/LegalCompliance"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Legal Compliance - Apex Arms",
  description: "Important legal information, federal and state regulations, and FFL transfer process for firearm purchases.",
}

export default function LegalPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <LegalCompliance />
      </main>
      <Footer />
    </>
  )
}

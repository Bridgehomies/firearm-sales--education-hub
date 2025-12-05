import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import SafetyResources from "@/components/SafetyResources"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Safety Resources - Apex Arms",
  description: "Essential firearm safety information, training resources, and best practices for responsible gun ownership.",
}

export default function SafetyPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <SafetyResources />
      </main>
      <Footer />
    </>
  )
}

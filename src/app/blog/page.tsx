import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import BlogGrid from "@/components/BlogGrid"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Educational Blog - Apex Arms",
  description: "Expert advice, tips, and educational content about firearms, shooting sports, maintenance, and responsible gun ownership.",
}

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <BlogGrid />
      </main>
      <Footer />
    </>
  )
}

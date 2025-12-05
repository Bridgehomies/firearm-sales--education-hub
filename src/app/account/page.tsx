import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import AccountDashboard from "@/components/AccountDashboard"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "My Account - Apex Arms",
  description: "Manage your account, view orders, and update your preferences.",
}

export default function AccountPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <AccountDashboard />
      </main>
      <Footer />
    </>
  )
}

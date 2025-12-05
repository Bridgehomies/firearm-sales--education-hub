import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import SafetyBanner from "@/components/SafetyBanner"
import FeaturedProducts from "@/components/FeaturedProducts"
import CategoryGrid from "@/components/CategoryGrid"
import WhyChooseUs from "@/components/WhyChooseUs"
import HowItWorks from "@/components/HowItWorks"
import StatsSection from "@/components/StatsSection"
import Testimonials from "@/components/Testimonials"
import NewsletterSignup from "@/components/NewsletterSignup"
import Footer from "@/components/Footer"
import AgeVerificationModal from "@/components/AgeVerificationModal"

export default function Home() {
  return (
    <>
      <AgeVerificationModal />
      <Navigation />
      <main>
        <Hero />
        <SafetyBanner />
        <FeaturedProducts />
        <CategoryGrid />
        <WhyChooseUs />
        <HowItWorks />
        <StatsSection />
        <Testimonials />
        <NewsletterSignup />
      </main>
      <Footer />
    </>
  )
}
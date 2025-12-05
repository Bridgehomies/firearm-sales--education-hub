"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Shield, Award, Truck } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background">
      <div className="container py-16 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium">
            <Shield className="h-3.5 w-3.5" />
            Licensed FFL Dealer Since 1995
          </div>
          
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Premium Firearms & Accessories
          </h1>
          
          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            Quality products for responsible firearm owners, backed by expert service and 29+ years of experience.
          </p>
          
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/products">
              <Button size="lg" className="w-full sm:w-auto">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/safety">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Safety Resources
              </Button>
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Licensed & Certified</h3>
                <p className="text-sm text-muted-foreground">FFL Licensed Dealer</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Expert Service</h3>
                <p className="text-sm text-muted-foreground">29+ Years Experience</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Truck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Secure Shipping</h3>
                <p className="text-sm text-muted-foreground">Fast & Legal Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
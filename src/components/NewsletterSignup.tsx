"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, ArrowRight } from "lucide-react"
import { toast } from "sonner"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      toast.success("Successfully subscribed to newsletter!")
      setEmail("")
      setIsLoading(false)
    }, 1000)
  }

  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-8 md:p-12 lg:p-16 text-primary-foreground shadow-2xl">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/10 backdrop-blur">
              <Mail className="h-8 w-8" />
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Stay Informed
            </h2>
            
            <p className="text-lg mb-8 opacity-90 max-w-2xl">
              Get exclusive deals, new product announcements, and safety tips delivered to your inbox
            </p>

            <form onSubmit={handleSubmit} className="w-full max-w-md">
              <div className="flex flex-col gap-3 sm:flex-row">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:bg-primary-foreground/20"
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  {isLoading ? "Subscribing..." : "Subscribe"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <p className="mt-3 text-xs opacity-75">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

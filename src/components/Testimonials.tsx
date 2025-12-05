"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Michael Patterson",
    role: "Law Enforcement Officer",
    content: "Outstanding service and selection. The team at Apex Arms helped me find exactly what I needed for duty use. Their knowledge of compliance and regulations is exceptional.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Sport Shooter",
    content: "As a competitive shooter, I rely on Apex Arms for quality equipment. Fast shipping, great prices, and they always have the latest products in stock. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150"
  },
  {
    id: 3,
    name: "David Thompson",
    role: "Firearm Collector",
    content: "Been a customer for over 10 years. Their expertise in rare and collectible firearms is unmatched. Always professional, always reliable.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150"
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of satisfied customers who trust Apex Arms
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Card className="border-2">
            <CardContent className="p-8 md:p-12">
              <Quote className="h-10 w-10 text-primary/20 mb-6" />
              
              <div className="mb-6 flex gap-1">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-lg md:text-xl leading-relaxed mb-8 text-foreground/90">
                "{currentTestimonial.content}"
              </p>

              <div className="flex items-center gap-4 mb-8">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{currentTestimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{currentTestimonial.role}</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 w-2 rounded-full transition-all ${
                        index === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/30"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="icon" onClick={handlePrev}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={handleNext}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

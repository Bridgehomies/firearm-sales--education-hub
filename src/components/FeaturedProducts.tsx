"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, ShoppingCart, Eye } from "lucide-react"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Glock 19 Gen5",
    category: "Handguns",
    price: 549.99,
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=500",
    badge: "Best Seller",
    caliber: "9mm",
    inStock: true
  },
  {
    id: 2,
    name: "AR-15 Sport II",
    category: "Rifles",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=500",
    badge: "Featured",
    caliber: "5.56 NATO",
    inStock: true
  },
  {
    id: 3,
    name: "Remington 870",
    category: "Shotguns",
    price: 449.99,
    image: "https://images.unsplash.com/photo-1614887533375-4c58e6c93ba9?q=80&w=500",
    badge: "New Arrival",
    caliber: "12 Gauge",
    inStock: true
  },
  {
    id: 4,
    name: "Sig Sauer P320",
    category: "Handguns",
    price: 649.99,
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=500",
    badge: "Popular",
    caliber: "9mm",
    inStock: false
  },
  {
    id: 5,
    name: "Ruger 10/22",
    category: "Rifles",
    price: 329.99,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=500",
    badge: "Great Value",
    caliber: ".22 LR",
    inStock: true
  }
]

export default function FeaturedProducts() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const itemsPerPage = 3
  const maxIndex = Math.max(0, products.length - itemsPerPage)

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Products</h2>
            <p className="mt-2 text-muted-foreground">Top picks from our extensive inventory</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
          >
            {products.map((product) => (
              <div key={product.id} className="min-w-[calc(100%-1.5rem)] sm:min-w-[calc(50%-1.5rem)] lg:min-w-[calc(33.333%-1.5rem)]">
                <Card className="h-full overflow-hidden transition-shadow hover:shadow-lg">
                  <CardHeader className="p-0">
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform hover:scale-105"
                      />
                      <Badge className="absolute left-3 top-3">{product.badge}</Badge>
                      {!product.inStock && (
                        <Badge variant="destructive" className="absolute right-3 top-3">
                          Out of Stock
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="mb-2 text-sm text-muted-foreground">{product.category}</div>
                    <h3 className="mb-2 text-lg font-semibold">{product.name}</h3>
                    <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                      <span>Caliber: {product.caliber}</span>
                    </div>
                    <div className="text-2xl font-bold">${product.price.toFixed(2)}</div>
                  </CardContent>
                  <CardFooter className="flex gap-2 p-4 pt-0">
                    <Link href={`/products/${product.id}`} className="flex-1">
                      <Button variant="outline" className="w-full" size="sm">
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </Button>
                    </Link>
                    <Button
                      className="flex-1"
                      size="sm"
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/products">
            <Button variant="outline" size="lg">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

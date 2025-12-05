import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    name: "Handguns",
    description: "Pistols & Revolvers",
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=800",
    href: "/products/handguns",
    count: "250+ Models"
  },
  {
    name: "Rifles",
    description: "Modern & Classic",
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=800",
    href: "/products/rifles",
    count: "180+ Models"
  },
  {
    name: "Shotguns",
    description: "Pump, Semi-Auto & More",
    image: "https://images.unsplash.com/photo-1614887533375-4c58e6c93ba9?q=80&w=800",
    href: "/products/shotguns",
    count: "120+ Models"
  },
  {
    name: "Ammunition",
    description: "All Calibers Available",
    image: "https://images.unsplash.com/photo-1551195510-d5c1f6f77939?q=80&w=800",
    href: "/products/ammunition",
    count: "500+ Options"
  },
  {
    name: "Optics & Sights",
    description: "Scopes, Red Dots & More",
    image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?q=80&w=800",
    href: "/products/optics",
    count: "150+ Products"
  },
  {
    name: "Accessories",
    description: "Holsters, Cases & Gear",
    image: "https://images.unsplash.com/photo-1585384086921-2ca05dff0045?q=80&w=800",
    href: "/products/accessories",
    count: "300+ Items"
  }
]

export default function CategoryGrid() {
  return (
    <section className="py-16 lg:py-24 bg-muted/40">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Shop by Category</h2>
          <p className="mt-2 text-muted-foreground">Browse our complete selection of firearms and accessories</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.name} href={category.href}>
              <Card className="group h-full overflow-hidden transition-all hover:shadow-lg hover:scale-[1.02]">
                <CardContent className="p-0">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="h-full w-full object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="mb-1 text-sm opacity-90">{category.count}</div>
                      <h3 className="mb-1 text-2xl font-bold">{category.name}</h3>
                      <p className="mb-3 text-sm opacity-90">{category.description}</p>
                      <div className="flex items-center gap-2 text-sm font-medium">
                        Shop Now
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { ShoppingCart, Eye, Filter, X } from "lucide-react"
import Link from "next/link"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const allProducts = [
  {
    id: 1,
    name: "Glock 19 Gen5",
    category: "Handguns",
    manufacturer: "Glock",
    price: 549.99,
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=500",
    caliber: "9mm",
    capacity: "15+1",
    inStock: true,
    rating: 4.8
  },
  {
    id: 2,
    name: "AR-15 Sport II",
    category: "Rifles",
    manufacturer: "Smith & Wesson",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=500",
    caliber: "5.56 NATO",
    capacity: "30",
    inStock: true,
    rating: 4.9
  },
  {
    id: 3,
    name: "Remington 870 Express",
    category: "Shotguns",
    manufacturer: "Remington",
    price: 449.99,
    image: "https://images.unsplash.com/photo-1614887533375-4c58e6c93ba9?q=80&w=500",
    caliber: "12 Gauge",
    capacity: "4+1",
    inStock: true,
    rating: 4.7
  },
  {
    id: 4,
    name: "Sig Sauer P320",
    category: "Handguns",
    manufacturer: "Sig Sauer",
    price: 649.99,
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=500",
    caliber: "9mm",
    capacity: "17+1",
    inStock: false,
    rating: 4.9
  },
  {
    id: 5,
    name: "Ruger 10/22 Carbine",
    category: "Rifles",
    manufacturer: "Ruger",
    price: 329.99,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=500",
    caliber: ".22 LR",
    capacity: "10",
    inStock: true,
    rating: 4.8
  },
  {
    id: 6,
    name: "Mossberg 500",
    category: "Shotguns",
    manufacturer: "Mossberg",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1614887533375-4c58e6c93ba9?q=80&w=500",
    caliber: "12 Gauge",
    capacity: "5+1",
    inStock: true,
    rating: 4.6
  },
  {
    id: 7,
    name: "Springfield XD-M Elite",
    category: "Handguns",
    manufacturer: "Springfield",
    price: 579.99,
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=500",
    caliber: "9mm",
    capacity: "19+1",
    inStock: true,
    rating: 4.7
  },
  {
    id: 8,
    name: "Ruger AR-556",
    category: "Rifles",
    manufacturer: "Ruger",
    price: 849.99,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=500",
    caliber: "5.56 NATO",
    capacity: "30",
    inStock: true,
    rating: 4.8
  }
]

export default function ProductListing() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedManufacturers, setSelectedManufacturers] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [sortBy, setSortBy] = useState("featured")
  const [showInStockOnly, setShowInStockOnly] = useState(false)

  const categories = Array.from(new Set(allProducts.map(p => p.category)))
  const manufacturers = Array.from(new Set(allProducts.map(p => p.manufacturer)))

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    )
  }

  const toggleManufacturer = (manufacturer: string) => {
    setSelectedManufacturers(prev =>
      prev.includes(manufacturer) ? prev.filter(m => m !== manufacturer) : [...prev, manufacturer]
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedManufacturers([])
    setPriceRange([0, 1000])
    setShowInStockOnly(false)
  }

  let filteredProducts = allProducts.filter(product => {
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) return false
    if (selectedManufacturers.length > 0 && !selectedManufacturers.includes(product.manufacturer)) return false
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false
    if (showInStockOnly && !product.inStock) return false
    return true
  })

  // Sort products
  filteredProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "name":
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  const FilterContent = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Filters</h3>
        <Button variant="ghost" size="sm" onClick={clearFilters}>
          Clear All
        </Button>
      </div>

      {/* Categories */}
      <div>
        <h4 className="mb-3 font-medium">Category</h4>
        <div className="space-y-2">
          {categories.map(category => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={`cat-${category}`}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => toggleCategory(category)}
              />
              <Label htmlFor={`cat-${category}`} className="text-sm font-normal cursor-pointer">
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Manufacturers */}
      <div>
        <h4 className="mb-3 font-medium">Manufacturer</h4>
        <div className="space-y-2">
          {manufacturers.map(manufacturer => (
            <div key={manufacturer} className="flex items-center space-x-2">
              <Checkbox
                id={`mfg-${manufacturer}`}
                checked={selectedManufacturers.includes(manufacturer)}
                onCheckedChange={() => toggleManufacturer(manufacturer)}
              />
              <Label htmlFor={`mfg-${manufacturer}`} className="text-sm font-normal cursor-pointer">
                {manufacturer}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h4 className="mb-3 font-medium">Price Range</h4>
        <div className="space-y-4">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={1000}
            min={0}
            step={50}
            className="w-full"
          />
          <div className="flex items-center justify-between text-sm">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}+</span>
          </div>
        </div>
      </div>

      {/* In Stock Only */}
      <div className="flex items-center space-x-2">
        <Checkbox
          id="in-stock"
          checked={showInStockOnly}
          onCheckedChange={(checked) => setShowInStockOnly(checked as boolean)}
        />
        <Label htmlFor="in-stock" className="text-sm font-normal cursor-pointer">
          In Stock Only
        </Label>
      </div>
    </div>
  )

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">All Products</h1>
        <p className="text-muted-foreground">Browse our complete selection of firearms and accessories</p>
      </div>

      <div className="flex gap-8">
        {/* Desktop Filters */}
        <aside className="hidden w-64 shrink-0 lg:block">
          <div className="sticky top-24">
            <FilterContent />
          </div>
        </aside>

        {/* Products */}
        <div className="flex-1">
          {/* Toolbar */}
          <div className="mb-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="lg:hidden">
                    <Filter className="mr-2 h-4 w-4" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px]">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterContent />
                  </div>
                </SheetContent>
              </Sheet>
              <span className="text-sm text-muted-foreground">
                {filteredProducts.length} products found
              </span>
            </div>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="name">Name: A-Z</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Product Grid */}
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden transition-shadow hover:shadow-lg">
                <CardHeader className="p-0">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                    {!product.inStock && (
                      <Badge variant="destructive" className="absolute right-3 top-3">
                        Out of Stock
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{product.category}</span>
                    <span className="text-sm text-muted-foreground">⭐ {product.rating}</span>
                  </div>
                  <h3 className="mb-1 font-semibold">{product.name}</h3>
                  <p className="mb-3 text-sm text-muted-foreground">{product.manufacturer}</p>
                  <div className="mb-3 flex items-center gap-4 text-sm">
                    <span>{product.caliber}</span>
                    <span>•</span>
                    <span>{product.capacity} rounds</span>
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
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-12 text-center">
              <p className="mb-4 text-muted-foreground">No products found matching your filters.</p>
              <Button onClick={clearFilters}>Clear Filters</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

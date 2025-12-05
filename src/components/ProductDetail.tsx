"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { ShoppingCart, Heart, Share2, AlertCircle, Shield, Package, Truck } from "lucide-react"

const productData = {
  id: 1,
  name: "Glock 19 Gen5",
  manufacturer: "Glock",
  category: "Handguns",
  price: 549.99,
  inStock: true,
  rating: 4.8,
  reviews: 127,
  sku: "GLK-19-G5-9MM",
  images: [
    "https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=800",
    "https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=800",
    "https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=800",
  ],
  description: "The GLOCK 19 Gen5 is a reliable, accurate, and easy-to-shoot 9mm semi-automatic pistol. This model features the Modular Backstrap System, ambidextrous magazine release, and GLOCK Marksman Barrel for enhanced accuracy.",
  specifications: {
    caliber: "9x19mm",
    capacity: "15+1 rounds",
    barrel: "4.02 inches",
    overall: "7.36 inches",
    height: "5.04 inches",
    width: "1.26 inches",
    weight: "23.65 oz (unloaded)",
    finish: "nDLC",
    sights: "Fixed",
    action: "Safe Action",
    frame: "Polymer"
  },
  features: [
    "GLOCK Marksman Barrel (GMB) for enhanced accuracy",
    "nDLC finish for tougher, more durable protection",
    "Improved grip texture for better control",
    "Ambidextrous slide stop levers",
    "No finger grooves for better versatility",
    "Flared mag-well for easier reloading",
    "Reversible magazine catch"
  ],
  safety: [
    "Always keep firearm pointed in a safe direction",
    "Treat all firearms as if they are loaded",
    "Keep your finger off the trigger until ready to shoot",
    "Be certain of your target and what is beyond it",
    "Store securely away from children and unauthorized users"
  ],
  legal: [
    "Must be 21 years or older to purchase handguns",
    "Valid government-issued photo ID required",
    "Must pass federal NICS background check",
    "Ships to licensed FFL dealer only",
    "Some state and local restrictions may apply",
    "Buyer responsible for knowing and complying with all applicable laws"
  ]
}

export default function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="container py-8">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Image Gallery */}
        <div>
          <div className="relative mb-4 aspect-square overflow-hidden rounded-lg border bg-muted">
            <img
              src={productData.images[selectedImage]}
              alt={productData.name}
              className="h-full w-full object-cover"
            />
            {!productData.inStock && (
              <Badge variant="destructive" className="absolute right-4 top-4">
                Out of Stock
              </Badge>
            )}
          </div>
          <div className="grid grid-cols-4 gap-2">
            {productData.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                  selectedImage === index ? "border-primary" : "border-transparent"
                }`}
              >
                <img src={image} alt={`${productData.name} ${index + 1}`} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-2 text-sm text-muted-foreground">{productData.manufacturer}</div>
          <h1 className="mb-2 text-3xl font-bold tracking-tight">{productData.name}</h1>
          <div className="mb-4 flex items-center gap-4">
            <div className="flex items-center gap-1">
              <span className="text-lg">⭐</span>
              <span className="font-medium">{productData.rating}</span>
              <span className="text-sm text-muted-foreground">({productData.reviews} reviews)</span>
            </div>
            <span className="text-sm text-muted-foreground">SKU: {productData.sku}</span>
          </div>

          <div className="mb-6 text-4xl font-bold">${productData.price.toFixed(2)}</div>

          <Alert className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="text-sm">
              <strong>FFL Transfer Required:</strong> This firearm must be shipped to a licensed FFL dealer.
              You will need to complete a background check before taking possession.
            </AlertDescription>
          </Alert>

          <div className="mb-6 space-y-4">
            <div className="flex gap-4">
              <Button
                size="lg"
                className="flex-1"
                disabled={!productData.inStock}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
            
            {!productData.inStock && (
              <p className="text-sm text-destructive">Currently out of stock. Check back soon!</p>
            )}
          </div>

          <Separator className="my-6" />

          {/* Quick Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <Shield className="h-5 w-5 text-muted-foreground" />
              <span>Licensed FFL Dealer - Safe & Legal</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Truck className="h-5 w-5 text-muted-foreground" />
              <span>Ships to FFL Dealer - Fast & Secure</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Package className="h-5 w-5 text-muted-foreground" />
              <span>Factory New - Full Manufacturer Warranty</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-12">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="safety">Safety Info</TabsTrigger>
            <TabsTrigger value="legal">Legal Requirements</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-semibold">Product Description</h3>
                <p className="mb-6 text-muted-foreground">{productData.description}</p>
                
                <h4 className="mb-3 font-semibold">Key Features:</h4>
                <ul className="space-y-2">
                  {productData.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1 text-primary">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specifications" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-semibold">Technical Specifications</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {Object.entries(productData.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between border-b pb-2">
                      <span className="font-medium capitalize">{key}:</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="safety" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-semibold">Firearm Safety Information</h3>
                <Alert className="mb-6 border-amber-500/50 bg-amber-50 dark:bg-amber-950/20">
                  <AlertCircle className="h-4 w-4 text-amber-600" />
                  <AlertDescription>
                    <strong>Critical:</strong> Read and understand all safety information before handling any firearm.
                  </AlertDescription>
                </Alert>
                
                <h4 className="mb-3 font-semibold">Four Fundamental Rules of Firearm Safety:</h4>
                <ul className="space-y-3">
                  {productData.safety.map((rule, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        {index + 1}
                      </span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-lg bg-muted p-4">
                  <p className="text-sm">
                    For comprehensive safety training and resources, visit our{" "}
                    <a href="/safety" className="font-medium text-primary hover:underline">
                      Safety Resources
                    </a>{" "}
                    page. We strongly recommend professional training for all firearm owners.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="legal" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-semibold">Legal Requirements & Compliance</h3>
                <Alert className="mb-6 border-destructive/50 bg-destructive/5">
                  <Shield className="h-4 w-4 text-destructive" />
                  <AlertDescription>
                    <strong>Important:</strong> You are responsible for knowing and complying with all federal, state, and local laws.
                  </AlertDescription>
                </Alert>

                <h4 className="mb-3 font-semibold">Purchase Requirements:</h4>
                <ul className="mb-6 space-y-2">
                  {productData.legal.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1 text-destructive">•</span>
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>

                <div className="rounded-lg bg-muted p-4">
                  <h4 className="mb-2 font-semibold">FFL Transfer Process:</h4>
                  <ol className="space-y-2 text-sm">
                    <li>1. Complete your purchase online</li>
                    <li>2. Provide your local FFL dealer's information</li>
                    <li>3. We ship the firearm to your FFL dealer</li>
                    <li>4. Complete background check at FFL dealer</li>
                    <li>5. Take possession once approved</li>
                  </ol>
                </div>

                <p className="mt-4 text-sm text-muted-foreground">
                  Questions about the legal requirements or transfer process?{" "}
                  <a href="/legal" className="font-medium text-primary hover:underline">
                    Visit our Legal Compliance page
                  </a>{" "}
                  or contact us at 1-800-FIREARMS.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

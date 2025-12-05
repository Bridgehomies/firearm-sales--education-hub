"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Trash2, Plus, Minus, ShoppingBag, AlertCircle, Lock } from "lucide-react"
import Link from "next/link"

const initialCartItems = [
  {
    id: 1,
    name: "Glock 19 Gen5",
    manufacturer: "Glock",
    price: 549.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=200",
    sku: "GLK-19-G5-9MM",
    inStock: true,
    requiresFFL: true
  },
  {
    id: 2,
    name: "Federal 9mm Ammo (50 rounds)",
    manufacturer: "Federal",
    price: 24.99,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1551195510-d5c1f6f77939?q=80&w=200",
    sku: "FED-9MM-50",
    inStock: true,
    requiresFFL: false
  },
  {
    id: 3,
    name: "Gun Cleaning Kit",
    manufacturer: "Hoppes",
    price: 34.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1585384086921-2ca05dff0045?q=80&w=200",
    sku: "HOP-CLN-KIT",
    inStock: true,
    requiresFFL: false
  }
]

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [promoCode, setPromoCode] = useState("")

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    )
  }

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 15.99
  const tax = subtotal * 0.0825
  const total = subtotal + shipping + tax

  const hasFFLItems = cartItems.some(item => item.requiresFFL)

  return (
    <div className="container py-12">
      <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-16">
            <ShoppingBag className="mb-4 h-16 w-16 text-muted-foreground" />
            <h2 className="mb-2 text-xl font-semibold">Your cart is empty</h2>
            <p className="mb-6 text-muted-foreground">Add some products to get started</p>
            <Link href="/products">
              <Button>Continue Shopping</Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {hasFFLItems && (
              <Alert className="mb-6">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>FFL Transfer Required:</strong> Your cart contains firearms that must be shipped to a licensed FFL dealer.
                </AlertDescription>
              </Alert>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Cart Items ({cartItems.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id}>
                      <div className="flex gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-24 w-24 rounded-lg border object-cover"
                        />
                        <div className="flex-1">
                          <div className="mb-1 font-semibold">{item.name}</div>
                          <div className="mb-2 text-sm text-muted-foreground">{item.manufacturer}</div>
                          <div className="mb-2 flex items-center gap-2">
                            {item.requiresFFL && (
                              <span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-900 dark:bg-amber-950 dark:text-amber-100">
                                FFL Required
                              </span>
                            )}
                            <span className="text-sm text-muted-foreground">SKU: {item.sku}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, -1)}
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="w-8 text-center font-medium">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, 1)}
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-destructive"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash2 className="mr-2 h-4 w-4" />
                              Remove
                            </Button>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">${(item.price * item.quantity).toFixed(2)}</div>
                          <div className="text-sm text-muted-foreground">${item.price.toFixed(2)} each</div>
                        </div>
                      </div>
                      <Separator className="mt-4" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Estimated Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>

                  <div className="space-y-2">
                    <Input
                      placeholder="Promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <Button variant="outline" className="w-full">
                      Apply Code
                    </Button>
                  </div>

                  <Button className="w-full" size="lg">
                    <Lock className="mr-2 h-4 w-4" />
                    Proceed to Checkout
                  </Button>

                  <Link href="/products">
                    <Button variant="outline" className="w-full">
                      Continue Shopping
                    </Button>
                  </Link>

                  <div className="rounded-lg bg-muted p-4 text-sm">
                    <div className="mb-2 font-semibold">Secure Checkout</div>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      <li>• SSL encrypted payment</li>
                      <li>• FFL verification included</li>
                      <li>• Background check required</li>
                      <li>• Ships within 1-3 business days</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}

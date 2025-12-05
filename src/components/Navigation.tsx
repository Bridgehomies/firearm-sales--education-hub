"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingCart, Menu, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"

export default function Navigation() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [cartCount] = useState(0)

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between gap-4">
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[280px]">
            <div className="flex flex-col gap-6 pt-6">
              <Link href="/products" className="text-sm font-medium hover:text-primary">
                Shop All
              </Link>
              <Link href="/safety" className="flex items-center gap-2 text-sm font-medium hover:text-primary">
                <Shield className="h-4 w-4" />
                Safety & Legal
              </Link>
              <Link href="/blog" className="text-sm font-medium hover:text-primary">
                Education
              </Link>
              <Link href="/account" className="text-sm font-medium hover:text-primary">
                Account
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link href="/" className="flex-shrink-0 text-xl font-bold tracking-tight lg:text-2xl">
          APEX ARMS
        </Link>

        {/* Desktop Menu */}
        <div className="hidden flex-1 lg:flex lg:items-center lg:justify-center lg:gap-8">
          <Link href="/products" className="text-sm font-medium hover:text-primary">
            Shop
          </Link>
          <Link href="/safety" className="flex items-center gap-1.5 text-sm font-medium hover:text-primary">
            <Shield className="h-3.5 w-3.5" />
            Safety & Legal
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-primary">
            Education
          </Link>
          <Link href="/account" className="text-sm font-medium hover:text-primary">
            Account
          </Link>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          {/* Search */}
          {isSearchOpen ? (
            <div className="flex items-center gap-2">
              <Input
                placeholder="Search..."
                className="h-9 w-[200px] md:w-[280px]"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-4 w-4" />
            </Button>
          )}

          {/* Cart */}
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative h-9 w-9">
              <ShoppingCart className="h-4 w-4" />
              {cartCount > 0 && (
                <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center">
                  {cartCount}
                </Badge>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
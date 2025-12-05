import Link from "next/link"
import { Shield, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">APEX ARMS</h3>
            <p className="text-sm text-muted-foreground">
              Licensed FFL dealer serving responsible firearm owners with quality products and expert service.
            </p>
            <p className="text-xs text-muted-foreground">
              FFL #: 1-23-456-78-9A-12345
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Shop</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/products" className="text-muted-foreground hover:text-foreground">All Products</Link></li>
              <li><Link href="/products/firearms" className="text-muted-foreground hover:text-foreground">Firearms</Link></li>
              <li><Link href="/products/ammunition" className="text-muted-foreground hover:text-foreground">Ammunition</Link></li>
              <li><Link href="/products/accessories" className="text-muted-foreground hover:text-foreground">Accessories</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Resources</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/safety" className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground">
                <Shield className="h-3.5 w-3.5" />
                Safety Guidelines
              </Link></li>
              <li><Link href="/legal" className="text-muted-foreground hover:text-foreground">Legal Compliance</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-foreground">Education</Link></li>
              <li><Link href="/account" className="text-muted-foreground hover:text-foreground">My Account</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Contact</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5" />
                1-800-FIREARMS
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5" />
                info@apexarms.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" />
                <span>123 Liberty Street<br />Anytown, USA 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col gap-4 text-center text-sm text-muted-foreground">
            <p className="text-xs">
              All firearms must be shipped to a licensed FFL dealer. You must be at least 18 years old (21 for handguns) and legally permitted to purchase firearms.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs">
              <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-foreground">Terms of Service</Link>
              <span>•</span>
              <Link href="/returns" className="hover:text-foreground">Returns</Link>
            </div>
            <p className="text-xs">© 2024 Apex Arms. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
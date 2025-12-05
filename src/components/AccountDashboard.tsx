"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { User, Package, MapPin, CreditCard, Settings, LogOut } from "lucide-react"

const recentOrders = [
  {
    id: "ORD-12345",
    date: "March 15, 2024",
    status: "Shipped",
    items: 2,
    total: 1249.98,
    tracking: "1Z999AA10123456784"
  },
  {
    id: "ORD-12344",
    date: "February 28, 2024",
    status: "Delivered",
    items: 1,
    total: 549.99,
    tracking: "1Z999AA10123456783"
  },
  {
    id: "ORD-12343",
    date: "February 10, 2024",
    status: "Delivered",
    items: 3,
    total: 899.97,
    tracking: "1Z999AA10123456782"
  }
]

const savedAddresses = [
  {
    id: 1,
    type: "Home",
    name: "John Doe",
    address: "123 Main Street",
    city: "Anytown",
    state: "TX",
    zip: "75001",
    default: true
  },
  {
    id: 2,
    type: "FFL Dealer",
    name: "Smith's Gun Shop",
    address: "456 Liberty Ave",
    city: "Anytown",
    state: "TX",
    zip: "75002",
    ffl: "1-23-456-78-9A-12345",
    default: false
  }
]

export default function AccountDashboard() {
  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">My Account</h1>
        <p className="text-muted-foreground">Manage your orders, addresses, and account settings</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <Card>
            <CardContent className="p-4">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  JD
                </div>
                <div>
                  <div className="font-semibold">John Doe</div>
                  <div className="text-sm text-muted-foreground">john.doe@email.com</div>
                </div>
              </div>
              <Separator className="my-4" />
              <nav className="space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Package className="mr-2 h-4 w-4" />
                  Orders
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <MapPin className="mr-2 h-4 w-4" />
                  Addresses
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Payment Methods
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
                <Separator className="my-2" />
                <Button variant="ghost" className="w-full justify-start text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              </nav>
            </CardContent>
          </Card>
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <Tabs defaultValue="orders" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="addresses">Addresses</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>

            <TabsContent value="orders">
              <Card>
                <CardHeader>
                  <CardTitle>Order History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="rounded-lg border p-4">
                        <div className="mb-3 flex items-start justify-between">
                          <div>
                            <div className="mb-1 font-semibold">{order.id}</div>
                            <div className="text-sm text-muted-foreground">{order.date}</div>
                          </div>
                          <Badge variant={order.status === "Delivered" ? "secondary" : "default"}>
                            {order.status}
                          </Badge>
                        </div>
                        <div className="mb-3 flex items-center gap-6 text-sm">
                          <span>{order.items} items</span>
                          <span className="font-semibold">${order.total.toFixed(2)}</span>
                        </div>
                        {order.tracking && (
                          <div className="mb-3 text-sm text-muted-foreground">
                            Tracking: {order.tracking}
                          </div>
                        )}
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">View Details</Button>
                          {order.status === "Shipped" && (
                            <Button variant="outline" size="sm">Track Package</Button>
                          )}
                          {order.status === "Delivered" && (
                            <Button variant="outline" size="sm">Buy Again</Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="addresses">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Saved Addresses</CardTitle>
                    <Button size="sm">Add New Address</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {savedAddresses.map((address) => (
                      <div key={address.id} className="rounded-lg border p-4">
                        <div className="mb-3 flex items-start justify-between">
                          <div>
                            <div className="mb-1 font-semibold">{address.type}</div>
                            {address.default && (
                              <Badge variant="secondary" className="mb-2">Default</Badge>
                            )}
                          </div>
                        </div>
                        <div className="mb-3 text-sm">
                          <div>{address.name}</div>
                          <div>{address.address}</div>
                          <div>{address.city}, {address.state} {address.zip}</div>
                          {address.ffl && (
                            <div className="mt-2 font-medium">FFL: {address.ffl}</div>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="outline" size="sm">Remove</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium">First Name</label>
                        <input
                          type="text"
                          defaultValue="John"
                          className="w-full rounded-md border px-3 py-2"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium">Last Name</label>
                        <input
                          type="text"
                          defaultValue="Doe"
                          className="w-full rounded-md border px-3 py-2"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Email</label>
                      <input
                        type="email"
                        defaultValue="john.doe@email.com"
                        className="w-full rounded-md border px-3 py-2"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Phone</label>
                      <input
                        type="tel"
                        defaultValue="(555) 123-4567"
                        className="w-full rounded-md border px-3 py-2"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Date of Birth</label>
                      <input
                        type="date"
                        defaultValue="1990-01-01"
                        className="w-full rounded-md border px-3 py-2"
                      />
                    </div>
                    <Separator />
                    <div>
                      <h3 className="mb-4 font-semibold">Change Password</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="mb-2 block text-sm font-medium">Current Password</label>
                          <input
                            type="password"
                            className="w-full rounded-md border px-3 py-2"
                          />
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-medium">New Password</label>
                          <input
                            type="password"
                            className="w-full rounded-md border px-3 py-2"
                          />
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-medium">Confirm New Password</label>
                          <input
                            type="password"
                            className="w-full rounded-md border px-3 py-2"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button>Save Changes</Button>
                      <Button variant="outline">Cancel</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

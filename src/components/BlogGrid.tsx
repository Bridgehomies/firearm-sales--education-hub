"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, ArrowRight, Search } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to Firearm Maintenance",
    excerpt: "Learn essential maintenance procedures to keep your firearms in top condition. Regular cleaning and proper storage are critical for reliability and longevity.",
    category: "Maintenance",
    author: "John Mitchell",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1585384086921-2ca05dff0045?q=80&w=800",
    featured: true
  },
  {
    id: 2,
    title: "Understanding Ammunition Types and Calibers",
    excerpt: "A comprehensive overview of common ammunition types, their uses, and how to choose the right caliber for your needs.",
    category: "Education",
    author: "Sarah Thompson",
    date: "March 12, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1551195510-d5c1f6f77939?q=80&w=800",
    featured: true
  },
  {
    id: 3,
    title: "First-Time Gun Owner's Checklist",
    excerpt: "Everything you need to know before and after purchasing your first firearm, from training to storage solutions.",
    category: "Beginner's Guide",
    author: "Mike Davidson",
    date: "March 10, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=800",
    featured: false
  },
  {
    id: 4,
    title: "Top 5 Home Defense Firearms for 2024",
    excerpt: "Expert recommendations for home defense firearms, including handguns, shotguns, and rifles suitable for home protection.",
    category: "Reviews",
    author: "James Cooper",
    date: "March 8, 2024",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1614887533375-4c58e6c93ba9?q=80&w=800",
    featured: false
  },
  {
    id: 5,
    title: "Concealed Carry Laws by State",
    excerpt: "Navigate the complex landscape of concealed carry laws across the United States. Know your rights and responsibilities.",
    category: "Legal",
    author: "Lisa Anderson",
    date: "March 5, 2024",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800",
    featured: false
  },
  {
    id: 6,
    title: "Proper Shooting Stance and Grip Techniques",
    excerpt: "Master the fundamentals of shooting with expert guidance on stance, grip, and trigger control for improved accuracy.",
    category: "Training",
    author: "Robert Chen",
    date: "March 3, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=800",
    featured: false
  }
]

const categories = ["All", "Education", "Maintenance", "Training", "Legal", "Reviews", "Beginner's Guide"]

export default function BlogGrid() {
  return (
    <div className="container py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Educational Resources</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Expert advice, tips, and in-depth guides to help you become a more knowledgeable and responsible firearm owner.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="relative w-full md:w-[300px]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search articles..." className="pl-9" />
        </div>
      </div>

      {/* Featured Posts */}
      <div className="mb-12">
        <h2 className="mb-6 text-2xl font-bold">Featured Articles</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {blogPosts.filter(post => post.featured).map((post) => (
            <Card key={post.id} className="overflow-hidden transition-shadow hover:shadow-lg">
              <CardHeader className="p-0">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                  <Badge className="absolute left-4 top-4">{post.category}</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-bold">{post.title}</h3>
                <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link href={`/blog/${post.id}`} className="w-full">
                  <Button variant="outline" className="w-full">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* All Posts */}
      <div>
        <h2 className="mb-6 text-2xl font-bold">Recent Articles</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.filter(post => !post.featured).map((post) => (
            <Card key={post.id} className="overflow-hidden transition-shadow hover:shadow-lg">
              <CardHeader className="p-0">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                  <Badge className="absolute left-4 top-4">{post.category}</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="mb-2 font-bold line-clamp-2">{post.title}</h3>
                <p className="mb-3 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Link href={`/blog/${post.id}`} className="w-full">
                  <Button variant="outline" size="sm" className="w-full">
                    Read More
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <Card className="mt-12 bg-muted/50">
        <CardContent className="p-8 text-center">
          <h3 className="mb-2 text-2xl font-bold">Stay Informed</h3>
          <p className="mb-6 text-muted-foreground">
            Subscribe to our newsletter for the latest articles, tips, and exclusive content.
          </p>
          <div className="mx-auto flex max-w-md gap-2">
            <Input placeholder="Enter your email" type="email" />
            <Button>Subscribe</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

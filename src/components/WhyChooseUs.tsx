import { Shield, Award, Headphones, Lock, Truck, DollarSign } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Licensed & Trusted",
    description: "FFL licensed dealer with 29+ years of experience serving the firearms community"
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "Only authentic products from reputable manufacturers with full warranties"
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "Knowledgeable staff ready to help with selection, compliance, and technical questions"
  },
  {
    icon: Lock,
    title: "Secure Transactions",
    description: "Bank-level encryption and secure payment processing for your peace of mind"
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Quick processing and secure shipping to your preferred FFL dealer"
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "Fair prices on quality products with regular sales and promotions"
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Why Choose Apex Arms?
          </h2>
          <p className="text-lg text-muted-foreground">
            We combine expertise, quality, and service to provide the best firearm purchasing experience
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/50"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

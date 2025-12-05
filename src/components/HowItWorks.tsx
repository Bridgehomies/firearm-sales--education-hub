import { Search, FileCheck, Truck, HandshakeIcon } from "lucide-react"

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Browse & Select",
    description: "Explore our extensive inventory and find the perfect firearm or accessory for your needs"
  },
  {
    icon: FileCheck,
    number: "02",
    title: "Complete Checkout",
    description: "Provide your information and select your preferred FFL dealer for transfer"
  },
  {
    icon: Truck,
    number: "03",
    title: "Secure Shipping",
    description: "We ship your order securely and directly to your chosen FFL dealer"
  },
  {
    icon: HandshakeIcon,
    number: "04",
    title: "Pick Up & Enjoy",
    description: "Complete the background check at your FFL and take home your purchase"
  }
]

export default function HowItWorks() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            A simple, secure, and compliant process from selection to delivery
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative">
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/50 to-primary/20" />
                  )}

                  <div className="relative">
                    <div className="mb-4 flex items-center gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                        <Icon className="h-8 w-8" />
                      </div>
                      <span className="text-5xl font-bold text-primary/10">{step.number}</span>
                    </div>
                    
                    <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

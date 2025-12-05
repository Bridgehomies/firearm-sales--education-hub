import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { AlertCircle, Shield, BookOpen, Users, Download, ExternalLink } from "lucide-react"

const safetyRules = [
  {
    number: 1,
    title: "Treat Every Firearm as if it's Loaded",
    description: "Never assume a firearm is unloaded. Always check the chamber and magazine yourself, even if someone tells you it's unloaded."
  },
  {
    number: 2,
    title: "Never Point at Anything You Don't Intend to Shoot",
    description: "Always keep the muzzle pointed in a safe direction - where an accidental discharge would not cause injury or damage."
  },
  {
    number: 3,
    title: "Keep Your Finger Off the Trigger",
    description: "Keep your finger off the trigger and outside the trigger guard until you are ready to fire. This is the single most important rule."
  },
  {
    number: 4,
    title: "Be Certain of Your Target and What's Beyond It",
    description: "Know what you're shooting at and what's behind it. Bullets can travel through and beyond targets."
  }
]

const trainingResources = [
  {
    icon: BookOpen,
    title: "Basic Firearm Safety Course",
    description: "Comprehensive introduction to safe firearm handling, storage, and operation.",
    link: "#"
  },
  {
    icon: Users,
    title: "Live Training Sessions",
    description: "In-person training with certified instructors at local ranges.",
    link: "#"
  },
  {
    icon: Shield,
    title: "Concealed Carry Certification",
    description: "State-approved courses for concealed carry permits.",
    link: "#"
  },
  {
    icon: Download,
    title: "Safety Guide Downloads",
    description: "Free downloadable safety guides and checklists.",
    link: "#"
  }
]

const storageGuidelines = [
  "Store firearms unloaded in a locked safe or cabinet",
  "Store ammunition separately from firearms",
  "Use gun locks, cable locks, or trigger locks",
  "Keep keys and combinations secure and away from children",
  "Consider biometric safes for quick access while maintaining security",
  "Never store loaded firearms in vehicles",
  "Regularly inspect storage equipment for proper function"
]

export default function SafetyResources() {
  return (
    <div className="container py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="mb-4 flex justify-center">
          <div className="rounded-full bg-amber-100 p-4 dark:bg-amber-950">
            <Shield className="h-12 w-12 text-amber-600 dark:text-amber-500" />
          </div>
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Firearm Safety Resources</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Safety is our top priority. These resources will help you handle, store, and operate firearms responsibly.
        </p>
      </div>

      {/* Critical Alert */}
      <Alert className="mb-12 border-amber-500/50 bg-amber-50 dark:bg-amber-950/20">
        <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-500" />
        <AlertDescription className="text-base">
          <strong>Important:</strong> All firearm owners must familiarize themselves with safe handling practices. 
          If you're new to firearms, we strongly recommend taking a certified safety course before purchasing.
        </AlertDescription>
      </Alert>

      {/* Four Rules */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">The Four Fundamental Rules</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {safetyRules.map((rule) => (
            <Card key={rule.number} className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    {rule.number}
                  </div>
                  <CardTitle className="text-xl">{rule.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{rule.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Training Resources */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">Training & Education</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainingResources.map((resource) => (
            <Card key={resource.title} className="text-center transition-shadow hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-primary/10 p-4">
                    <resource.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="mb-2 font-semibold">{resource.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{resource.description}</p>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                  <ExternalLink className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Safe Storage */}
      <section className="mb-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">Safe Storage Guidelines</h2>
            <p className="mb-6 text-muted-foreground">
              Proper storage is critical to prevent accidents and unauthorized access. Follow these guidelines 
              to ensure your firearms are stored safely and securely.
            </p>
            <ul className="space-y-3">
              {storageGuidelines.map((guideline, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 text-primary">✓</span>
                  <span>{guideline}</span>
                </li>
              ))}
            </ul>
          </div>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-4 text-xl font-semibold">Recommended Storage Solutions</h3>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h4 className="mb-2 font-semibold">Gun Safes</h4>
                  <p className="text-sm text-muted-foreground">
                    Fire-resistant safes with electronic or biometric locks provide the highest level of security.
                  </p>
                  <Button variant="link" className="mt-2 px-0">
                    Shop Gun Safes →
                  </Button>
                </div>
                <div className="rounded-lg border p-4">
                  <h4 className="mb-2 font-semibold">Cable & Trigger Locks</h4>
                  <p className="text-sm text-muted-foreground">
                    Affordable options that prevent the firearm from being fired or loaded.
                  </p>
                  <Button variant="link" className="mt-2 px-0">
                    Shop Locks →
                  </Button>
                </div>
                <div className="rounded-lg border p-4">
                  <h4 className="mb-2 font-semibold">Portable Lock Boxes</h4>
                  <p className="text-sm text-muted-foreground">
                    Secure storage for vehicles or travel while maintaining quick access.
                  </p>
                  <Button variant="link" className="mt-2 px-0">
                    Shop Lock Boxes →
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Resources */}
      <section>
        <Card className="bg-muted/50">
          <CardContent className="p-8">
            <h2 className="mb-4 text-2xl font-bold">Additional Resources</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <h4 className="mb-2 font-semibold">National Organizations</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-primary hover:underline">
                      National Shooting Sports Foundation (NSSF)
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary hover:underline">
                      National Rifle Association (NRA)
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary hover:underline">
                      Project ChildSafe
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-2 font-semibold">Emergency Contacts</h4>
                <ul className="space-y-2 text-sm">
                  <li>Emergency: 911</li>
                  <li>ATF Hotline: 1-800-ATF-GUNS</li>
                  <li>Suicide Prevention: 988</li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <Button size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download Complete Safety Guide (PDF)
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

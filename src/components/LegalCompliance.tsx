import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Shield, FileText, AlertTriangle, CheckCircle } from "lucide-react"

const fflProcess = [
  {
    step: 1,
    title: "Place Your Order",
    description: "Complete your purchase on our website and provide payment information."
  },
  {
    step: 2,
    title: "Submit FFL Information",
    description: "Provide your local FFL dealer's license information. We can help you find one nearby."
  },
  {
    step: 3,
    title: "FFL Verification",
    description: "We verify your FFL dealer's license with the ATF database."
  },
  {
    step: 4,
    title: "Shipment",
    description: "We securely ship the firearm to your chosen FFL dealer (typically 3-7 business days)."
  },
  {
    step: 5,
    title: "Background Check",
    description: "Visit your FFL dealer to complete ATF Form 4473 and undergo NICS background check."
  },
  {
    step: 6,
    title: "Take Possession",
    description: "Once approved, take possession of your firearm. The FFL dealer may charge a transfer fee."
  }
]

const federalRequirements = [
  "Must be at least 18 years old to purchase long guns (rifles/shotguns)",
  "Must be at least 21 years old to purchase handguns",
  "Must be a U.S. citizen or legal permanent resident",
  "Must pass NICS (National Instant Criminal Background Check System) check",
  "Cannot be convicted of a felony or domestic violence misdemeanor",
  "Cannot be subject to a restraining order",
  "Cannot be an unlawful user of controlled substances",
  "Cannot have been adjudicated as mentally defective or committed to a mental institution",
  "Cannot have been dishonorably discharged from the military"
]

const stateRestrictions = [
  {
    state: "California",
    restrictions: [
      "10-round magazine capacity limit",
      "Firearms Safety Certificate required",
      "10-day waiting period",
      "Assault weapon restrictions"
    ]
  },
  {
    state: "New York",
    restrictions: [
      "Pistol permit required for handguns",
      "SAFE Act compliance required",
      "Magazine capacity limits",
      "Background check for ammunition purchases"
    ]
  },
  {
    state: "Illinois",
    restrictions: [
      "FOID card required",
      "72-hour waiting period for long guns",
      "24-hour waiting period for handguns",
      "Assault weapon restrictions in some jurisdictions"
    ]
  },
  {
    state: "New Jersey",
    restrictions: [
      "Firearms Purchaser ID card required",
      "Permit required for each handgun purchase",
      "10-round magazine capacity limit",
      "No semi-automatic rifles with certain features"
    ]
  }
]

export default function LegalCompliance() {
  return (
    <div className="container py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="mb-4 flex justify-center">
          <div className="rounded-full bg-primary/10 p-4">
            <Shield className="h-12 w-12 text-primary" />
          </div>
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Legal Compliance Information</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Understanding federal and state firearm laws is crucial for legal and responsible gun ownership.
        </p>
      </div>

      {/* Critical Notice */}
      <Alert className="mb-12 border-destructive/50 bg-destructive/5">
        <AlertTriangle className="h-5 w-5 text-destructive" />
        <AlertDescription className="text-base">
          <strong>Important Legal Notice:</strong> This information is provided as a general guide only. 
          Laws vary by jurisdiction and change frequently. You are responsible for knowing and complying 
          with all federal, state, and local laws. Consult with legal counsel for specific guidance.
        </AlertDescription>
      </Alert>

      {/* FFL Transfer Process */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">FFL Transfer Process</h2>
        <p className="mb-8 text-muted-foreground">
          All firearms purchased online must be shipped to a Federal Firearms License (FFL) dealer. 
          Here's how the process works:
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {fflProcess.map((step) => (
            <Card key={step.step} className="relative overflow-hidden">
              <div className="absolute right-4 top-4 text-6xl font-bold text-primary/5">
                {step.step}
              </div>
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {step.step}
                </div>
                <CardTitle className="text-lg">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Federal Requirements */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">Federal Requirements</h2>
        <Card>
          <CardContent className="p-6">
            <div className="mb-6 flex items-start gap-4 rounded-lg bg-muted p-4">
              <FileText className="h-6 w-6 shrink-0 text-primary" />
              <div>
                <h3 className="mb-2 font-semibold">ATF Form 4473</h3>
                <p className="text-sm text-muted-foreground">
                  All firearm purchasers must complete ATF Form 4473 (Firearms Transaction Record) and 
                  pass a NICS background check before taking possession of a firearm.
                </p>
              </div>
            </div>
            <h4 className="mb-4 font-semibold">To purchase a firearm, you must:</h4>
            <ul className="space-y-3">
              {federalRequirements.map((requirement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                  <span>{requirement}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* State-Specific Restrictions */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">State-Specific Restrictions</h2>
        <p className="mb-6 text-muted-foreground">
          Some states have additional requirements beyond federal law. Below are examples of states 
          with significant restrictions (this is not an exhaustive list):
        </p>
        <Accordion type="single" collapsible className="w-full">
          {stateRestrictions.map((item) => (
            <AccordionItem key={item.state} value={item.state}>
              <AccordionTrigger className="text-lg font-semibold">
                {item.state}
                <Badge variant="secondary" className="ml-2">
                  Additional Requirements
                </Badge>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pt-2">
                  {item.restrictions.map((restriction, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1 text-primary">•</span>
                      <span>{restriction}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-muted-foreground">
                  Check with your local authorities for the most current requirements.
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Alert className="mt-6">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            <strong>Note:</strong> This list is not comprehensive. Many other states have specific 
            regulations. Always verify current laws in your jurisdiction before purchasing.
          </AlertDescription>
        </Alert>
      </section>

      {/* Prohibited Persons */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">Prohibited Persons</h2>
        <Card className="border-destructive/50">
          <CardContent className="p-6">
            <p className="mb-4">
              Federal law (18 U.S.C. § 922(g)) prohibits certain persons from possessing firearms or ammunition. 
              It is a federal crime for prohibited persons to attempt to purchase or possess firearms.
            </p>
            <div className="rounded-lg bg-destructive/5 p-4">
              <p className="mb-2 font-semibold">You cannot purchase or possess firearms if you:</p>
              <ul className="space-y-2 text-sm">
                <li>• Have been convicted of a crime punishable by more than one year in prison</li>
                <li>• Are a fugitive from justice</li>
                <li>• Are an unlawful user of or addicted to controlled substances</li>
                <li>• Have been adjudicated as mentally defective or committed to a mental institution</li>
                <li>• Are illegally in the United States or were admitted under a nonimmigrant visa</li>
                <li>• Have been dishonorably discharged from the Armed Forces</li>
                <li>• Have renounced your U.S. citizenship</li>
                <li>• Are subject to a restraining order</li>
                <li>• Have been convicted of domestic violence</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Resources */}
      <section>
        <Card className="bg-muted/50">
          <CardContent className="p-8">
            <h2 className="mb-6 text-2xl font-bold">Legal Resources</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h4 className="mb-3 font-semibold">Government Resources</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="https://www.atf.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Bureau of Alcohol, Tobacco, Firearms and Explosives (ATF)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fbi.gov/services/cjis/nics" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      FBI NICS Background Check Information
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary hover:underline">
                      State Firearms Laws Database
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 font-semibold">Need Help?</h4>
                <p className="mb-3 text-sm text-muted-foreground">
                  Have questions about the legal requirements or transfer process?
                </p>
                <ul className="space-y-2 text-sm">
                  <li>📞 Phone: 1-800-FIREARMS</li>
                  <li>📧 Email: legal@apexarms.com</li>
                  <li>💬 Live Chat: Available Mon-Fri 9AM-6PM EST</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

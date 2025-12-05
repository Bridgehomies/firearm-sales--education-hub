import { Shield } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"

export default function SafetyBanner() {
  return (
    <section className="py-8 bg-background">
      <div className="container max-w-4xl">
        <Alert className="border-amber-200 bg-amber-50 dark:border-amber-900/50 dark:bg-amber-950/20">
          <Shield className="h-4 w-4 text-amber-600 dark:text-amber-500" />
          <AlertDescription className="text-sm text-amber-900 dark:text-amber-100">
            <strong>Safety Reminder:</strong> Always follow the four fundamental rules of firearm safety.{" "}
            <Link href="/safety" className="underline font-medium hover:text-amber-700 dark:hover:text-amber-300">
              Learn More
            </Link>
          </AlertDescription>
        </Alert>
      </div>
    </section>
  )
}
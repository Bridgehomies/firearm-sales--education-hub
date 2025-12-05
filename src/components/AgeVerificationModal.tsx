"use client"

import { useState, useEffect } from "react"
import { AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"

export default function AgeVerificationModal() {
  const [open, setOpen] = useState(false)
  const [agreed, setAgreed] = useState(false)

  useEffect(() => {
    const verified = localStorage.getItem("ageVerified")
    if (!verified) {
      setOpen(true)
    }
  }, [])

  const handleVerify = () => {
    if (agreed) {
      localStorage.setItem("ageVerified", "true")
      setOpen(false)
    }
  }

  const handleExit = () => {
    window.location.href = "https://www.google.com"
  }

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-[500px]" hideCloseButton>
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-destructive/10 p-3">
              <AlertTriangle className="h-8 w-8 text-destructive" />
            </div>
          </div>
          <DialogTitle className="text-center text-2xl">Age Verification Required</DialogTitle>
          <DialogDescription className="text-center pt-4">
            This website contains information about firearms, ammunition, and related products. 
            You must be at least 18 years of age to view this content (21+ for handguns in most states).
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="rounded-lg border border-destructive/50 bg-destructive/5 p-4">
            <h4 className="font-semibold mb-2">Legal Requirements:</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• You are of legal age to purchase firearms in your jurisdiction</li>
              <li>• You are not prohibited from owning firearms under federal or state law</li>
              <li>• You understand that all firearms must ship to a licensed FFL dealer</li>
              <li>• You agree to comply with all applicable laws and regulations</li>
            </ul>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="age-verify"
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(checked as boolean)}
            />
            <label
              htmlFor="age-verify"
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I certify that I am at least 18 years of age (21+ for handguns) and legally permitted 
              to view and purchase firearms in my jurisdiction.
            </label>
          </div>
        </div>

        <DialogFooter className="flex gap-2 sm:gap-2">
          <Button
            variant="outline"
            onClick={handleExit}
            className="flex-1"
          >
            Exit Site
          </Button>
          <Button
            onClick={handleVerify}
            disabled={!agreed}
            className="flex-1"
          >
            I Am of Legal Age
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

import { ExternalLink } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Component() {
  const steps = [
    "Open your Webflow project and go to the Project Settings.",
    "Navigate to the 'Custom Code' tab in the settings panel.",
    "Find the 'Head Code' section.",
    "Paste your AppBars code snippet into the Head Code field.",
    "Click 'Save Changes' to update your project settings.",
    "Publish your site to apply the changes."
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header Card */}
      <Card className="mb-12 bg-muted/50">
        <CardContent className="pt-6">
          <h1 className="text-3xl font-bold mb-4">How to Add AppBars to Webflow</h1>
          <p className="text-muted-foreground text-lg">
            Webflow offers powerful design tools for creating responsive websites. Adding AppBars popups to your Webflow site can enhance user experience and drive conversions.
          </p>
        </CardContent>
      </Card>

      {/* Integration Steps */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Integration Steps</h2>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div 
                className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-600 text-white flex items-center justify-center font-semibold"
                aria-hidden="true"
              >
                {index + 1}
              </div>
              <p className="text-muted-foreground pt-1">
                <span className="sr-only">Step {index + 1}:</span>
                {step}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Need Help Card */}
      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle>Need Help?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground flex items-center gap-2">
            If you encounter any issues during the integration process, our support team is here to help.
            <a 
              href="/support" 
              className="inline-flex items-center text-primary hover:underline"
            >
              Contact Support
              <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
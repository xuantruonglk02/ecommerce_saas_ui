import { ExternalLink } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Component() {
  const steps = [
    "Sign in to your Weebly account and select the site you want to edit.",
    "Click on 'Settings' in the main navigation menu.",
    "In the settings panel, select 'SEO' from the left sidebar.",
    "Scroll down to find the 'Header Code' field.",
    "Paste your AppBars code snippet into the Header Code field.",
    "Click 'Save' at the top of the page to apply your changes.",
    "Publish your site to make the changes live."
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header Card */}
      <Card className="mb-12 bg-muted/50">
        <CardContent className="pt-6">
          <h1 className="text-3xl font-bold mb-4">How to Add AppBars to Weebly</h1>
          <p className="text-muted-foreground text-lg">
            Weebly is a user-friendly website builder. Integrating AppBars popups into your Weebly site can help you engage visitors and boost conversions with ease.
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
import { ExternalLink } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Framer() {
  const steps = [
    "Open your Framer project and navigate to the main workspace.",
    "Look for the Settings button in the left toolbar and click it to open the project settings.",
    "In the settings panel, find and select the 'Custom Code' section.",
    "Locate the field labeled 'Start of <head>' and carefully paste your AppBars script code into this area.",
    "Click the 'Save' button to apply your changes and update the project settings.",
    "To ensure the AppBars popup is functioning correctly, publish your project or use the preview mode to test the integration."
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header Card */}
      <Card className="mb-12 bg-muted/50">
        <CardContent className="pt-6">
          <h1 className="text-3xl font-bold mb-4">How to Add AppBars to Framer</h1>
          <p className="text-muted-foreground text-lg">
            Framer is a powerful design and prototyping tool. Integrating AppBars popups into your Framer projects enhances engagement and improves conversion rates.
          </p>
        </CardContent>
      </Card>

      {/* Integration Steps */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Integration Steps</h2>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-600 text-white flex items-center justify-center font-semibold">
                {index + 1}
              </div>
              <p className="text-muted-foreground pt-1">{step}</p>
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
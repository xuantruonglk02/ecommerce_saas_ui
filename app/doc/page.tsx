
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function DocsIndex() {
  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <div className="flex-1 p-6 w-full">
        <div className="mx-auto w-full space-y-8">
          {/* Welcome Section */}
          <div className="rounded-lg bg-muted/50 p-6">
            <h1 className="mb-2 text-3xl font-bold tracking-tight">Welcome to AppBars Documentation</h1>
            <p className="text-lg text-muted-foreground">
              Get started with our easy-to-follow integration guides for your platform.
            </p>
          </div>

          {/* Features Section */}
          <section>
            <h2 className="mb-6 text-2xl font-bold">Why Choose AppBars?</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Easy Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Simple setup process for all major platforms
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Boost Conversions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Increase engagement with targeted popups
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Custom Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Match your brand with customizable templates
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Smart Targeting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Show the right message to the right audience
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
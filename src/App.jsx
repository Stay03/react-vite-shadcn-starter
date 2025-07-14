import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">React + Vite + shadcn/ui</h1>
          <p className="text-muted-foreground">
            Barebones template ready for your next project
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Template Ready</CardTitle>
              <CardDescription>
                All shadcn/ui components are installed and ready to use
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Get Started</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default App
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <div className="relative bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-4">Introducing the new Bing</h1>
          <p className="text-xl mb-8">Your AI-powered copilot for the web. Ask questions. Chat to refine results. Get comprehensive answers and creative inspiration.</p>
          <Button size="lg">Learn more</Button>
        </div>
      </div>
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/placeholder.svg?height=600&width=1200" 
          alt="Bing AI" 
          className="w-full h-full object-cover opacity-50"
        />
      </div>
    </div>
  )
}


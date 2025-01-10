import { ArrowRight } from 'lucide-react'

const products = [
  { name: 'Microsoft 365', description: 'Premium Office apps, extra cloud storage, advanced security, and more—all in one convenient subscription', image: '/placeholder.svg?height=200&width=300' },
  { name: 'Xbox Game Pass Ultimate', description: 'Xbox Live Gold and over 100 high-quality console and PC games. Play together with friends and discover your next favorite game.', image: '/placeholder.svg?height=200&width=300' },
  { name: 'Microsoft Edge', description: 'World-class performance with more privacy, more productivity, and more value while you browse.', image: '/placeholder.svg?height=200&width=300' },
  { name: 'OneDrive', description: 'Save your files and photos to OneDrive and access them from any device, anywhere', image: '/placeholder.svg?height=200&width=300' },
]

export default function ProductGrid() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.name} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 inline-flex items-center">
                Learn more <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


import Header from './components/Header'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Hero />
        <ProductGrid />
      </main>
    </div>
  )
}


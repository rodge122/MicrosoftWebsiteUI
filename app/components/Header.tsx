import Link from 'next/link'
import { Search, ShoppingCart, User } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-2xl font-bold text-blue-600">Microsoft</Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Microsoft 365</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Office</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Windows</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Surface</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Xbox</Link></li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button aria-label="Search" className="text-gray-600 hover:text-gray-900">
            <Search size={20} />
          </button>
          <button aria-label="Cart" className="text-gray-600 hover:text-gray-900">
            <ShoppingCart size={20} />
          </button>
          <button aria-label="Account" className="text-gray-600 hover:text-gray-900">
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}


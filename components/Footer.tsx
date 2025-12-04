import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-emerald-500 w-8 h-8 rounded-lg mr-3"></div>
              <span className="text-xl font-bold">EstateScanner</span>
            </div>
            <p className="text-slate-400 text-sm">
              Auction Intelligence dla nieruchomości w Hiszpanii
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Produkt</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/how-it-works">Jak to działa</Link></li>
              <li><Link href="/pricing">Cennik</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Firma</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/contact">Kontakt</Link></li>
              <li><Link href="/legal/terms">Regulamin</Link></li>
              <li><Link href="/legal/privacy">Polityka prywatności</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Social</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">X (Twitter)</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>&copy; 2024 EstateScanner. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  )
}
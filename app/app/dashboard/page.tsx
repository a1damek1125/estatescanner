import Link from 'next/link'
import { 
  BellIcon, 
  BuildingOfficeIcon, 
  StarIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline'

export default function Dashboard() {
  const stats = [
    {
      name: 'Aktywne alerty',
      value: '12',
      icon: BellIcon,
      color: 'emerald',
      href: '/app/alerts'
    },
    {
      name: 'Nowe aukcje (24h)',
      value: '247',
      icon: BuildingOfficeIcon,
      color: 'blue',
      href: '/app/auctions'
    },
    {
      name: 'Ulubione oferty',
      value: '8',
      icon: StarIcon,
      color: 'yellow',
      href: '/app/favorites'
    },
    {
      name: 'A+ oferty',
      value: '3',
      icon: ArrowTrendingUpIcon,
      color: 'emerald',
      href: '/app/auctions?score=A'
    }
  ]

  const recentAuctions = [
    {
      id: '1',
      title: 'Mieszkanie 3-pokojowe, Barcelona',
      source: 'Sareb',
      price: '€145,000',
      score: 'A+',
      date: '15.12.2024'
    },
    {
      id: '2',
      title: 'Dom jednorodzinny, Valencia',
      source: 'Haya',
      price: '€89,000',
      score: 'B',
      date: '18.12.2024'
    },
    {
      id: '3',
      title: 'Finca rústica, Alicante',
      source: 'BOE',
      price: '€245,000',
      score: 'A',
      date: '20.12.2024'
    }
  ]

  return (
    <div>
      {/* Welcome header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Dzień dobry, Adam!</h1>
        <p className="text-slate-400">Plan Pro • Wygasa: 15.01.2025</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Link
              key={stat.name}
              href={stat.href}
              className="card p-6 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">{stat.name}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
                <div className={`bg-${stat.color}-500/10 p-3 rounded-lg`}>
                  <Icon className={`w-6 h-6 text-${stat.color}-400`} />
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Live radar */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-4">🔴 Live radar</h2>
          <p className="text-slate-400 text-sm mb-6">3 ostatnie aukcje z wysokim scoringiem</p>
          
          <div className="space-y-4">
            {recentAuctions.map((auction) => (
              <div key={auction.id} className="bg-slate-800 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{auction.title}</h3>
                    <p className="text-sm text-slate-400">
                      {auction.source} • {auction.date}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-emerald-400">{auction.price}</p>
                    <span className={`inline-block px-2 py-1 rounded text-xs ${
                      auction.score === 'A+' 
                        ? 'bg-emerald-500/20 text-emerald-400' 
                        : auction.score === 'A'
                        ? 'bg-emerald-500/20 text-emerald-400'
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {auction.score}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <Link href="/app/auctions" className="btn-primary w-full mt-6 block text-center">
            Zobacz wszystkie aukcje
          </Link>
        </div>

        {/* Quick actions */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-4">Szybkie akcje</h2>
          
          <div className="space-y-4">
            <Link href="/app/auctions" className="block">
              <div className="bg-slate-800 rounded-lg p-4 hover:bg-slate-700 transition-colors">
                <div className="flex items-center">
                  <BuildingOfficeIcon className="w-6 h-6 text-emerald-400 mr-3" />
                  <div>
                    <h3 className="font-medium">Przeglądaj aukcje</h3>
                    <p className="text-sm text-slate-400">247 nowych ofert</p>
                  </div>
                </div>
              </div>
            </Link>
            
            <Link href="/app/alerts" className="block">
              <div className="bg-slate-800 rounded-lg p-4 hover:bg-slate-700 transition-colors">
                <div className="flex items-center">
                  <BellIcon className="w-6 h-6 text-blue-400 mr-3" />
                  <div>
                    <h3 className="font-medium">Zarządzaj alertami</h3>
                    <p className="text-sm text-slate-400">12 aktywnych alertów</p>
                  </div>
                </div>
              </div>
            </Link>
            
            <Link href="/app/favorites" className="block">
              <div className="bg-slate-800 rounded-lg p-4 hover:bg-slate-700 transition-colors">
                <div className="flex items-center">
                  <StarIcon className="w-6 h-6 text-yellow-400 mr-3" />
                  <div>
                    <h3 className="font-medium">Ulubione oferty</h3>
                    <p className="text-sm text-slate-400">8 zapisanych nieruchomości</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
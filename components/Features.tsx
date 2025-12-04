import { 
  CircleStackIcon, 
  CpuChipIcon, 
  FunnelIcon, 
  BellAlertIcon, 
  ArrowDownTrayIcon 
} from '@heroicons/react/24/outline'

export function Features() {
  const features = [
    {
      icon: CircleStackIcon,
      title: "Agregacja aukcji",
      description: "Wszystkie źródła w jednym miejscu - banki, BOE, komornicy"
    },
    {
      icon: CpuChipIcon,
      title: "AI scoring (A-D)",
      description: "Inteligentna ocena okazji i wykrywanie ryzyk prawnych"
    },
    {
      icon: FunnelIcon,
      title: "Zaawansowane filtry",
      description: "Lokalizacja, typ, cena, metraż, scoring - dokładnie tak jak potrzebujesz"
    },
    {
      icon: BellAlertIcon,
      title: "Alerty mail/SMS",
      description: "Natychmiastowe powiadomienia o nowych okazjach spełniających Twoje kryteria"
    },
    {
      icon: ArrowDownTrayIcon,
      title: "Eksport CSV/Excel",
      description: "Wyeksportuj dane do dalszej analizy (tylko Pro)"
    }
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Funkcje EstateScanner</h2>
          <p className="text-xl text-slate-400">Wszystko czego potrzebujesz do skutecznego inwestowania</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="card p-6">
                <div className="flex items-center mb-4">
                  <Icon className="w-8 h-8 text-emerald-400 mr-3" />
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                </div>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
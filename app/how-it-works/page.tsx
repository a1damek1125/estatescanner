import { 
  BanknotesIcon, 
  CpuChipIcon, 
  BellAlertIcon,
  MagnifyingGlassIcon,
  ChartBarIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

export default function HowItWorksPage() {
  const steps = [
    {
      icon: MagnifyingGlassIcon,
      title: "Agregujemy dane",
      description: "Monitorujemy w czasie rzeczywistym ponad 10 źródeł licytacji: Sareb, Haya, Solvia, Servihabitat, BOE i wiele innych.",
      details: [
        "Aktualizacje co 15 minut",
        "Pełne pokrycie rynku hiszpańskiego",
        "Automatyczne wykrywanie nowych ofert",
        "Integracja z systemami bankowymi"
      ]
    },
    {
      icon: CpuChipIcon,
      title: "AI analizuje okazje",
      description: "Nasz algorytm sztucznej inteligencji ocenia każdą nieruchomość, sprawdza ryzyka i nadaje scoring A-D.",
      details: [
        "Porównanie z wartością rynkową",
        "Analiza lokalizacji i otoczenia",
        "Wykrywanie problemów prawnych",
        "Ocena potencjału inwestycyjnego"
      ]
    },
    {
      icon: BellAlertIcon,
      title: "Dostajesz alerty",
      description: "Ustawiasz własne kryteria i otrzymujesz powiadomienia tylko o naprawdę wartościowych ofertach.",
      details: [
        "Personalizowane filtry",
        "Powiadomienia email i SMS",
        "Alerty real-time",
        "Podsumowania tygodniowe"
      ]
    }
  ]

  const features = [
    {
      icon: ChartBarIcon,
      title: "Analiza rynku",
      description: "Zobacz trendy cenowe i statystyki dla wybranych lokalizacji"
    },
    {
      icon: ShieldCheckIcon,
      title: "Bezpieczeństwo",
      description: "Wykrywamy potencjalne problemy prawne i ryzyka transakcyjne"
    },
    {
      icon: BanknotesIcon,
      title: "Oszczędność czasu",
      description: "Nie przeglądaj setek stron - mamy wszystko w jednym miejscu"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Jak to działa?
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Trzy proste kroki, które zamienią chaos informacyjny w uporządkowane, 
            wartościowe okazje inwestycyjne.
          </p>
        </div>
      </section>

      {/* How It Works Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div className="bg-emerald-500/20 p-4 rounded-full mr-4">
                        <Icon className="w-8 h-8 text-emerald-400" />
                      </div>
                      <span className="text-2xl font-bold text-slate-600">{index + 1}</span>
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{step.title}</h2>
                    <p className="text-lg text-slate-400 mb-6">{step.description}</p>
                    
                    <div className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                          <span className="text-slate-300">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className={`bg-slate-800 rounded-lg p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="text-center py-12">
                      <Icon className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                      <p className="text-slate-400">Wizualizacja kroku {index + 1}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Dlaczego EstateScanner?</h2>
            <p className="text-xl text-slate-400">Korzyści, które otrzymujesz od pierwszego dnia</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="card p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="bg-emerald-500/20 p-4 rounded-full">
                      <Icon className="w-8 h-8 text-emerald-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-slate-400">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Gotowy do działania?</h2>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Dołącz do EstateScanner i zacznij odkrywać najlepsze okazje 
            na rynku nieruchomości w Hiszpanii już dziś.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/auth/register" className="btn-primary text-lg px-8 py-4">
              Zacznij za darmo
            </a>
            <a href="/pricing" className="btn-secondary text-lg px-8 py-4">
              Zobacz cennik
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
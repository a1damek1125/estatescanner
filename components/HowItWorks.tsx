import { BanknotesIcon, CpuChipIcon, BellAlertIcon } from '@heroicons/react/24/outline'

export function HowItWorks() {
  const steps = [
    {
      icon: BanknotesIcon,
      title: "Podłączamy banki i BOE",
      description: "Agregujemy dane z Sareb, Haya, Solvia, Servihabitat, BOE i innych źródeł w czasie rzeczywistym."
    },
    {
      icon: CpuChipIcon,
      title: "AI czyści i ocenia okazje",
      description: "Nasz algorytm filtruje śmieci, nadaje scoring A-D i wyłapuje ryzyka prawne."
    },
    {
      icon: BellAlertIcon,
      title: "Ty dostajesz gotowe alerty",
      description: "Ustawiasz kryteria, system wysyła powiadomienia mail/SMS o nowych okazjach."
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Jak to działa?</h2>
          <p className="text-xl text-slate-400">Prosty proces w 3 krokach</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="card p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="bg-emerald-500/10 p-4 rounded-full">
                    <Icon className="w-12 h-12 text-emerald-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-slate-400">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
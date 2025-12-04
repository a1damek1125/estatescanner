import Link from 'next/link'

export function PricingTeaser() {
  const plans = [
    {
      name: "Free",
      price: "0€",
      description: "Dla początkujących",
      features: [
        "1 alert",
        "5 ulubionych",
        "Podstawowe filtry",
        "Support e-mail"
      ],
      cta: "Zacznij za darmo"
    },
    {
      name: "Pro",
      price: "29€",
      description: "Dla profesjonalistów",
      features: [
        "Nielimitowane alerty",
        "Nielimitowane ulubione",
        "Zaawansowane filtry",
        "Eksport CSV/Excel",
        "SMS alerts",
        "Priorytetowy support"
      ],
      cta: "Wybierz Pro",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Dla firm",
      features: [
        "Wszystko z Pro",
        "API access",
        "Dedykowany manager",
        "Raporty custom",
        "SLA guarantee"
      ],
      cta: "Kontakt"
    }
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Proste ceny, jasne zasady</h2>
          <p className="text-xl text-slate-400">Wybierz plan dostosowany do Twoich potrzeb</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`card p-8 text-center ${plan.popular ? 'border-emerald-500 relative' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Najpopularniejszy
                  </span>
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold mb-2 gradient-text">{plan.price}</div>
              <p className="text-slate-400 mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-8 text-left">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="text-emerald-400 mr-2">✓</span>
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                href="/pricing" 
                className={`block w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.popular 
                    ? 'btn-primary' 
                    : 'btn-secondary'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
import Link from 'next/link'
import { CheckIcon } from '@heroicons/react/24/outline'

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "0€",
      description: "Dla początkujących",
      features: [
        "1 alert",
        "5 ulubionych",
        "Podstawowe filtry",
        "Support e-mail",
        "Dostęp do podstawowych aukcji"
      ],
      cta: "Zacznij za darmo",
      popular: false
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
        "Priorytetowy support",
        "Analiza AI (scoring A-D)",
        "Brak limitów przeglądania",
        "Dostęp do wszystkich źródeł"
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
        "SLA guarantee",
        "Integracje na zamówienie",
        "Szkolenia i wsparcie"
      ],
      cta: "Skontaktuj się",
      popular: false
    }
  ]

  const faq = [
    {
      question: "Czy mogę zmienić plan w dowolnym momencie?",
      answer: "Tak, możesz zawsze zaktualizować swój plan. Zmiana na wyższy plan jest natychmiastowa, a na niższy - od następnego okresu rozliczeniowego."
    },
    {
      question: "Czy oferujecie darmowy okres próbny?",
      answer: "Tak, nowi użytkownicy mogą przetestować plan Pro przez 30 dni zupełnie za darmo, bez żadnych zobowiązań."
    },
    {
      question: "Jakie są koszty SMS-ów?",
      answer: "Każdy SMS kosztuje €0.15. Koszt jest doliczany do Twojego miesięcznego rachunku. W planie Free SMS-y są niedostępne."
    },
    {
      question: "Czy mogę anulować subskrypcję?",
      answer: "Tak, możesz anulować subskrypcję w dowolnym momencie. Dostęp do funkcji Pro zachowasz do końca aktualnego okresu rozliczeniowego."
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Proste i przejrzyste ceny
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Wybierz plan dostosowany do Twoich potrzeb. Zacznij za darmo i przesiądź się na Pro, 
            gdy będziesz gotowy na pełnię możliwości.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
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
              <p className="text-slate-400 mb-8">{plan.description}</p>
              
              <ul className="space-y-3 mb-8 text-left">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                href={plan.name === 'Enterprise' ? '/contact' : '/auth/register'} 
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

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Często zadawane pytania</h2>
          
          <div className="space-y-6">
            {faq.map((item, index) => (
              <div key={index} className="card p-6">
                <h3 className="text-lg font-semibold mb-3">{item.question}</h3>
                <p className="text-slate-400">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold mb-4">Gotowy do rozpoczęcia?</h2>
          <p className="text-xl text-slate-400 mb-8">
            Dołącz do tysięcy inwestorów, którzy już korzystają z EstateScanner
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/register" className="btn-primary text-lg px-8 py-4">
              Zacznij za darmo
            </Link>
            <Link href="/how-it-works" className="btn-secondary text-lg px-8 py-4">
              Dowiedz się więcej
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export function ForWhom() {
  const userTypes = [
    {
      title: "Inwestor-flipper",
      description: "Kupujesz, remontujesz, sprzedajesz z zyskiem",
      benefits: [
        "Szybki dostęp do okazji z potencjałem",
        "AI wskazuje nieruchomości z najwyższym ROI",
        "Eksport do Excel dla analizy kosztów"
      ]
    },
    {
      title: "Kupuję dla siebie",
      description: "Szukasz domu lub mieszkania dla siebie",
      benefits: [
        "Znajdź nieruchomość poniżej wartości rynkowej",
        "Bezpieczne transakcje dzięki analizie ryzyk",
        "Alerty o nowych ofertach w ulubionej lokalizacji"
      ]
    },
    {
      title: "Doradca / pośrednik",
      description: "Profesjonalista na rynku nieruchomości",
      benefits: [
        "Kompletne dane dla klientów w jednym miejscu",
        "Narzędzia do analizy rynku lokalnego",
        "Eksport raportów dla klientów (tylko Pro)"
      ]
    }
  ]

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Dla kogo jest EstateScanner?</h2>
          <p className="text-xl text-slate-400">Narzędzie dostosowane do Twoich potrzeb</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {userTypes.map((type, index) => (
            <div key={index} className="card p-8">
              <h3 className="text-xl font-semibold mb-3 text-emerald-400">{type.title}</h3>
              <p className="text-slate-400 mb-6">{type.description}</p>
              <ul className="space-y-2">
                {type.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start">
                    <span className="text-emerald-400 mr-2">•</span>
                    <span className="text-slate-300 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
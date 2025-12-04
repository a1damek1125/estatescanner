export function DataSources() {
  const sources = [
    'Sareb', 'Haya', 'Solvia', 'Servihabitat', 'BOE', 
    'Altamira', 'Aliseda', 'Portal del Subastador'
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Źródła danych</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {sources.map((source) => (
              <div key={source} className="card px-6 py-3">
                <span className="font-medium text-emerald-400">{source}</span>
              </div>
            ))}
          </div>
          
          <p className="text-slate-400 max-w-2xl mx-auto">
            Nie jesteśmy związani z żadnym bankiem. Agregujemy dane z publicznie dostępnych źródeł, 
            zapewniając pełną transparentność i niezależność.
          </p>
        </div>
      </div>
    </section>
  )
}
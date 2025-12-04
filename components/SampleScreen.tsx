export function SampleScreen() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Przykładowy ekran</h2>
          <p className="text-xl text-slate-400">Zobacz jak wygląda praca z EstateScanner</p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="card p-8">
            {/* Mock Dashboard */}
            <div className="bg-slate-800 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Aukcje live</h3>
                <div className="flex items-center space-x-4">
                  <div className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm">
                    247 nowych
                  </div>
                  <button className="btn-secondary text-sm">Filtruj</button>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-slate-700 rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <div className="font-medium">Mieszkanie 3-pokojowe, Barcelona</div>
                    <div className="text-sm text-slate-400">Sareb • 15.12.2024</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-emerald-400">€145,000</div>
                    <div className="text-sm bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded">A+</div>
                  </div>
                </div>
                
                <div className="bg-slate-700 rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <div className="font-medium">Dom jednorodzinny, Valencia</div>
                    <div className="text-sm text-slate-400">Haya • 18.12.2024</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-emerald-400">€89,000</div>
                    <div className="text-sm bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">B</div>
                  </div>
                </div>
                
                <div className="bg-slate-700 rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <div className="font-medium">Finca rústica, Alicante</div>
                    <div className="text-sm text-slate-400">BOE • 20.12.2024</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-emerald-400">€245,000</div>
                    <div className="text-sm bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded">A</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400 mb-2">247</div>
                <div className="text-slate-400">Widok live</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400 mb-2">12</div>
                <div className="text-slate-400">Aktywne alerty</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400 mb-2">8</div>
                <div className="text-slate-400">Ulubione oferty</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
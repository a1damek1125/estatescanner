import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="gradient-text">Jedno miejsce</span>
          <br />
          dla wszystkich licytacji
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto">
          Bankowych, komorniczych, sądowych. AI czyści i ocenia okazje, 
          Ty dostajesz gotowe alerty na maila i SMS.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/auth/register" className="btn-primary text-lg px-8 py-4">
            Dołącz do listy beta
          </Link>
          <Link href="#how-it-works" className="btn-secondary text-lg px-8 py-4">
            Zobacz, jak to działa
          </Link>
        </div>
        
        {/* Live auctions preview */}
        <div className="max-w-4xl mx-auto">
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">🔴 Live aukcje</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-800 p-4 rounded-lg">
                <div className="text-sm text-slate-400">Mieszkanie, Barcelona</div>
                <div className="text-lg font-semibold">€145,000</div>
                <div className="text-sm text-emerald-400">Score: A+</div>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg">
                <div className="text-sm text-slate-400">Dom, Valencia</div>
                <div className="text-lg font-semibold">€89,000</div>
                <div className="text-sm text-yellow-400">Score: B</div>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg">
                <div className="text-sm text-slate-400">Finca, Alicante</div>
                <div className="text-lg font-semibold">€245,000</div>
                <div className="text-sm text-emerald-400">Score: A</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
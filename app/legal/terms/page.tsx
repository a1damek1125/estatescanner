export default function TermsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card p-8">
          <h1 className="text-3xl font-bold mb-8">Regulamin świadczenia usług</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-400 mb-6">
              Niniejszy regulamin określa zasady korzystania z serwisu EstateScanner. 
              Korzystanie z serwisu oznacza akceptację poniższych warunków.
            </p>

            <h2 className="text-xl font-semibold mb-4 mt-8">1. Postanowienia ogólne</h2>
            <ol className="list-decimal list-inside space-y-2 text-slate-300 mb-6">
              <li>Serwis EstateScanner świadczy usługi polegające na agregacji informacji o licytacjach nieruchomości w Hiszpanii.</li>
              <li>Właścicielem serwisu jest EstateScanner S.L. z siedzibą w Madrycie.</li>
              <li>Korzystanie z serwisu jest możliwe wyłącznie przez osoby pełnoletnie.</li>
              <li>Usługa dostępna jest w językach: polskim, angielskim i hiszpańskim.</li>
            </ol>

            <h2 className="text-xl font-semibold mb-4 mt-8">2. Opis usług</h2>
            <ol className="list-decimal list-inside space-y-2 text-slate-300 mb-6">
              <li>Serwis agreguje dane z publicznie dostępnych źródeł informacji o licytacjach.</li>
              <li>System AI analizuje nieruchomości i nadaje im scoring od A+ do D.</li>
              <li>Użytkownicy mogą tworzyć alerty i otrzymywać powiadomienia o nowych ofertach.</li>
              <li>Plan Pro umożliwia dostęp do zaawansowanych funkcji i nielimitowanych alertów.</li>
            </ol>

            <h2 className="text-xl font-semibold mb-4 mt-8">3. Rejestracja i konta użytkowników</h2>
            <ol className="list-decimal list-inside space-y-2 text-slate-300 mb-6">
              <li>Rejestracja wymaga podania prawdziwych danych osobowych.</li>
              <li>Każdy użytkownik może posiadać tylko jedno konto.</li>
              <li>Zabronione jest udostępnianie konta osobom trzecim.</li>
              <li>Hasło powinno być bezpieczne i nie powinno być udostępniane.</li>
            </ol>

            <h2 className="text-xl font-semibold mb-4 mt-8">4. Opłaty i płatności</h2>
            <ol className="list-decimal list-inside space-y-2 text-slate-300 mb-6">
              <li>Plan Free jest bezpłatny z pewnymi ograniczeniami.</li>
              <li>Plan Pro wymaga miesięcznej opłaty w wysokości 29 EUR.</li>
              <li>Płatności realizowane są przez bezpieczne systemy płatności online.</li>
              <li>Faktury VAT wystawiane są na żądanie użytkownika.</li>
            </ol>

            <h2 className="text-xl font-semibold mb-4 mt-8">5. Odpowiedzialność</h2>
            <ol className="list-decimal list-inside space-y-2 text-slate-300 mb-6">
              <li>Serwis dostarcza informacje jedynie w celach informacyjnych.</li>
              <li>Nie ponosimy odpowiedzialności za decyzje inwestycyjne użytkowników.</li>
              <li>Informacje o licytacjach mogą zawierać błędy lub być nieaktualne.</li>
              <li>Zalecamy niezależną weryfikację wszystkich informacji przed podjęciem decyzji.</li>
            </ol>

            <h2 className="text-xl font-semibold mb-4 mt-8">6. Ochrona danych osobowych</h2>
            <ol className="list-decimal list-inside space-y-2 text-slate-300 mb-6">
              <li>Dane osobowe przetwarzane zgodnie z RODO i polityką prywatności.</li>
              <li>Użytkownik ma prawo do wglądu, modyfikacji i usunięcia swoich danych.</li>
              <li>Dane nie są udostępniane osobom trzecim bez zgody użytkownika.</li>
            </ol>

            <h2 className="text-xl font-semibold mb-4 mt-8">7. Postanowienia końcowe</h2>
            <ol className="list-decimal list-inside space-y-2 text-slate-300 mb-6">
              <li>Regulamin może być zmieniany z 30-dniowym wyprzedzeniem.</li>
              <li>W sprawach nieuregulowanych zastosowanie ma prawo hiszpańskie.</li>
              <li>Kontakt: contact@estatescanner.com</li>
            </ol>

            <p className="text-sm text-slate-500 mt-8">
              Ostatnia aktualizacja: 01.12.2024
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
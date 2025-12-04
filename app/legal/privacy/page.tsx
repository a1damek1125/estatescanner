export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card p-8">
          <h1 className="text-3xl font-bold mb-8">Polityka prywatności</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-400 mb-6">
              Niniejsza polityka prywatności określa zasady przetwarzania i ochrony danych osobowych 
              użytkowników serwisu EstateScanner zgodnie z RODO.
            </p>

            <h2 className="text-xl font-semibold mb-4 mt-8">1. Administrator danych</h2>
            <p className="text-slate-300 mb-6">
              Administratorem danych osobowych jest EstateScanner S.L. z siedzibą w Madrycie, 
              Calle Mayor 123, 28013 Madrid, Spain, NIF: B12345678.
            </p>

            <h2 className="text-xl font-semibold mb-4 mt-8">2. Zakres zbieranych danych</h2>
            <ol className="list-decimal list-inside space-y-2 text-slate-300 mb-6">
              <li>Dane podstawowe: imię, nazwisko, adres email, numer telefonu.</li>
              <li>Dane konta: login, hasło zaszyfrowane jednokierunkowo.</li>
              <li>Dane użytkowania: historia logowań, IP, preferencje użytkownika.</li>
              <li>Dane płatności: informacje niezbędne do realizacji płatności (przetwarzane przez zewnętrznych dostawców).</li>
            </ol>

            <h2 className="text-xl font-semibold mb-4 mt-8">3. Cele przetwarzania danych</h2>
            <ol className="list-decimal list-inside space-y-2 text-slate-300 mb-6">
              <li>Świadczenie usług zgodnie z regulaminem.</li>
              <li>Realizacja płatności i wystawianie faktur.</li>
              <li>Wysyłanie powiadomień i alertów.</li>
              <li>Udzielanie wsparcia technicznego.</li>
              <li>Poprawa jakości usług i rozwój serwisu.</li>
              <li>Realizacja obowiązków prawnych.</li>
            </ol>

            <h2 className="text-xl font-semibold mb-4 mt-8">4. Podstawa prawna przetwarzania</h2>
            <ol className="list-decimal list-inside space-y-2 text-slate-300 mb-6">
              <li>Zgoda użytkownika (art. 6 ust. 1 lit. a RODO).</li>
              <li>Wykonanie umowy (art. 6 ust. 1 lit. b RODO).</li>
              <li>Obowiązek prawny (art. 6 ust. 1 lit. c RODO).</li>
              <li>Uprawniony interes administratora (art. 6 ust. 1 lit. f RODO).</li>
            </ol>

            <h2 className="text-xl font-semibold mb-4 mt-8">5. Okres przechowywania danych</h2>
            <p className="text-slate-300 mb-6">
              Dane przechowywane są przez okres niezbędny do realizacji celów, dla których zostały zebrane, 
              a następnie usuwane lub anonimizowane. Okres przechowywania może się różnić w zależności od celu przetwarzania.
            </p>

            <h2 className="text-xl font-semibold mb-4 mt-8">6. Prawa użytkownika</h2>
            <ol className="list-decimal list-inside space-y-2 text-slate-300 mb-6">
              <li>Prawo dostępu do swoich danych osobowych.</li>
              <li>Prawo do sprostowania danych.</li>
              <li>Prawo do usunięcia danych ("prawo do bycia zapomnianym").</li>
              <li>Prawo do ograniczenia przetwarzania.</li>
              <li>Prawo do przenoszenia danych.</li>
              <li>Prawo do wniesienia sprzeciwu.</li>
              <li>Prawo do wycofania zgody w dowolnym momencie.</li>
            </ol>

            <h2 className="text-xl font-semibold mb-4 mt-8">7. Udostępnianie danych</h2>
            <p className="text-slate-300 mb-6">
              Dane nie są sprzedawane osobom trzecim. Mogą być udostępniane wyłącznie:
              podmiotom przetwarzającym dane w naszym imieniu (np. dostawcy usług płatniczych), 
              organom uprawnionym z mocy prawa.
            </p>

            <h2 className="text-xl font-semibold mb-4 mt-8">8. Bezpieczeństwo danych</h2>
            <ol className="list-decimal list-inside space-y-2 text-slate-300 mb-6">
              <li>Szyfrowanie połączenia SSL/TLS.</li>
              <li>Hasła przechowywane w formie zaszyfrowanej.</li>
              <li>Regularne kopie zapasowe danych.</li>
              <li>Ograniczony dostęp do danych osobowych.</li>
              <li>Monitorowanie bezpieczeństwa systemu.</li>
            </ol>

            <h2 className="text-xl font-semibold mb-4 mt-8">9. Ciasteczka (cookies)</h2>
            <p className="text-slate-300 mb-6">
              Serwis wykorzystuje ciasteczka do poprawy funkcjonalności, analizy ruchu i personalizacji treści. 
              Użytkownik może kontrolować pliki cookies w ustawieniach przeglądarki.
            </p>

            <h2 className="text-xl font-semibold mb-4 mt-8">10. Kontakt</h2>
            <p className="text-slate-300 mb-6">
              W sprawach związanych z ochroną danych osobowych prosimy o kontakt:
              <br />Email: privacy@estatescanner.com
              <br />Adres: EstateScanner S.L., Calle Mayor 123, 28013 Madrid, Spain
            </p>

            <p className="text-sm text-slate-500 mt-8">
              Ostatnia aktualizacja: 01.12.2024
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
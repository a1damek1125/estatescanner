# EstateScanner - Platforma do analizy aukcji nieruchomości

EstateScanner to nowoczesna platforma internetowa, która agreguje i analizuje aukcje nieruchomości w Hiszpanii przy użyciu zaawansowanej sztucznej inteligencji.

## 🚀 Funkcje

### Dla inwestorów
- **Agregacja aukcji** - kompletny przegląd wszystkich dostępnych aukcji w Hiszpanii
- **Analiza AI** - ocena inwestycyjna nieruchomości (A-D)
- **System alertów** - powiadomienia o nowych ofertach spełniających kryteria
- **Ulubione** - zapisywanie i śledzenie interesujących ofert
- **Raporty rynkowe** - analizy i prognozy cenowe

### Dla profesjonalistów
- **Zaawansowane filtry** - precyzyjne wyszukiwanie ofert
- **Eksport danych** - możliwość eksportu do CSV
- **API dostęp** - integracja z własnymi systemami
- **Dedykowane wsparcie** - pomoc ekspertów

## 🛠️ Technologie

- **Next.js 14** - framework React z App Router
- **TypeScript** - bezpieczeństwo typów
- **TailwindCSS** - nowoczesne style
- **Prisma** - ORM dla bazy danych
- **Stripe** - płatności online
- **Vercel** - hosting i deployment

## 📦 Instalacja

### Wymagania
- Node.js 18+
- npm/yarn/pnpm

### Krok po kroku

1. **Sklonuj repozytorium**
```bash
git clone https://github.com/yourusername/estatescanner.git
cd estatescanner
```

2. **Zainstaluj zależności**
```bash
npm install
# lub
yarn install
# lub
pnpm install
```

3. **Skonfiguruj zmienne środowiskowe**
```bash
cp .env.example .env.local
```

Edytuj `.env.local` i dodaj swoje klucze API:
```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/estatescanner"

# Authentication
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# Payments
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Email
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"

# AI/ML Services
OPENAI_API_KEY="sk-..."
HUGGINGFACE_API_KEY="hf_..."
```

4. **Zainicjuj bazę danych**
```bash
npx prisma generate
npx prisma db push
```

5. **Uruchom serwer deweloperski**
```bash
npm run dev
# lub
yarn dev
# lub
pnpm dev
```

Aplikacja będzie dostępna pod adresem [http://localhost:3000](http://localhost:3000)

## 🏗️ Struktura projektu

```
├── app/                    # App Router (Next.js 14)
│   ├── (auth)/            # Strony autentykacji
│   ├── app/               # Aplikacja główna (wymaga logowania)
│   ├── api/               # API Routes
│   ├── legal/             # Strony prawne
│   └── page.tsx           # Strona główna
├── components/            # Komponenty React
├── lib/                   # Biblioteki i utils
├── public/                # Pliki statyczne
├── prisma/                # Schemat bazy danych
└── styles/                # Style globalne
```

### Kluczowe komponenty

- **Sidebar** - nawigacja w aplikacji
- **AuctionCard** - karta wyświetlająca aukcję
- **StatCard** - statystyki na dashboardzie
- **Hero** - sekcja hero na stronie głównej

### API Routes

- `/api/auctions` - zarządzanie aukcjami
- `/api/alerts` - zarządzanie alertami
- `/api/auth` - autentykacja użytkowników
- `/api/payments` - obsługa płatności

## 🎯 Użycie

### Rejestracja
1. Przejdź na stronę główną
2. Kliknij "Rozpocznij za darmo"
3. Wypełnij formularz rejestracji
4. Potwierdź email

### Przeglądanie aukcji
1. Zaloguj się na konto
2. Przejdź do sekcji "Aukcje"
3. Użyj filtrów do wyszukiwania
4. Kliknij na aukcję dla szczegółów

### Tworzenie alertów
1. W sekcji "Alerty" kliknij "Nowy alert"
2. Określ kryteria wyszukiwania
3. Zapisz alert
4. Otrzymuj powiadomienia o nowych ofertach

## 📊 Plany cenowe

| Plan | Cena | Funkcje |
|------|------|---------|
| **Starter** | Darmowy | Podstawowe funkcje, 10 aukcji dziennie |
| **Professional** | €49/mies | Pełny dostęp, analiza AI, alerty SMS |
| **Enterprise** | €149/mies | Wszystkie funkcje, API, dedykowane wsparcie |

## 🔐 Bezpieczeństwo

- Szyfrowanie SSL/TLS
- Hasła hashowane bcrypt
- Ochrona przed CSRF
- Walidacja danych wejściowych
- Regularne audyty bezpieczeństwa

## 📈 Wydajność

- Optymalizacja obrazów
- Lazy loading
- Caching z Redis
- CDN dla statycznych plików
- Minimalizacja bundle size

## 🤝 Współpraca

1. Fork repozytorium
2. Utwórz branch dla swojej funkcjonalności
3. Zrób commit zmian
4. Push do swojego brancha
5. Utwórz Pull Request

### Wytyczne
- Używaj TypeScript
- Testuj swoje zmiany
- Dokumentuj nowe funkcje
- Przestrzegaj konwencji kodu

## 📄 Licencja

Ten projekt jest objęty licencją MIT. Szczegóły w pliku [LICENSE](LICENSE).

## 📞 Wsparcie

- **Email**: support@estatescanner.com
- **Telefon**: +48 123 456 789
- **Live Chat**: dostępny w aplikacji
- **Dokumentacja**: [docs.estatescanner.com](https://docs.estatescanner.com)

## 🚀 Deployment

### Vercel (zalecane)
1. Połącz repozytorium z Vercel
2. Skonfiguruj zmienne środowiskowe
3. Wdrożenie automatyczne przy push do main

### Inne platformy
- **Netlify** - statyczny hosting
- **AWS** - chmura Amazon
- **DigitalOcean** - VPS

---

## 🆘 Rozwiązywanie problemów

### Błędy podczas instalacji
```bash
# Usuń node_modules i zainstaluj ponownie
rm -rf node_modules
npm install
```

### Problemy z bazą danych
```bash
# Reset bazy danych
npx prisma db push --force-reset
npx prisma db seed
```

### Problemy z autentykacją
- Sprawdź NEXTAUTH_SECRET w .env
- Upewnij się, że NEXTAUTH_URL jest poprawny
- Sprawdź konfigurację providera

---

**EstateScanner** - Znajdź swoją idealną inwestycję w świecie nieruchomości.
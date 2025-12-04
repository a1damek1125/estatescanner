'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  StarIcon,
  MapPinIcon,
  CalendarIcon,
  BanknotesIcon,
  HomeIcon,
  ScaleIcon,
  DocumentTextIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ArrowUpRightIcon,
  EyeIcon
} from '@heroicons/react/24/outline'

export default function AuctionDetailPage({ params }: { params: { id: string } }) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [note, setNote] = useState('')

  // Mock auction data
  const auction = {
    id: params.id,
    title: 'Finca rústica, 12 000 m² - Alicante',
    source: 'BOE',
    sourceUrl: 'https://subastas.boe.es/...',
    location: {
      city: 'Alicante',
      province: 'Alicante',
      region: 'Comunidad Valenciana',
      coordinates: '38.3452, -0.4810'
    },
    type: 'Finca rústica',
    price: {
      starting: 245000,
      estimated: 350000,
      deposit: 49000,
      step: 5000
    },
    details: {
      size: 12000,
      rooms: 0,
      bathrooms: 0,
      yearBuilt: null,
      condition: 'Do remontu'
    },
    auctionDate: '2024-12-20T10:00:00Z',
    score: 'A',
    description: 'Finca rústica o powierzchni 12 000 m² zabudowana domem wiejskim o powierzchni 120 m². Nieruchomość położona w gminie Alicante, w otoczeniu pól uprawnych. Dojazd drogą gruntową. Wymaga remontu.',
    aiAnalysis: {
      score: 'A',
      reasons: [
        'Cena wywoławcza 30% poniżej wartości rynkowej',
        'Duża działka z potencjałem inwestycyjnym',
        'Brak obciążeń hipotecznych',
        'Atrakcyjna lokalizacja w gminie Alicante'
      ],
      risks: [
        'Brak dostępu do mediów (prąd, woda)',
        'Dojazd drogą gruntową',
        'Wymaga znacznego remontu'
      ]
    },
    documents: [
      { name: 'Ogłoszenie BOE', url: '#', type: 'pdf' },
      { name: 'Wycena techniczna', url: '#', type: 'pdf' },
      { name: 'Plan działki', url: '#', type: 'pdf' }
    ],
    timeline: [
      { date: '2024-11-15', event: 'Publikacja ogłoszenia w BOE' },
      { date: '2024-12-20', event: 'Data licytacji' },
      { date: '2024-12-27', event: 'Termin wpłaty depozytu' }
    ]
  }

  const handleSaveNote = () => {
    console.log('Saving note:', note)
    // Save note logic here
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm">
                {auction.source}
              </span>
              <a 
                href={auction.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-300 text-sm flex items-center"
              >
                <EyeIcon className="w-4 h-4 mr-1" />
                Zobacz aukcję źródłową
                <ArrowUpRightIcon className="w-3 h-3 ml-1" />
              </a>
            </div>
            <h1 className="text-3xl font-bold mb-2">{auction.title}</h1>
            <div className="flex items-center text-slate-400">
              <MapPinIcon className="w-5 h-5 mr-2" />
              {auction.location.city}, {auction.location.province}
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              auction.score === 'A+' ? 'bg-emerald-500/20 text-emerald-400' :
              auction.score === 'A' ? 'bg-emerald-500/20 text-emerald-400' :
              auction.score === 'B' ? 'bg-yellow-500/20 text-yellow-400' :
              'bg-red-500/20 text-red-400'
            }`}>
              Score: {auction.score}
            </span>
            <button 
              onClick={() => setIsFavorite(!isFavorite)}
              className={`p-2 rounded-lg transition-colors ${
                isFavorite 
                  ? 'bg-yellow-500/20 text-yellow-400' 
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              <StarIcon className="w-5 h-5" fill={isFavorite ? 'currentColor' : 'none'} />
            </button>
            <button className="btn-primary">
              Ustaw alert na podobne
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column - Property details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Photos */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">Zdjęcia</h2>
            <div className="bg-slate-800 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center text-slate-400">
                <HomeIcon className="w-16 h-16 mx-auto mb-2" />
                <p>Brak zdjęć</p>
                <p className="text-sm">Zdjęcia będą dostępne wkrótce</p>
              </div>
            </div>
          </div>

          {/* Basic info */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">Informacje podstawowe</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-400">Lokalizacja</p>
                <p className="font-medium">{auction.location.city}, {auction.location.province}</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Typ</p>
                <p className="font-medium">{auction.type}</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Powierzchnia</p>
                <p className="font-medium">{auction.details.size.toLocaleString()} m²</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Stan</p>
                <p className="font-medium">{auction.details.condition}</p>
              </div>
            </div>
            
            <div className="mt-4">
              <p className="text-sm text-slate-400">Link do mapy</p>
              <a 
                href={`https://maps.google.com/?q=${auction.location.coordinates}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 text-sm"
              >
                Zobacz na Google Maps
              </a>
            </div>
          </div>

          {/* Price info */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">Cena i warunki licytacji</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-800 rounded-lg p-4">
                <p className="text-sm text-slate-400">Cena wywoławcza</p>
                <p className="text-2xl font-bold text-emerald-400">
                  €{auction.price.starting.toLocaleString()}
                </p>
              </div>
              <div className="bg-slate-800 rounded-lg p-4">
                <p className="text-sm text-slate-400">Wartość szacowana</p>
                <p className="text-2xl font-bold text-slate-300">
                  €{auction.price.estimated.toLocaleString()}
                </p>
              </div>
              <div className="bg-slate-800 rounded-lg p-4">
                <p className="text-sm text-slate-400">Oszczędność</p>
                <p className="text-2xl font-bold text-emerald-400">
                  {Math.round((1 - auction.price.starting / auction.price.estimated) * 100)}%
                </p>
              </div>
            </div>
            
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-400">Depozyt</p>
                <p className="font-medium">€{auction.price.deposit.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Krok licytacji</p>
                <p className="font-medium">€{auction.price.step.toLocaleString()}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">Opis z ogłoszenia</h2>
            <p className="text-slate-300 leading-relaxed">{auction.description}</p>
          </div>

          {/* Documents */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">Dokumenty</h2>
            <div className="space-y-2">
              {auction.documents.map((doc, index) => (
                <a
                  key={index}
                  href={doc.url}
                  className="flex items-center justify-between bg-slate-800 rounded-lg p-3 hover:bg-slate-700 transition-colors"
                >
                  <div className="flex items-center">
                    <DocumentTextIcon className="w-5 h-5 text-emerald-400 mr-3" />
                    <span>{doc.name}</span>
                  </div>
                  <span className="text-xs text-slate-400 uppercase">{doc.type}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right column - AI Analysis */}
        <div className="space-y-6">
          {/* AI Score */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">AI Analiza</h2>
            
            <div className="text-center mb-6">
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full text-3xl font-bold mb-2 ${
                auction.score === 'A+' ? 'bg-emerald-500/20 text-emerald-400' :
                auction.score === 'A' ? 'bg-emerald-500/20 text-emerald-400' :
                'bg-yellow-500/20 text-yellow-400'
              }`}>
                {auction.score}
              </div>
              <p className="text-slate-400">Dlaczego ten score?</p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-emerald-400 mb-2 flex items-center">
                  <CheckCircleIcon className="w-5 h-5 mr-2" />
                  Zalety
                </h3>
                <ul className="space-y-1 text-sm text-slate-300">
                  {auction.aiAnalysis.reasons.map((reason, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-yellow-400 mb-2 flex items-center">
                  <ExclamationTriangleIcon className="w-5 h-5 mr-2" />
                  Ryzyka
                </h3>
                <ul className="space-y-1 text-sm text-slate-300">
                  {auction.aiAnalysis.risks.map((risk, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      {risk}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">Terminarz</h2>
            <div className="space-y-3">
              {auction.timeline.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="text-sm font-medium">{item.event}</p>
                    <p className="text-xs text-slate-400">{new Date(item.date).toLocaleDateString('pl-PL')}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* User notes */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">Twoje notatki</h2>
            <textarea
              className="input w-full h-24 resize-none"
              placeholder="Dodaj swoje notatki o tej nieruchomości..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
            <button 
              onClick={handleSaveNote}
              className="btn-primary w-full mt-3"
            >
              Zapisz notatkę
            </button>
          </div>

          {/* Quick actions */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">Szybkie akcje</h2>
            <div className="space-y-2">
              <button className="w-full btn-secondary text-left">
                📧 Wyślij na email
              </button>
              <button className="w-full btn-secondary text-left">
                📊 Dodaj do porównania
              </button>
              <button className="w-full btn-secondary text-left">
                📅 Dodaj do kalendarza
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
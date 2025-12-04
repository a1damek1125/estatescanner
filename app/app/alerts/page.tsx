'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  PlusIcon,
  BellIcon,
  EnvelopeIcon,
  DevicePhoneMobileIcon,
  PencilIcon,
  TrashIcon,
  PauseIcon,
  PlayIcon
} from '@heroicons/react/24/outline'

export default function AlertsPage() {
  const [alerts, setAlerts] = useState([
    {
      id: '1',
      name: 'Mieszkania w Barcelonie do 200k',
      filters: {
        location: 'Barcelona',
        type: 'Mieszkanie',
        maxPrice: 200000,
        score: 'A,B'
      },
      channels: ['email'],
      frequency: 'realtime',
      status: 'active',
      created: '2024-11-15',
      matches: 3
    },
    {
      id: '2',
      name: 'Domy w Valencji - okazje',
      filters: {
        location: 'Valencia',
        type: 'Dom',
        maxPrice: 150000,
        score: 'A+'
      },
      channels: ['email', 'sms'],
      frequency: 'daily',
      status: 'active',
      created: '2024-11-10',
      matches: 1
    },
    {
      id: '3',
      name: 'Finki w Andaluzji',
      filters: {
        location: 'Andalucía',
        type: 'Finca',
        maxPrice: 300000,
        score: 'A,B,C'
      },
      channels: ['email'],
      frequency: 'weekly',
      status: 'paused',
      created: '2024-11-05',
      matches: 0
    }
  ])

  const [showNewAlertModal, setShowNewAlertModal] = useState(false)

  const toggleAlertStatus = (id: string) => {
    setAlerts(alerts.map(alert => 
      alert.id === id 
        ? { ...alert, status: alert.status === 'active' ? 'paused' : 'active' }
        : alert
    ))
  }

  const deleteAlert = (id: string) => {
    setAlerts(alerts.filter(alert => alert.id !== id))
  }

  const getFrequencyLabel = (frequency: string) => {
    switch (frequency) {
      case 'realtime': return 'Real-time'
      case 'daily': return 'Codziennie'
      case 'weekly': return 'Co tydzień'
      default: return frequency
    }
  }

  const getChannelIcons = (channels: string[]) => {
    return channels.map(channel => {
      switch (channel) {
        case 'email': return <EnvelopeIcon key={channel} className="w-4 h-4" />
        case 'sms': return <DevicePhoneMobileIcon key={channel} className="w-4 h-4" />
        default: return null
      }
    })
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Moje alerty</h1>
          <p className="text-slate-400">Zarządzaj swoimi alertami i powiadomieniami</p>
        </div>
        
        <button 
          onClick={() => setShowNewAlertModal(true)}
          className="btn-primary flex items-center"
        >
          <PlusIcon className="w-5 h-5 mr-2" />
          Nowy alert
        </button>
      </div>

      {/* Alerts list */}
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div key={alert.id} className="card p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold">{alert.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    alert.status === 'active' 
                      ? 'bg-emerald-500/20 text-emerald-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {alert.status === 'active' ? 'Aktywny' : 'Wstrzymany'}
                  </span>
                  {alert.matches > 0 && (
                    <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-xs">
                      {alert.matches} nowych
                    </span>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {alert.filters.location && (
                    <span className="bg-slate-800 text-slate-300 px-2 py-1 rounded text-sm">
                      📍 {alert.filters.location}
                    </span>
                  )}
                  {alert.filters.type && (
                    <span className="bg-slate-800 text-slate-300 px-2 py-1 rounded text-sm">
                      🏠 {alert.filters.type}
                    </span>
                  )}
                  {alert.filters.maxPrice && (
                    <span className="bg-slate-800 text-slate-300 px-2 py-1 rounded text-sm">
                      💰 do €{alert.filters.maxPrice.toLocaleString()}
                    </span>
                  )}
                  {alert.filters.score && (
                    <span className="bg-slate-800 text-slate-300 px-2 py-1 rounded text-sm">
                      ⭐ Score: {alert.filters.score}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center gap-4 text-sm text-slate-400">
                  <div className="flex items-center gap-1">
                    <BellIcon className="w-4 h-4" />
                    {getFrequencyLabel(alert.frequency)}
                  </div>
                  <div className="flex items-center gap-1">
                    {getChannelIcons(alert.channels)}
                    {alert.channels.join(', ')}
                  </div>
                  <div>
                    Utworzono: {new Date(alert.created).toLocaleDateString('pl-PL')}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 ml-4">
                <button
                  onClick={() => toggleAlertStatus(alert.id)}
                  className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                  title={alert.status === 'active' ? 'Wstrzymaj' : 'Wznów'}
                >
                  {alert.status === 'active' ? (
                    <PauseIcon className="w-5 h-5 text-yellow-400" />
                  ) : (
                    <PlayIcon className="w-5 h-5 text-emerald-400" />
                  )}
                </button>
                
                <Link
                  href={`/app/alerts/${alert.id}/edit`}
                  className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                  title="Edytuj"
                >
                  <PencilIcon className="w-5 h-5 text-blue-400" />
                </Link>
                
                <button
                  onClick={() => deleteAlert(alert.id)}
                  className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                  title="Usuń"
                >
                  <TrashIcon className="w-5 h-5 text-red-400" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {alerts.length === 0 && (
        <div className="card p-12 text-center">
          <BellIcon className="w-16 h-16 text-slate-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Brak alertów</h3>
          <p className="text-slate-400 mb-6">
            Nie masz jeszcze żadnych alertów. Utwórz swój pierwszy alert, 
            aby otrzymywać powiadomienia o nowych ofertach.
          </p>
          <button 
            onClick={() => setShowNewAlertModal(true)}
            className="btn-primary"
          >
            Utwórz pierwszy alert
          </button>
        </div>
      )}

      {/* New Alert Modal */}
      {showNewAlertModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-800">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Nowy alert</h2>
                <button
                  onClick={() => setShowNewAlertModal(false)}
                  className="text-slate-400 hover:text-slate-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="space-y-6">
                {/* Alert name */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Nazwa alertu
                  </label>
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="np. Mieszkania w Barcelonie"
                  />
                </div>
                
                {/* Filters */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Kryteria wyszukiwania</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Lokalizacja
                      </label>
                      <input
                        type="text"
                        className="input w-full"
                        placeholder="Miasto lub prowincja"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Typ nieruchomości
                      </label>
                      <select className="input w-full">
                        <option value="">Dowolny</option>
                        <option value="mieszkanie">Mieszkanie</option>
                        <option value="dom">Dom</option>
                        <option value="finca">Finca</option>
                        <option value="komercyjne">Komercyjne</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Cena maksymalna
                      </label>
                      <input
                        type="number"
                        className="input w-full"
                        placeholder="€"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Scoring
                      </label>
                      <select className="input w-full">
                        <option value="">Dowolny</option>
                        <option value="A+">A+</option>
                        <option value="A">A</option>
                        <option value="A,B">A lub B</option>
                        <option value="A,B,C">A, B lub C</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                {/* Channels */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Kanały powiadomień</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-slate-600 text-emerald-600 focus:ring-emerald-500" />
                      <span className="ml-2">Email</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-slate-600 text-emerald-600 focus:ring-emerald-500" />
                      <span className="ml-2">SMS (tylko Pro)</span>
                    </label>
                  </div>
                </div>
                
                {/* Frequency */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Częstotliwość</h3>
                  <select className="input w-full">
                    <option value="realtime">Real-time</span>
                    <option value="daily">Raz dziennie</option>
                    <option value="weekly">Raz w tygodniu</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-slate-800">
                <button
                  onClick={() => setShowNewAlertModal(false)}
                  className="btn-secondary"
                >
                  Anuluj
                </button>
                <button className="btn-primary">
                  Zapisz alert
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
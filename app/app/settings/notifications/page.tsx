'use client'

import { useState } from 'react'
import { 
  BellIcon,
  EnvelopeIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline'

export default function NotificationsSettings() {
  const [notifications, setNotifications] = useState({
    alerts: {
      email: true,
      sms: true,
      push: false
    },
    weeklySummary: {
      email: true,
      sms: false
    },
    newAuctions: {
      email: false,
      sms: false,
      push: true
    },
    priceDrops: {
      email: true,
      sms: false,
      push: true
    },
    systemUpdates: {
      email: true,
      sms: false,
      push: false
    }
  })

  const [emailSettings, setEmailSettings] = useState({
    fromName: 'EstateScanner',
    frequency: 'immediate'
  })

  const handleNotificationToggle = (category: string, channel: string) => {
    setNotifications(prev => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [channel]: !prev[category as keyof typeof prev][channel as keyof typeof prev[typeof category]]
      }
    }))
  }

  const categories = [
    {
      id: 'alerts',
      title: 'Alerty nieruchomości',
      description: 'Powiadomienia o nowych ofertach pasujących do Twoich alertów',
      channels: ['email', 'sms', 'push']
    },
    {
      id: 'weeklySummary',
      title: 'Podsumowanie tygodniowe',
      description: 'Tygodniowe zestawienie nowych ofert i statystyk rynku',
      channels: ['email', 'sms']
    },
    {
      id: 'newAuctions',
      title: 'Nowe aukcje',
      description: 'Powiadomienia o nowych aukcjach w wybranych lokalizacjach',
      channels: ['email', 'sms', 'push']
    },
    {
      id: 'priceDrops',
      title: 'Obniżki cen',
      description: 'Informacje o obniżkach cen w obserwowanych nieruchomościach',
      channels: ['email', 'sms', 'push']
    },
    {
      id: 'systemUpdates',
      title: 'Aktualizacje systemu',
      description: 'Informacje o nowych funkcjach i ważnych zmianach',
      channels: ['email', 'sms', 'push']
    }
  ]

  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case 'email':
        return <EnvelopeIcon className="w-5 h-5" />
      case 'sms':
        return <DevicePhoneMobileIcon className="w-5 h-5" />
      case 'push':
        return <ComputerDesktopIcon className="w-5 h-5" />
      default:
        return null
    }
  }

  const getChannelLabel = (channel: string) => {
    switch (channel) {
      case 'email':
        return 'Email'
      case 'sms':
        return 'SMS'
      case 'push':
        return 'Powiadomienia web'
      default:
        return channel
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Powiadomienia</h1>
        <p className="text-slate-400">Wybierz, jakie powiadomienia chcesz otrzymywać i przez które kanały</p>
      </div>

      {/* Notification Settings */}
      <div className="card p-6 mb-8">
        <h2 className="text-xl font-semibold mb-6 flex items-center">
          <BellIcon className="w-6 h-6 mr-2 text-emerald-400" />
          Ustawienia powiadomień
        </h2>
        
        <div className="space-y-6">
          {categories.map((category) => (
            <div key={category.id} className="border-b border-slate-800 pb-6 last:border-0">
              <div className="mb-4">
                <h3 className="text-lg font-medium mb-1">{category.title}</h3>
                <p className="text-sm text-slate-400">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {category.channels.map((channel) => (
                  <label key={channel} className="flex items-center justify-between bg-slate-800 rounded-lg p-3 cursor-pointer hover:bg-slate-700 transition-colors">
                    <div className="flex items-center">
                      {getChannelIcon(channel)}
                      <span className="ml-2">{getChannelLabel(channel)}</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={notifications[category.id as keyof typeof notifications][channel as keyof typeof notifications[typeof category.id]]}
                      onChange={() => handleNotificationToggle(category.id, channel)}
                      className="rounded border-slate-600 text-emerald-600 focus:ring-emerald-500"
                    />
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Email Settings */}
      <div className="card p-6 mb-8">
        <h2 className="text-xl font-semibold mb-6 flex items-center">
          <EnvelopeIcon className="w-6 h-6 mr-2 text-emerald-400" />
          Ustawienia email
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fromName" className="block text-sm font-medium text-slate-300 mb-2">
              Nazwa nadawcy
            </label>
            <input
              type="text"
              id="fromName"
              name="fromName"
              className="input w-full"
              value={emailSettings.fromName}
              onChange={(e) => setEmailSettings({...emailSettings, fromName: e.target.value})}
            />
            <p className="text-xs text-slate-400 mt-1">
              Jak będzie wyświetlana nazwa nadawcy w Twoich emailach
            </p>
          </div>
          
          <div>
            <label htmlFor="frequency" className="block text-sm font-medium text-slate-300 mb-2">
              Częstotliwość emaili
            </label>
            <select
              id="frequency"
              name="frequency"
              className="input w-full"
              value={emailSettings.frequency}
              onChange={(e) => setEmailSettings({...emailSettings, frequency: e.target.value})}
            >
              <option value="immediate">Natychmiast</option>
              <option value="hourly">Co godzinę</option>
              <option value="daily">Raz dziennie</option>
              <option value="weekly">Raz w tygodniu</option>
            </select>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-slate-800 rounded-lg">
          <div className="flex items-start">
            <InformationCircleIcon className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-slate-300">
              <p className="font-medium mb-1">Testuj powiadomienia</p>
              <p>Wyślij testowe powiadomienie, aby sprawdzić czy wszystko działa poprawnie.</p>
              <button className="btn-secondary text-sm mt-2">
                Wyślij testowy email
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SMS Settings */}
      <div className="card p-6">
        <h2 className="text-xl font-semibold mb-6 flex items-center">
          <DevicePhoneMobileIcon className="w-6 h-6 mr-2 text-emerald-400" />
          Ustawienia SMS
        </h2>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-slate-300 mb-2">
              Numer telefonu
            </label>
            <input
              type="tel"
              id="phoneNumber"
              className="input w-full"
              placeholder="+48 123 456 789"
            />
            <p className="text-xs text-slate-400 mt-1">
              Numer musi być w formacie międzynarodowym (+48...)
            </p>
          </div>
          
          <div className="p-4 bg-slate-800 rounded-lg">
            <div className="flex items-start">
              <InformationCircleIcon className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-slate-300">
                <p className="font-medium mb-1">Koszt SMS</p>
                <p>Każdy SMS kosztuje €0.15. Koszt jest doliczany do Twojego następnego rachunku.</p>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-slate-800 rounded-lg">
            <div className="flex items-start">
              <InformationCircleIcon className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-slate-300">
                <p className="font-medium mb-1">Testuj SMS</p>
                <p>Wyślij testową wiadomość SMS, aby sprawdzić czy numer jest poprawny.</p>
                <button className="btn-secondary text-sm mt-2">
                  Wyślij testowy SMS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
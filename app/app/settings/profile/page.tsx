'use client'

import { useState } from 'react'
import { UserIcon, EnvelopeIcon, LanguageIcon, CurrencyEuroIcon, LockClosedIcon } from '@heroicons/react/24/outline'

export default function ProfileSettings() {
  const [profile, setProfile] = useState({
    firstName: 'Adam',
    lastName: 'Kowalski',
    email: 'adam.kowalski@email.com',
    language: 'pl',
    currency: 'EUR',
    phone: '+48 123 456 789'
  })

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setProfile(prev => ({ ...prev, [name]: value }))
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPasswordForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSaveProfile = () => {
    console.log('Saving profile:', profile)
    // Save profile logic here
  }

  const handleChangePassword = () => {
    console.log('Changing password:', passwordForm)
    // Change password logic here
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Profil użytkownika</h1>
        <p className="text-slate-400">Zarządzaj swoimi danymi osobowymi i ustawieniami konta</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Personal Information */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-6 flex items-center">
            <UserIcon className="w-6 h-6 mr-2 text-emerald-400" />
            Dane osobowe
          </h2>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-2">
                  Imię
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="input w-full"
                  value={profile.firstName}
                  onChange={handleProfileChange}
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-2">
                  Nazwisko
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="input w-full"
                  value={profile.lastName}
                  onChange={handleProfileChange}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Email
              </label>
              <div className="relative">
                <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input w-full pl-10"
                  value={profile.email}
                  onChange={handleProfileChange}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="input w-full"
                value={profile.phone}
                onChange={handleProfileChange}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="language" className="block text-sm font-medium text-slate-300 mb-2">
                  Język
                </label>
                <div className="relative">
                  <LanguageIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <select
                    id="language"
                    name="language"
                    className="input w-full pl-10"
                    value={profile.language}
                    onChange={handleProfileChange}
                  >
                    <option value="pl">Polski</option>
                    <option value="en">English</option>
                    <option value="es">Español</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="currency" className="block text-sm font-medium text-slate-300 mb-2">
                  Waluta
                </label>
                <div className="relative">
                  <CurrencyEuroIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <select
                    id="currency"
                    name="currency"
                    className="input w-full pl-10"
                    value={profile.currency}
                    onChange={handleProfileChange}
                  >
                    <option value="EUR">EUR (€)</option>
                    <option value="PLN">PLN (zł)</option>
                    <option value="USD">USD ($)</option>
                  </select>
                </div>
              </div>
            </div>
            
            <button 
              onClick={handleSaveProfile}
              className="btn-primary w-full mt-6"
            >
              Zapisz zmiany
            </button>
          </div>
        </div>

        {/* Change Password */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-6 flex items-center">
            <LockClosedIcon className="w-6 h-6 mr-2 text-emerald-400" />
            Zmiana hasła
          </h2>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="currentPassword" className="block text-sm font-medium text-slate-300 mb-2">
                Aktualne hasło
              </label>
              <input
                type="password"
                id="currentPassword"
                name="currentPassword"
                className="input w-full"
                placeholder="••••••••"
                value={passwordForm.currentPassword}
                onChange={handlePasswordChange}
              />
            </div>
            
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-slate-300 mb-2">
                Nowe hasło
              </label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                className="input w-full"
                placeholder="••••••••"
                value={passwordForm.newPassword}
                onChange={handlePasswordChange}
              />
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-300 mb-2">
                Potwierdź nowe hasło
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="input w-full"
                placeholder="••••••••"
                value={passwordForm.confirmPassword}
                onChange={handlePasswordChange}
              />
            </div>
            
            <button 
              onClick={handleChangePassword}
              className="btn-primary w-full mt-6"
            >
              Zmień hasło
            </button>
          </div>
          
          <div className="mt-6 p-4 bg-slate-800 rounded-lg">
            <h3 className="text-sm font-medium text-slate-300 mb-2">Wymagania hasła:</h3>
            <ul className="text-sm text-slate-400 space-y-1">
              <li>• Minimum 8 znaków</li>
              <li>• Co najmniej jedna wielka litera</li>
              <li>• Co najmniej jedna cyfra</li>
              <li>• Co najmniej jeden znak specjalny</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Account Info */}
      <div className="mt-8 card p-6">
        <h2 className="text-xl font-semibold mb-6">Informacje o koncie</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-800 rounded-lg p-4">
            <p className="text-sm text-slate-400 mb-1">Plan</p>
            <p className="text-lg font-semibold text-emerald-400">Pro</p>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-4">
            <p className="text-sm text-slate-400 mb-1">Data wygaśnięcia</p>
            <p className="text-lg font-semibold">15.01.2025</p>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-4">
            <p className="text-sm text-slate-400 mb-1">Data rejestracji</p>
            <p className="text-lg font-semibold">01.11.2024</p>
          </div>
        </div>
        
        <div className="mt-6 flex gap-3">
          <Link href="/app/settings/billing" className="btn-secondary">
            Zarządzaj planem
          </Link>
          <button className="btn-secondary text-red-400 hover:text-red-300">
            Usuń konto
          </button>
        </div>
      </div>
    </div>
  )
}
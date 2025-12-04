'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
    joinBeta: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle registration logic here
    console.log('Register:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 py-12">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="bg-emerald-500 w-12 h-12 rounded-lg mx-auto mb-4"></div>
          <h2 className="text-3xl font-bold">Dołącz do EstateScanner</h2>
          <p className="text-slate-400 mt-2">Zacznij swoją przygodę z licytacjami</p>
        </div>
        
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300">
                Imię
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="input w-full mt-1"
                placeholder="Twoje imię"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="input w-full mt-1"
                placeholder="twój@email.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-300">
                Hasło
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="input w-full mt-1"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-300">
                Potwierdź hasło
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="input w-full mt-1"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start">
              <input
                id="acceptTerms"
                name="acceptTerms"
                type="checkbox"
                required
                className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-slate-600 rounded mt-1"
                checked={formData.acceptTerms}
                onChange={handleChange}
              />
              <label htmlFor="acceptTerms" className="ml-2 block text-sm text-slate-400">
                Akceptuję{' '}
                <Link href="/legal/terms" className="text-emerald-400 hover:text-emerald-300">
                  regulamin
                </Link>{' '}
                i{' '}
                <Link href="/legal/privacy" className="text-emerald-400 hover:text-emerald-300">
                  politykę prywatności
                </Link>
              </label>
            </div>

            <div className="flex items-start">
              <input
                id="joinBeta"
                name="joinBeta"
                type="checkbox"
                className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-slate-600 rounded mt-1"
                checked={formData.joinBeta}
                onChange={handleChange}
              />
              <label htmlFor="joinBeta" className="ml-2 block text-sm text-slate-400">
                Chcę dołączyć do beta PRO (darmowy okres 30 dni)
              </label>
            </div>
          </div>

          <div>
            <button type="submit" className="btn-primary w-full">
              Zarejestruj się
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-slate-400">
            Masz już konto?{' '}
            <Link href="/auth/login" className="text-emerald-400 hover:text-emerald-300">
              Zaloguj się
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ResetPasswordPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle reset password logic here
    console.log('Reset password:', email)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <div className="max-w-md w-full space-y-8 text-center">
          <div className="bg-emerald-500 w-12 h-12 rounded-lg mx-auto mb-4"></div>
          <h2 className="text-3xl font-bold">Sprawdź swoją skrzynkę</h2>
          <p className="text-slate-400">
            Wysłaliśmy Ci link do resetowania hasła na adres {email}
          </p>
          <Link href="/auth/login" className="btn-primary inline-block">
            Wróć do logowania
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="bg-emerald-500 w-12 h-12 rounded-lg mx-auto mb-4"></div>
          <h2 className="text-3xl font-bold">Resetuj hasło</h2>
          <p className="text-slate-400 mt-2">
            Podaj swój adres email, a wyślemy Ci link do resetowania hasła
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <button type="submit" className="btn-primary w-full">
              Wyślij link resetujący
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-slate-400">
            Pamiętasz hasło?{' '}
            <Link href="/auth/login" className="text-emerald-400 hover:text-emerald-300">
              Zaloguj się
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login:', { email, password })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="bg-emerald-500 w-12 h-12 rounded-lg mx-auto mb-4"></div>
          <h2 className="text-3xl font-bold">Zaloguj się</h2>
          <p className="text-slate-400 mt-2">Witaj z powrotem w EstateScanner</p>
        </div>
        
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-slate-600 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-400">
                Zapamiętaj mnie
              </label>
            </div>

            <div className="text-sm">
              <Link href="/auth/reset-password" className="text-emerald-400 hover:text-emerald-300">
                Zapomniałeś hasła?
              </Link>
            </div>
          </div>

          <div>
            <button type="submit" className="btn-primary w-full">
              Zaloguj się
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-slate-400">
            Nie masz konta?{' '}
            <Link href="/auth/register" className="text-emerald-400 hover:text-emerald-300">
              Zarejestruj się
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  CreditCardIcon,
  CalendarIcon,
  DocumentTextIcon,
  ArrowDownTrayIcon,
  CheckCircleIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

export default function BillingSettings() {
  const [currentPlan] = useState({
    name: 'Pro',
    price: 29,
    interval: 'month',
    status: 'active',
    nextBilling: '2025-01-15',
    features: [
      'Nielimitowane alerty',
      'Nielimitowane ulubione',
      'Zaawansowane filtry',
      'Eksport CSV/Excel',
      'SMS alerts',
      'Priorytetowy support'
    ]
  })

  const [invoices] = useState([
    {
      id: 'INV-001',
      date: '2024-12-01',
      amount: 29,
      status: 'paid',
      period: '01.12.2024 - 01.01.2025'
    },
    {
      id: 'INV-002',
      date: '2024-11-01',
      amount: 29,
      status: 'paid',
      period: '01.11.2024 - 01.12.2024'
    },
    {
      id: 'INV-003',
      date: '2024-10-01',
      amount: 29,
      status: 'paid',
      period: '01.10.2024 - 01.11.2024'
    }
  ])

  const [paymentMethod] = useState({
    type: 'card',
    last4: '4242',
    brand: 'Visa',
    expiry: '12/2026'
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
        return 'bg-emerald-500/20 text-emerald-400'
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-400'
      case 'failed':
        return 'bg-red-500/20 text-red-400'
      default:
        return 'bg-slate-500/20 text-slate-400'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'paid':
        return <CheckCircleIcon className="w-4 h-4" />
      case 'pending':
        return <ClockIcon className="w-4 h-4" />
      default:
        return null
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Płatności i rozliczenia</h1>
        <p className="text-slate-400">Zarządzaj swoim planem, metodą płatności i fakturami</p>
      </div>

      {/* Current Plan */}
      <div className="card p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Aktualny plan</h2>
          <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-medium">
            Aktywny
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-slate-800 rounded-lg p-4">
            <p className="text-sm text-slate-400 mb-1">Plan</p>
            <p className="text-2xl font-bold text-emerald-400">{currentPlan.name}</p>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-4">
            <p className="text-sm text-slate-400 mb-1">Cena</p>
            <p className="text-2xl font-bold">
              €{currentPlan.price}/{currentPlan.interval === 'month' ? 'miesiąc' : 'rok'}
            </p>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-4">
            <p className="text-sm text-slate-400 mb-1">Następna płatność</p>
            <p className="text-lg font-semibold">
              {new Date(currentPlan.nextBilling).toLocaleDateString('pl-PL')}
            </p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="font-medium mb-3">Co zawiera Twój plan:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {currentPlan.features.map((feature, index) => (
              <div key={index} className="flex items-center text-sm text-slate-300">
                <CheckCircleIcon className="w-4 h-4 text-emerald-400 mr-2" />
                {feature}
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex gap-3">
          <Link href="/pricing" className="btn-primary">
            Zmień plan
          </Link>
          <button className="btn-secondary">
            Anuluj subskrypcję
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Payment Method */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-6 flex items-center">
            <CreditCardIcon className="w-6 h-6 mr-2 text-emerald-400" />
            Metoda płatności
          </h2>
          
          <div className="bg-slate-800 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-emerald-500/20 p-2 rounded-lg mr-3">
                  <CreditCardIcon className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="font-medium">{paymentMethod.brand} •••• {paymentMethod.last4}</p>
                  <p className="text-sm text-slate-400">Wygasa {paymentMethod.expiry}</p>
                </div>
              </div>
              <span className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded text-xs">
                Domyślna
              </span>
            </div>
          </div>
          
          <button className="btn-secondary w-full">
            Zmień metodę płatności
          </button>
        </div>

        {/* Billing Info */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-6 flex items-center">
            <CalendarIcon className="w-6 h-6 mr-2 text-emerald-400" />
            Informacje rozliczeniowe
          </h2>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-slate-300 mb-2">
                Nazwa firmy (opcjonalnie)
              </label>
              <input
                type="text"
                id="companyName"
                className="input w-full"
                placeholder="Nazwa firmy"
              />
            </div>
            
            <div>
              <label htmlFor="taxId" className="block text-sm font-medium text-slate-300 mb-2">
                NIP/VAT ID (opcjonalnie)
              </label>
              <input
                type="text"
                id="taxId"
                className="input w-full"
                placeholder="NIP/VAT ID"
              />
            </div>
            
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-slate-300 mb-2">
                Adres rozliczeniowy
              </label>
              <textarea
                id="address"
                className="input w-full h-20 resize-none"
                placeholder="Adres do faktury..."
              />
            </div>
            
            <button className="btn-primary w-full">
              Zapisz informacje
            </button>
          </div>
        </div>
      </div>

      {/* Invoices */}
      <div className="mt-8 card p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold flex items-center">
            <DocumentTextIcon className="w-6 h-6 mr-2 text-emerald-400" />
            Historia płatności
          </h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Numer faktury
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Data
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Okres
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Kwota
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Akcje
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-slate-800/50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {invoice.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                    {new Date(invoice.date).toLocaleDateString('pl-PL')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                    {invoice.period}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-emerald-400">
                    €{invoice.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(invoice.status)}`}>
                      {getStatusIcon(invoice.status)}
                      <span className="ml-1">
                        {invoice.status === 'paid' ? 'Opłacone' : 'Oczekuje'}
                      </span>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-emerald-400 hover:text-emerald-300 flex items-center">
                      <ArrowDownTrayIcon className="w-4 h-4 mr-1" />
                      Pobierz
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
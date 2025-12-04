'use client'

import { useState } from 'react'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Contact form:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Kontakt</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Masz pytania? Chcesz dowiedzieć się więcej o EstateScanner? 
            Skontaktuj się z nami - chętnie pomożemy!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card p-8">
            <h2 className="text-2xl font-bold mb-6">Wyślij wiadomość</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Imię i nazwisko
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="input w-full"
                  placeholder="Twoje imię i nazwisko"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="input w-full"
                  placeholder="twój@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Temat
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="input w-full"
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option value="">Wybierz temat</option>
                  <option value="general">Pytanie ogólne</option>
                  <option value="support">Wsparcie techniczne</option>
                  <option value="sales">Sprzedaż</option>
                  <option value="partnership">Współpraca</option>
                  <option value="media">Media</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="input w-full resize-none"
                  placeholder="Treść wiadomości..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              
              <button type="submit" className="btn-primary w-full">
                Wyślij wiadomość
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="card p-8">
              <h2 className="text-2xl font-bold mb-6">Dane kontaktowe</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-emerald-500/20 p-3 rounded-lg mr-4">
                    <EnvelopeIcon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-slate-400">contact@estatescanner.com</p>
                    <p className="text-sm text-slate-500 mt-1">Odpowiadamy w ciągu 24h</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-emerald-500/20 p-3 rounded-lg mr-4">
                    <PhoneIcon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefon</h3>
                    <p className="text-slate-400">+34 123 456 789</p>
                    <p className="text-sm text-slate-500 mt-1">Pn-Pt 9:00-18:00 CET</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-emerald-500/20 p-3 rounded-lg mr-4">
                    <MapPinIcon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Adres</h3>
                    <p className="text-slate-400">
                      EstateScanner S.L.<br />
                      Calle Mayor 123<br />
                      28013 Madrid, Spain
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="card p-8">
              <h3 className="text-xl font-semibold mb-4">Godziny pracy</h3>
              <div className="space-y-2 text-slate-300">
                <div className="flex justify-between">
                  <span>Poniedziałek - Piątek</span>
                  <span>9:00 - 18:00 CET</span>
                </div>
                <div className="flex justify-between">
                  <span>Sobota</span>
                  <span>10:00 - 14:00 CET</span>
                </div>
                <div className="flex justify-between">
                  <span>Niedziela</span>
                  <span>Nieczynne</span>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="card p-8">
              <h3 className="text-xl font-semibold mb-4">Inne kanały</h3>
              <div className="space-y-3 text-slate-300">
                <p>📧 Support techniczny: support@estatescanner.com</p>
                <p>💼 Współpraca biznesowa: business@estatescanner.com</p>
                <p>📱 Social media: @EstateScanner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
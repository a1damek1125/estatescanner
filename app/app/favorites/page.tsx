'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  StarIcon,
  MapPinIcon,
  BanknotesIcon,
  PencilIcon,
  TrashIcon,
  TagIcon,
  EyeIcon
} from '@heroicons/react/24/outline'

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([
    {
      id: '1',
      title: 'Mieszkanie 3-pokojowe, Barcelona',
      location: 'Barcelona, Cataluña',
      type: 'Mieszkanie',
      price: 145000,
      size: 85,
      score: 'A+',
      source: 'Sareb',
      note: 'Bardzo dobra lokalizacja, blisko metra',
      status: 'active',
      addedDate: '2024-12-01'
    },
    {
      id: '2',
      title: 'Dom jednorodzinny, Valencia',
      location: 'Valencia, Comunidad Valenciana',
      type: 'Dom',
      price: 89000,
      size: 120,
      score: 'B',
      source: 'Haya',
      note: 'Do remontu, ale duży ogród',
      status: 'active',
      addedDate: '2024-11-28'
    },
    {
      id: '3',
      title: 'Finca rústica, Alicante',
      location: 'Alicante, Comunidad Valenciana',
      type: 'Finca',
      price: 245000,
      size: 12000,
      score: 'A',
      source: 'BOE',
      note: 'Potencjał na agroturystykę',
      status: 'watching',
      addedDate: '2024-11-25'
    }
  ])

  const [filterStatus, setFilterStatus] = useState('all')
  const [filterType, setFilterType] = useState('all')
  const [filterScore, setFilterScore] = useState('all')

  const getScoreColor = (score: string) => {
    switch (score) {
      case 'A+':
      case 'A':
        return 'bg-emerald-500/20 text-emerald-400'
      case 'B':
        return 'bg-yellow-500/20 text-yellow-400'
      case 'C':
        return 'bg-orange-500/20 text-orange-400'
      case 'D':
        return 'bg-red-500/20 text-red-400'
      default:
        return 'bg-slate-500/20 text-slate-400'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-emerald-500/20 text-emerald-400'
      case 'watching':
        return 'bg-blue-500/20 text-blue-400'
      case 'considering':
        return 'bg-yellow-500/20 text-yellow-400'
      case 'rejected':
        return 'bg-red-500/20 text-red-400'
      default:
        return 'bg-slate-500/20 text-slate-400'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active':
        return 'Aktywnie śledzę'
      case 'watching':
        return 'Obserwuję'
      case 'considering':
        return 'Rozważam'
      case 'rejected':
        return 'Odrzucone'
      default:
        return status
    }
  }

  const filteredFavorites = favorites.filter(favorite => {
    if (filterStatus !== 'all' && favorite.status !== filterStatus) return false
    if (filterType !== 'all' && favorite.type !== filterType) return false
    if (filterScore !== 'all' && !favorite.score.includes(filterScore)) return false
    return true
  })

  const removeFavorite = (id: string) => {
    setFavorites(favorites.filter(fav => fav.id !== id))
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Ulubione oferty</h1>
          <p className="text-slate-400">Zarządzaj zapisanymi nieruchomościami</p>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-sm text-slate-400">Łącznie:</span>
          <span className="text-lg font-semibold text-emerald-400">
            {favorites.length}
          </span>
        </div>
      </div>

      {/* Filters */}
      <div className="card p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Status
            </label>
            <select 
              className="input w-full"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">Wszystkie</option>
              <option value="active">Aktywnie śledzę</option>
              <option value="watching">Obserwuję</option>
              <option value="considering">Rozważam</option>
              <option value="rejected">Odrzucone</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Typ nieruchomości
            </label>
            <select 
              className="input w-full"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="all">Wszystkie</option>
              <option value="Mieszkanie">Mieszkanie</option>
              <option value="Dom">Dom</option>
              <option value="Finca">Finca</option>
              <option value="Komercyjne">Komercyjne</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Scoring
            </label>
            <select 
              className="input w-full"
              value={filterScore}
              onChange={(e) => setFilterScore(e.target.value)}
            >
              <option value="all">Wszystkie</option>
              <option value="A+">A+</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </div>
          
          <div className="flex items-end">
            <button 
              onClick={() => {
                setFilterStatus('all')
                setFilterType('all')
                setFilterScore('all')
              }}
              className="btn-secondary w-full"
            >
              Wyczyść filtry
            </button>
          </div>
        </div>
      </div>

      {/* Favorites grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFavorites.map((favorite) => (
          <div key={favorite.id} className="card p-6 hover:border-slate-700 transition-colors">
            {/* Property image placeholder */}
            <div className="bg-slate-800 rounded-lg h-48 mb-4 flex items-center justify-center">
              <HomeIcon className="w-16 h-16 text-slate-600" />
            </div>
            
            {/* Property info */}
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <Link 
                    href={`/app/auctions/${favorite.id}`}
                    className="text-lg font-semibold text-slate-50 hover:text-emerald-400 transition-colors"
                  >
                    {favorite.title}
                  </Link>
                  <div className="flex items-center text-sm text-slate-400 mt-1">
                    <MapPinIcon className="w-4 h-4 mr-1" />
                    {favorite.location}
                  </div>
                </div>
                <div className="flex items-center gap-1 ml-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getScoreColor(favorite.score)}`}>
                    {favorite.score}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-emerald-400">
                    €{favorite.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-slate-400">
                    {favorite.size} m² • {favorite.type}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-400">{favorite.source}</p>
                  <p className="text-xs text-slate-500">
                    Dodano: {new Date(favorite.addedDate).toLocaleDateString('pl-PL')}
                  </p>
                </div>
              </div>
              
              {/* Status and note */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <TagIcon className="w-4 h-4 text-slate-400" />
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(favorite.status)}`}>
                    {getStatusLabel(favorite.status)}
                  </span>
                </div>
                
                {favorite.note && (
                  <div className="bg-slate-800 rounded-lg p-3">
                    <p className="text-sm text-slate-300">{favorite.note}</p>
                  </div>
                )}
              </div>
              
              {/* Actions */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <button 
                    className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                    title="Edytuj notatkę"
                  >
                    <PencilIcon className="w-4 h-4 text-blue-400" />
                  </button>
                  <button 
                    className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                    title="Zobacz szczegóły"
                  >
                    <EyeIcon className="w-4 h-4 text-emerald-400" />
                  </button>
                </div>
                
                <button 
                  onClick={() => removeFavorite(favorite.id)}
                  className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                  title="Usuń z ulubionych"
                >
                  <TrashIcon className="w-4 h-4 text-red-400" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filteredFavorites.length === 0 && (
        <div className="card p-12 text-center">
          <StarIcon className="w-16 h-16 text-slate-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            {favorites.length === 0 ? 'Brak ulubionych' : 'Brak wyników'}
          </h3>
          <p className="text-slate-400 mb-6">
            {favorites.length === 0 
              ? 'Nie masz jeszcze żadnych ulubionych ofert. Dodaj nieruchomości do obserwowanych, aby mieć do nich szybki dostęp.'
              : 'Nie znaleziono nieruchomości spełniających wybrane kryteria.'
            }
          </p>
          {favorites.length === 0 && (
            <Link href="/app/auctions" className="btn-primary">
              Przeglądaj aukcje
            </Link>
          )}
        </div>
      )}
    </div>
  )
}
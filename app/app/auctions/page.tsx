'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  FunnelIcon,
  MagnifyingGlassIcon,
  StarIcon,
  MapPinIcon,
  CalendarIcon,
  BanknotesIcon
} from '@heroicons/react/24/outline'

export default function AuctionsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({
    country: 'ES',
    province: '',
    type: '',
    minPrice: '',
    maxPrice: '',
    minSize: '',
    maxSize: '',
    score: '',
    risks: []
  })

  // Mock auction data
  const auctions = [
    {
      id: '1',
      title: 'Mieszkanie 3-pokojowe, Barcelona',
      source: 'Sareb',
      location: 'Barcelona, Cataluña',
      type: 'Mieszkanie',
      price: 145000,
      size: 85,
      auctionDate: '2024-12-15',
      score: 'A+',
      risks: [],
      image: null
    },
    {
      id: '2',
      title: 'Dom jednorodzinny, Valencia',
      source: 'Haya',
      location: 'Valencia, Comunidad Valenciana',
      type: 'Dom',
      price: 89000,
      size: 120,
      auctionDate: '2024-12-18',
      score: 'B',
      risks: ['Brak zdjęć'],
      image: null
    },
    {
      id: '3',
      title: 'Finca rústica, Alicante',
      source: 'BOE',
      location: 'Alicante, Comunidad Valenciana',
      type: 'Finca',
      price: 245000,
      size: 12000,
      auctionDate: '2024-12-20',
      score: 'A',
      risks: [],
      image: null
    },
    {
      id: '4',
      title: 'Mieszkanie 2-pokojowe, Madrid',
      source: 'Solvia',
      location: 'Madrid, Comunidad de Madrid',
      type: 'Mieszkanie',
      price: 198000,
      size: 65,
      auctionDate: '2024-12-22',
      score: 'A+',
      risks: [],
      image: null
    },
    {
      id: '5',
      title: 'Local comercial, Sevilla',
      source: 'Servihabitat',
      location: 'Sevilla, Andalucía',
      type: 'Komercyjne',
      price: 156000,
      size: 200,
      auctionDate: '2024-12-25',
      score: 'C',
      risks: ['Ryzyko najemcy', 'Problemy prawne'],
      image: null
    }
  ]

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

  return (
    <div>
      {/* Header with search and filters */}
      <div className="mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
          <h1 className="text-2xl font-bold">Aukcje live</h1>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Miasto, kod pocztowy, ID aukcji..."
                className="input pl-10 w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <button className="btn-secondary flex items-center">
              <FunnelIcon className="w-5 h-5 mr-2" />
              Filtry
            </button>
            
            <button className="btn-primary">
              Zapisz filtr jako alert
            </button>
          </div>
        </div>
        
        {/* Filter bar */}
        <div className="card p-4">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
            <select 
              className="input"
              value={filters.type}
              onChange={(e) => setFilters({...filters, type: e.target.value})}
            >
              <option value="">Typ nieruchomości</option>
              <option value="mieszkanie">Mieszkanie</option>
              <option value="dom">Dom</option>
              <option value="finca">Finca</option>
              <option value="komercyjne">Komercyjne</option>
            </select>
            
            <input
              type="number"
              placeholder="Cena min"
              className="input"
              value={filters.minPrice}
              onChange={(e) => setFilters({...filters, minPrice: e.target.value})}
            />
            
            <input
              type="number"
              placeholder="Cena max"
              className="input"
              value={filters.maxPrice}
              onChange={(e) => setFilters({...filters, maxPrice: e.target.value})}
            />
            
            <input
              type="number"
              placeholder="Metraż min"
              className="input"
              value={filters.minSize}
              onChange={(e) => setFilters({...filters, minSize: e.target.value})}
            />
            
            <select 
              className="input"
              value={filters.score}
              onChange={(e) => setFilters({...filters, score: e.target.value})}
            >
              <option value="">Scoring</option>
              <option value="A+">A+</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
            
            <button className="btn-secondary">
              Wyczyść filtry
            </button>
          </div>
        </div>
      </div>

      {/* Auctions table */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Źródło
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Nieruchomość
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Cena
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Data licytacji
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Score
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Akcje
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {auctions.map((auction) => (
                <tr key={auction.id} className="hover:bg-slate-800/50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-emerald-400">
                      {auction.source}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <Link 
                        href={`/app/auctions/${auction.id}`}
                        className="text-sm font-medium text-slate-50 hover:text-emerald-400"
                      >
                        {auction.title}
                      </Link>
                      <div className="text-sm text-slate-400 flex items-center mt-1">
                        <MapPinIcon className="w-4 h-4 mr-1" />
                        {auction.location}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-emerald-400">
                      €{auction.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-slate-400">
                      {auction.size} m²
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-slate-300 flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      {new Date(auction.auctionDate).toLocaleDateString('pl-PL')}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getScoreColor(auction.score)}`}>
                      {auction.score}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button className="text-slate-400 hover:text-yellow-400">
                        <StarIcon className="w-5 h-5" />
                      </button>
                      <Link 
                        href={`/app/auctions/${auction.id}`}
                        className="text-emerald-400 hover:text-emerald-300"
                      >
                        Szczegóły
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Pagination */}
      <div className="mt-6 flex items-center justify-between">
        <div className="text-sm text-slate-400">
          Pokazano 1-5 z 247 wyników
        </div>
        <div className="flex space-x-2">
          <button className="btn-secondary px-3 py-1 text-sm">Poprzednia</button>
          <button className="btn-primary px-3 py-1 text-sm">1</button>
          <button className="btn-secondary px-3 py-1 text-sm">2</button>
          <button className="btn-secondary px-3 py-1 text-sm">3</button>
          <button className="btn-secondary px-3 py-1 text-sm">Następna</button>
        </div>
      </div>
    </div>
  )
}
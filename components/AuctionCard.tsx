import { useState } from 'react';
import { 
  Heart, 
  MapPin, 
  Home, 
  DollarSign, 
  Star, 
  Calendar,
  TrendingUp,
  TrendingDown,
  Eye,
  Building,
  Bed,
  Bath
} from 'lucide-react';

interface Auction {
  id: string;
  title: string;
  location: string;
  price: number;
  priceChange: number;
  aiScore: 'A' | 'B' | 'C' | 'D';
  endDate: string;
  image: string;
  type: 'house' | 'apartment' | 'commercial';
  area: number;
  rooms: number;
  bathrooms?: number;
  views?: number;
}

interface AuctionCardProps {
  auction: Auction;
  onFavorite: (id: string) => void;
  onView: (id: string) => void;
  showDetails?: boolean;
}

export default function AuctionCard({ 
  auction, 
  onFavorite, 
  onView, 
  showDetails = false 
}: AuctionCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    onFavorite(auction.id);
  };

  const getScoreColor = (score: string) => {
    switch (score) {
      case 'A': return 'text-green-400 bg-green-400/20';
      case 'B': return 'text-yellow-400 bg-yellow-400/20';
      case 'C': return 'text-orange-400 bg-orange-400/20';
      case 'D': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'house': return Home;
      case 'apartment': return Building;
      case 'commercial': return Home;
      default: return Home;
    }
  };

  const TypeIcon = getTypeIcon(auction.type);

  return (
    <div 
      className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-300 cursor-pointer group"
      onClick={() => onView(auction.id)}
    >
      {/* Image Section */}
      <div className="relative">
        <img
          src={auction.image}
          alt={auction.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay badges */}
        <div className="absolute top-3 left-3 flex space-x-2">
          <div className={`px-2 py-1 rounded-full text-xs font-bold ${getScoreColor(auction.aiScore)}`}>
            {auction.aiScore}
          </div>
          <div className="bg-gray-900/80 text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1">
            <TypeIcon className="w-3 h-3" />
            <span className="capitalize">{auction.type}</span>
          </div>
        </div>
        
        {/* Favorite button */}
        <button
          onClick={handleFavorite}
          className={`absolute top-3 right-3 p-2 rounded-lg transition-colors ${
            isFavorite 
              ? 'bg-pink-600 text-white' 
              : 'bg-gray-900/80 text-gray-300 hover:bg-pink-600 hover:text-white'
          }`}
        >
          <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
        </button>

        {/* Views counter */}
        {auction.views && (
          <div className="absolute bottom-3 left-3 bg-gray-900/80 text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1">
            <Eye className="w-3 h-3" />
            <span>{auction.views}</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title and Location */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-white mb-1 line-clamp-2 hover:text-purple-400 transition-colors">
            {auction.title}
          </h3>
          <div className="flex items-center space-x-1 text-sm text-gray-400">
            <MapPin className="w-4 h-4" />
            <span>{auction.location}</span>
          </div>
        </div>

        {/* Price Section */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-2xl font-bold text-white">
              €{auction.price.toLocaleString()}
            </div>
            <div className="text-sm">
              {auction.priceChange > 0 ? (
                <span className="text-green-400 flex items-center space-x-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>+{auction.priceChange}%</span>
                </span>
              ) : (
                <span className="text-red-400 flex items-center space-x-1">
                  <TrendingDown className="w-3 h-3" />
                  <span>{auction.priceChange}%</span>
                </span>
              )}
            </div>
          </div>
          
          <div className="text-right text-sm text-gray-400">
            <div className="flex items-center space-x-1 mb-1">
              <Calendar className="w-4 h-4" />
              <span>{auction.endDate}</span>
            </div>
            <div>{auction.area} m²</div>
          </div>
        </div>

        {/* Property Details */}
        {showDetails && (
          <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
            <div className="flex items-center space-x-1">
              <Bed className="w-4 h-4" />
              <span>{auction.rooms} pokoje</span>
            </div>
            {auction.bathrooms && (
              <div className="flex items-center space-x-1">
                <Bath className="w-4 h-4" />
                <span>{auction.bathrooms} łazienki</span>
              </div>
            )}
            <div className="flex items-center space-x-1">
              <DollarSign className="w-4 h-4" />
              <span>€{(auction.price / auction.area).toFixed(0)}/m²</span>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onView(auction.id);
            }}
            className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-colors"
          >
            Zobacz szczegóły
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              // Add to compare functionality
            }}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm font-semibold transition-colors"
          >
            Porównaj
          </button>
        </div>
      </div>
    </div>
  );
}
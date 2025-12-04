import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ElementType;
  trend?: number;
  color?: 'blue' | 'purple' | 'green' | 'yellow' | 'pink';
}

const colorClasses = {
  blue: 'bg-blue-500/20 text-blue-400',
  purple: 'bg-purple-500/20 text-purple-400',
  green: 'bg-green-500/20 text-green-400',
  yellow: 'bg-yellow-500/20 text-yellow-400',
  pink: 'bg-pink-500/20 text-pink-400'
};

export default function StatCard({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  color = 'blue' 
}: StatCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
        {trend !== undefined && (
          <div className={`flex items-center space-x-1 text-sm ${
            trend > 0 ? 'text-green-400' : 'text-red-400'
          }`}>
            {trend > 0 ? (
              <TrendingUp className="w-4 h-4" />
            ) : (
              <TrendingDown className="w-4 h-4" />
            )}
            <span>{Math.abs(trend)}%</span>
          </div>
        )}
      </div>
      
      <div>
        <div className="text-2xl font-bold text-white mb-1">{value}</div>
        <div className="text-sm text-gray-400">{title}</div>
      </div>
    </div>
  );
}
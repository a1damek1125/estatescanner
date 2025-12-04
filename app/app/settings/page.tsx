'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  User, 
  Bell, 
  CreditCard, 
  Shield, 
  Key, 
  Mail, 
  Phone, 
  Building,
  MapPin,
  Save,
  Camera,
  Trash2
} from 'lucide-react';
import Sidebar from '@/components/Sidebar';

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  company: string;
  address: string;
  city: string;
  country: string;
  avatar: string;
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'notifications' | 'billing' | 'security'>('profile');
  const [profile, setProfile] = useState<UserProfile>({
    name: 'Jan Kowalski',
    email: 'jan.kowalski@example.com',
    phone: '+48 123 456 789',
    company: 'Kowalski Investments',
    address: 'ul. Inwestycyjna 123',
    city: 'Warszawa',
    country: 'Polska',
    avatar: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  const handleSave = async () => {
    setSaving(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSaving(false);
    setIsEditing(false);
  };

  const tabs = [
    { key: 'profile', label: 'Profil', icon: User },
    { key: 'notifications', label: 'Powiadomienia', icon: Bell },
    { key: 'billing', label: 'Płatności', icon: CreditCard },
    { key: 'security', label: 'Bezpieczeństwo', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex">
      <Sidebar />
      
      <div className="flex-1 ml-64 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Ustawienia</h1>
          <p className="text-gray-400">Zarządzaj swoim kontem i preferencjami</p>
        </div>

        <div className="bg-gray-800 rounded-xl">
          {/* Navigation Tabs */}
          <div className="border-b border-gray-700">
            <div className="flex">
              {tabs.map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as any)}
                  className={`flex items-center space-x-2 px-6 py-4 transition-colors border-b-2 ${
                    activeTab === key
                      ? 'text-purple-400 border-purple-400'
                      : 'text-gray-400 border-transparent hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'profile' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-white mb-6">Informacje podstawowe</h2>
                  
                  {/* Avatar */}
                  <div className="flex items-center space-x-6 mb-8">
                    <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center">
                      {profile.avatar ? (
                        <img src={profile.avatar} alt="Avatar" className="w-full h-full rounded-full object-cover" />
                      ) : (
                        <User className="w-12 h-12 text-gray-400" />
                      )}
                    </div>
                    <div>
                      <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
                        <Camera className="w-4 h-4" />
                        <span>Zmień zdjęcie</span>
                      </button>
                      <p className="text-sm text-gray-400 mt-2">PNG, JPG do 5MB</p>
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Imię i nazwisko</label>
                      <input
                        type="text"
                        value={profile.name}
                        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                        disabled={!isEditing}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        value={profile.email}
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                        disabled={!isEditing}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Telefon</label>
                      <input
                        type="tel"
                        value={profile.phone}
                        onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                        disabled={!isEditing}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Firma</label>
                      <input
                        type="text"
                        value={profile.company}
                        onChange={(e) => setProfile({ ...profile, company: e.target.value })}
                        disabled={!isEditing}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Adres</label>
                      <input
                        type="text"
                        value={profile.address}
                        onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                        disabled={!isEditing}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Miasto</label>
                      <input
                        type="text"
                        value={profile.city}
                        onChange={(e) => setProfile({ ...profile, city: e.target.value })}
                        disabled={!isEditing}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
                      />
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4 mt-8">
                    {isEditing ? (
                      <>
                        <button
                          onClick={handleSave}
                          disabled={saving}
                          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors flex items-center space-x-2 disabled:opacity-50"
                        >
                          <Save className="w-4 h-4" />
                          <span>{saving ? 'Zapisywanie...' : 'Zapisz zmiany'}</span>
                        </button>
                        <button
                          onClick={() => {
                            setIsEditing(false);
                            // Reset form
                          }}
                          className="bg-gray-600 hover:bg-gray-500 text-white px-6 py-2 rounded-lg transition-colors"
                        >
                          Anuluj
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => setIsEditing(true)}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors"
                      >
                        Edytuj profil
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-white mb-6">Preferencje powiadomień</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                      <div>
                        <h3 className="text-white font-medium">Nowe aukcje</h3>
                        <p className="text-sm text-gray-400">Powiadomienia o nowych nieruchomościach</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                      <div>
                        <h3 className="text-white font-medium">Zmiany cen</h3>
                        <p className="text-sm text-gray-400">Powiadomienia o zmianach cen w ulubionych</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                      <div>
                        <h3 className="text-white font-medium">Przypomnienia o końcu aukcji</h3>
                        <p className="text-sm text-gray-400">Powiadomienia 24h przed końcem aukcji</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                      <div>
                        <h3 className="text-white font-medium">Newsletter</h3>
                        <p className="text-sm text-gray-400">Cotygodniowy przegląd rynku nieruchomości</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'billing' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-white mb-6">Plan i płatności</h2>
                  
                  <div className="bg-gray-700 rounded-lg p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white">Plan Premium</h3>
                        <p className="text-gray-400">Nieograniczony dostęp do wszystkich funkcji</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">€49<span className="text-sm text-gray-400">/mies</span></div>
                        <div className="text-sm text-green-400">Aktywny</div>
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
                        Zarządzaj planem
                      </button>
                      <button className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-lg transition-colors">
                        Historia płatności
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-gray-700 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Metoda płatności</h3>
                    <div className="flex items-center justify-between p-4 bg-gray-600 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <CreditCard className="w-6 h-6 text-gray-400" />
                        <div>
                          <div className="text-white">•••• •••• •••• 4242</div>
                          <div className="text-sm text-gray-400">Wygasa 12/25</div>
                        </div>
                      </div>
                      <button className="text-purple-400 hover:text-purple-300 transition-colors">
                        Zmień
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-white mb-6">Bezpieczeństwo konta</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-700 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Zmiana hasła</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Aktualne hasło</label>
                          <input
                            type="password"
                            className="w-full bg-gray-600 border border-gray-500 rounded-lg text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Nowe hasło</label>
                          <input
                            type="password"
                            className="w-full bg-gray-600 border border-gray-500 rounded-lg text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Potwierdź nowe hasło</label>
                          <input
                            type="password"
                            className="w-full bg-gray-600 border border-gray-500 rounded-lg text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                        </div>
                        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors">
                          Zmień hasło
                        </button>
                      </div>
                    </div>
                    
                    <div className="bg-gray-700 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Uwierzytelnianie dwuskładnikowe</h3>
                      <p className="text-gray-400 mb-4">Dodaj dodatkową warstwę bezpieczeństwa do swojego konta</p>
                      <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors">
                        Włącz 2FA
                      </button>
                    </div>
                    
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-red-400 mb-4">Usuń konto</h3>
                      <p className="text-gray-300 mb-4">Ta akcja jest nieodwracalna. Wszystkie Twoje dane zostaną usunięte.</p>
                      <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors">
                        Usuń konto
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
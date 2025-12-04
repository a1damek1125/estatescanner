import { NextRequest, NextResponse } from 'next/server';

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
  bathrooms: number;
  parking: boolean;
  description: string;
  features: string[];
  contact: {
    phone: string;
    email: string;
  };
}

const mockAuction: Auction = {
  id: '1',
  title: 'Luksusowy apartament w centrum Madrytu',
  location: 'Calle Mayor 123, Madrid, Centro',
  price: 245000,
  priceChange: 5.2,
  aiScore: 'A',
  endDate: '2024-12-15',
  image: '/api/placeholder/800/600',
  type: 'apartment',
  area: 85,
  rooms: 3,
  bathrooms: 2,
  parking: true,
  description: 'Elegancki apartament w samym sercu Madrytu, zaledwie kilka kroków od Plaza Mayor. Nieruchomość została całkowicie odnowiona w 2023 roku, zachowując historyczny charakter budynku przy jednoczesnym wprowadzeniu nowoczesnych udogodnień.',
  features: [
    'Całkowicie odnowiony w 2023',
    'Klimatyzacja i ogrzewanie',
    'Wysokie sufity (3.2m)',
    'Okna z podwójnym szkłem',
    'Drewniane podłogi',
    'W pełni wyposażona kuchnia',
    'Balkon z widokiem na miasto',
    'Miejsce parkingowe w garażu'
  ],
  contact: {
    phone: '+34 612 345 678',
    email: 'info@example.com'
  }
};

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  
  // In real app, fetch from database
  if (id !== '1') {
    return NextResponse.json({
      success: false,
      message: 'Auction not found'
    }, { status: 404 });
  }

  return NextResponse.json({
    success: true,
    data: mockAuction
  });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const body = await request.json();
  
  // In real app, update in database
  return NextResponse.json({
    success: true,
    message: 'Auction updated successfully',
    data: { id, ...body }
  });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  
  // In real app, delete from database
  return NextResponse.json({
    success: true,
    message: 'Auction deleted successfully'
  });
}
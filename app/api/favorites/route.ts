import { NextRequest, NextResponse } from 'next/server'

// Mock favorites data
const mockFavorites = [
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
  }
]

export async function GET() {
  return NextResponse.json({
    favorites: mockFavorites,
    total: mockFavorites.length
  })
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  
  // Here you would normally save the favorite to a database
  console.log('Adding to favorites:', body)
  
  const newFavorite = {
    id: Date.now().toString(),
    ...body,
    addedDate: new Date().toISOString()
  }
  
  return NextResponse.json({
    success: true,
    message: 'Added to favorites successfully',
    data: newFavorite
  })
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  
  // Here you would normally delete the favorite from a database
  console.log('Removing from favorites:', id)
  
  return NextResponse.json({
    success: true,
    message: 'Removed from favorites successfully'
  })
}
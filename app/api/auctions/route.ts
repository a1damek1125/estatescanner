import { NextRequest, NextResponse } from 'next/server'

// Mock auction data
const mockAuctions = [
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
  }
]

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const country = searchParams.get('country')
  const province = searchParams.get('province')
  const type = searchParams.get('type')
  const minPrice = searchParams.get('minPrice')
  const maxPrice = searchParams.get('maxPrice')
  const score = searchParams.get('score')

  // Filter auctions based on query parameters
  let filteredAuctions = [...mockAuctions]

  if (country) {
    filteredAuctions = filteredAuctions.filter(auction => 
      auction.location.toLowerCase().includes(country.toLowerCase())
    )
  }

  if (type) {
    filteredAuctions = filteredAuctions.filter(auction => 
      auction.type.toLowerCase().includes(type.toLowerCase())
    )
  }

  if (minPrice) {
    filteredAuctions = filteredAuctions.filter(auction => 
      auction.price >= parseInt(minPrice)
    )
  }

  if (maxPrice) {
    filteredAuctions = filteredAuctions.filter(auction => 
      auction.price <= parseInt(maxPrice)
    )
  }

  if (score) {
    const scores = score.split(',')
    filteredAuctions = filteredAuctions.filter(auction => 
      scores.includes(auction.score)
    )
  }

  return NextResponse.json({
    auctions: filteredAuctions,
    total: filteredAuctions.length,
    page: 1,
    perPage: 10
  })
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  
  // Here you would normally save the auction to a database
  console.log('Creating new auction:', body)
  
  return NextResponse.json({
    success: true,
    message: 'Auction created successfully',
    data: body
  })
}
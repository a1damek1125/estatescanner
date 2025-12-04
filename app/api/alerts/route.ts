import { NextRequest, NextResponse } from 'next/server'

// Mock alerts data
const mockAlerts = [
  {
    id: '1',
    name: 'Mieszkania w Barcelonie do 200k',
    filters: {
      location: 'Barcelona',
      type: 'Mieszkanie',
      maxPrice: 200000,
      score: 'A,B'
    },
    channels: ['email'],
    frequency: 'realtime',
    status: 'active',
    created: '2024-11-15',
    matches: 3
  },
  {
    id: '2',
    name: 'Domy w Valencji - okazje',
    filters: {
      location: 'Valencia',
      type: 'Dom',
      maxPrice: 150000,
      score: 'A+'
    },
    channels: ['email', 'sms'],
    frequency: 'daily',
    status: 'active',
    created: '2024-11-10',
    matches: 1
  }
]

export async function GET() {
  return NextResponse.json({
    alerts: mockAlerts,
    total: mockAlerts.length
  })
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  
  // Here you would normally save the alert to a database
  console.log('Creating new alert:', body)
  
  const newAlert = {
    id: Date.now().toString(),
    ...body,
    created: new Date().toISOString(),
    matches: 0
  }
  
  return NextResponse.json({
    success: true,
    message: 'Alert created successfully',
    data: newAlert
  })
}

export async function PUT(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  const body = await request.json()
  
  // Here you would normally update the alert in a database
  console.log('Updating alert:', id, body)
  
  return NextResponse.json({
    success: true,
    message: 'Alert updated successfully',
    data: { id, ...body }
  })
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  
  // Here you would normally delete the alert from a database
  console.log('Deleting alert:', id)
  
  return NextResponse.json({
    success: true,
    message: 'Alert deleted successfully'
  })
}
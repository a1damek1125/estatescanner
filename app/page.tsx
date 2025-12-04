import { Hero } from '@/components/Hero'
import { HowItWorks } from '@/components/HowItWorks'
import { DataSources } from '@/components/DataSources'
import { ForWhom } from '@/components/ForWhom'
import { Features } from '@/components/Features'
import { SampleScreen } from '@/components/SampleScreen'
import { PricingTeaser } from '@/components/PricingTeaser'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <HowItWorks />
      <DataSources />
      <ForWhom />
      <Features />
      <SampleScreen />
      <PricingTeaser />
      <Footer />
    </main>
  )
}
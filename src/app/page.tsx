import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Curriculum from '@/components/Curriculum'
import Instructor from '@/components/Instructor'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Curriculum />
      <Instructor />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
} 
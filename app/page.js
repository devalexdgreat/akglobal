import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import TrackCard from '@/components/TrackCard'
import Image from 'next/image'

export default function Home() {

  return (
    <main className="">
      <Navbar />
      <TrackCard />
      <Footer />
    </main>
  )
}

import Cards from './_cpn/cards'
import Welcome from './_cpn/welcome'
import Bottom from '@/assets/home/bottom.png'

export default function Home() {
  return (
    <main
      className="flex-center flex-col gap-32 pt-32 pb-10 px-10 xl:p-32 h-full"
      style={{ background: `url(${Bottom.src}) no-repeat bottom/contain` }}
    >
      {/* welcome */}
      <Welcome />

      {/* cards */}
      <Cards />
    </main>
  )
}

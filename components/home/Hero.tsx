import HeroCarousel from './HeroCarousel'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          We are changing the way people shop
        </h1>
        <p className="mt-8 max-x-xl text-lg leading-8 text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod enim
          quidem repellendus quia, tempora rerum quam porro non minus? At,
          officiis eius libero ipsam quaerat sunt laudantium eligendi nihil
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="/products">Our Products</Link>
        </Button>
      </div>
      <div>
        <HeroCarousel />
      </div>
    </section>
  )
}
export default Hero

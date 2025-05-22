import Image from 'next/image'
import store from '@/public/images/hero3.jpg'

const AboutPage = () => {
  return (
    <section>
      <h1 className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text-6xl">
        About
        <span className="bg-primary py-2 px-4 rounded-lg tracking-widest text-white">
          Mindful Merchant
        </span>
      </h1>
      <p className="mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground">
        “We don’t need a handful of people doing zero waste perfectly. We need
        millions of people doing it imperfectly.” -Anne Marie Bonneau ​ At
        Mindful Merchant we celebrate whatever sustainable habits fit your
        lifestyle. Small choices matter, so we aim to offer a variety of
        everyday essentials that can fit seamlessly into anyone's routine.
        Low-waste living doesn't have to be all-or-nothing - something as simple
        as switching to a bamboo toothbrush or reusable water bottle makes a
        difference. ​ And we don't see this as a new idea. Choosing well crafted
        products you can reuse rather than disposable single-use items is
        timeless. We see a connection between modern low-waste practices and
        decades-old values and methods. Our goal is to share that connection
        with our community.
      </p>

      <div className="w-screen h-[50vh] flex gap-[20px]">
        <Image
          src={store}
          className="w-1/2 h-full object-cover"
          alt="Image 1"
        />
        <Image
          src={store}
          className="w-1/2 h-full object-cover"
          alt="Image 2"
        />
      </div>
    </section>
  )
}
export default AboutPage

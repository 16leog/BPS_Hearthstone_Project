import Image from 'next/image'
import homepageLogo from 'public/homepage_logo 1_2023-07-21/homepage_logo 1@3x.webp'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-homepageBackground">
      <div className="">
        <Image
          src={homepageLogo}
          alt={'hearthstone'}
          width={540}
          height={250}
        ></Image>
      </div>
      
          </main>
  )
}

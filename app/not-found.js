import Image from 'next/image'
import Link from 'next/link'
import BackButton from './components/BackButton';
import GenericCards from './components/GenericCards';

export default function Error404() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-dark-purple">
      
      <BackButton/>

      <div className="flex-grow flex flex-col justify-center mb-8 relative">
        <div className="absolute inset-0 before:absolute after:absolute after:h-[300px] after:w-[300px] after:translate-x-1/5 after:bg-gradient-conic after:from-yellow-50 after:via-purple-100 after:blur-2xl after:content-[''] z-[-1] whitespace-nowrap"></div>
        <div className="flex items-center font-recoleta text-7xl justify-center z-10 relative">
          <span className="mr-4">Uh oh...</span>
          <Image src="/images/sheep_logo.png" alt="Sheep Logo" width={110} height={110} />
        </div>
        <div className="font-recoleta text-2xl whitespace-nowrap">
            We couldn't find the page you're looking for :(
        </div>
      </div>
      
      <GenericCards></GenericCards>

    </main>
  )
  }
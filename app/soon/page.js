import Image from 'next/image'
import Link from 'next/link'
import BackButton from '../components/BackButton';
import GenericCards from '../components/GenericCards';
import Main from '../components/Main';

export default function Soon() {
    return (
        <Main>
          
          <BackButton/>
    
          <div className="flex-grow flex flex-col justify-center mb-8 relative">
            <div className="absolute inset-0 before:absolute after:absolute after:h-[300px] after:w-[300px] after:translate-x-1/5 after:bg-gradient-conic after:from-yellow-50 after:via-purple-100 after:blur-2xl after:content-[''] z-[-1] whitespace-nowrap"></div>
            <div className="flex items-center font-recoleta text-7xl justify-center z-10 relative">
              <span className="mr-4">Coming soon</span>
            </div>
            <div className="font-recoleta text-2xl whitespace-nowrap">
                We're not done with this page just yet! 🐑
            </div>
          </div>
          
    
          <GenericCards></GenericCards>
          
        </Main>
      )
}

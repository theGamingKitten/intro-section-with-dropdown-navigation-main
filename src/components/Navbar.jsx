import snapIcon from '../images/logo.svg';
import Links from './Links';
import MobileMenu from './MobileMenu';
import { useMediaQuery } from 'react-responsive';

export default function Navbar() {
  const isMobile = useMediaQuery({
    query: '(max-width: 426px)'
  })
  return (
    <>
    <div className='bg-almost-white top-0 left-0 w-full fixed flex flex-row items-center justify-between p-5 md:px-8'>
      <img src={snapIcon} alt="Snap Icon" className='mr-16'/>
      
      {isMobile 
      ? <MobileMenu />         
      : <Links />
      }
    </div>
    </>
  )
}
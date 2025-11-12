import DesktopNavBar from './DesktopNavBar'
import useMediaQuery from './useMediaQuery'
import MobileNavBar from './MobileNavBar';
export default function NavBar() {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return isDesktop? <DesktopNavBar/> : <MobileNavBar/>; 
}

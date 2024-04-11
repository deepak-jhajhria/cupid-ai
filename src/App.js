import './App.css';
import AiVerification from './components/AiVerification';
import BackToTop from './components/BackToTop';
import Faq from './components/Faq';
import FaqAndFooter from './components/FaqAndFooter';
import Footer from './components/Footer';
import Header from './components/Header';
import IdentityHub from './components/IndentityHub';
import Preloader from './components/Preloader';
import PricingSec from './components/PricingSec';
import ServiceSec from './components/ServiceSec';
import TrustCompanies from './components/TrustCompanies';
import { usePreloader } from './components/common/Hooks';

function App() {
  const isLoading = usePreloader();
  return (
    <div className="mx-auto bg-black-primary">
      <div className='max-w-[1920px] mx-auto'>
        {
          isLoading ? (<Preloader />) : (<>
            <Header />
            <TrustCompanies />
            <AiVerification />
            <ServiceSec />
            <PricingSec />
            <FaqAndFooter />
            <BackToTop /></>)
        }
      </div>

    </div >
  )

}

export default App
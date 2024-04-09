import './App.css';
import AiVerification from './components/AiVerification';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Header from './components/Header';
import IdentityHub from './components/IndentityHub';
import PricingSec from './components/PricingSec';
import ServiceSec from './components/ServiceSec';
import TrustCompanies from './components/TrustCompanies';

function App() {
  return (
    <div className="bg-black-primary">
      <Header />
      <TrustCompanies />
      <AiVerification />
      <ServiceSec />
      <PricingSec />
      <Faq />
      <IdentityHub />
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import AiVerification from './components/AiVerification';
import Header from './components/Header';
import TrustCompanies from './components/TrustCompanies';

function App() {
  return (
    <div className="bg-black-primary">
      <Header />
      <TrustCompanies />
      <AiVerification />
    </div>
  );
}

export default App;

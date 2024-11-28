import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Guides from './pages/Guides';
import Inventory from './pages/Inventory';
import History from './pages/History';
import Contact from './pages/Contact';
import VirtualLabs from './pages/VirtualLabs';
import ScienceFair from './pages/ScienceFair';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/history" element={<History />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/virtual-labs" element={<VirtualLabs />} />
            <Route path="/science-fair" element={<ScienceFair />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
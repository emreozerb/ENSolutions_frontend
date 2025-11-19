import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import FotoVideoPage from './pages/services/FotoVideoPage';
import WebDesignPage from './pages/services/WebDesignPage';
import BrandingPage from './pages/services/BrandingPage';
import SocialMediaPage from './pages/services/SocialMediaPage';
import AllInOnePage from './pages/services/AllInOnePage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/foto-videografie" element={<FotoVideoPage />} />
          <Route path="/services/webdesign" element={<WebDesignPage />} />
          <Route path="/services/branding" element={<BrandingPage />} />
          <Route path="/services/sociaal-media" element={<SocialMediaPage />} />
          <Route path="/services/all-in-one" element={<AllInOnePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

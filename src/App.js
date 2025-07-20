import { Routes, Route, useLocation } from 'react-router-dom'; 
import './App.css';
import HomeHeader from './Pages/Home/HomeHeader';
import Gallery from './Pages/Gallery/Gallery';
import Packages from './Pages/Packages/Packages';
import OurTeam from './Pages/OurTeam/OurTeam';
import About from './Pages/About/About';
import Navbar from './Pages/NavBar/Navbar';
import Chatboat from './Pages/chatboat/Chatboat';
import Test from './Pages/Test/Test';
import { Analytics } from "@vercel/analytics/react";
import Footer from './Pages/Footer/Footer';
import { useEffect } from 'react';

function App() {
  const siteIsDown = false; 
  const location = useLocation();



  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  
  if (siteIsDown) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff3cd",
          color: "#856404",
          fontFamily: "Arial, sans-serif",
          padding: "20px",
          textAlign: "center"
        }}
      >
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>⚠️ Site Unavailable</h1>
        <p style={{ fontSize: "1.1rem", maxWidth: "600px" }}>
          {/* Payment is pending for */}
           <strong>Proxy Wedding</strong>. The site is currently down .
          <br />
          Please check back later. We appreciate your understanding.
        </p>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar />
      <Chatboat />
      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/" element={<HomeHeader />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;

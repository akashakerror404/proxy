import { Routes, Route } from 'react-router-dom'; // ✅ Remove 'Router'
import './App.css';
import HomeHeader from './Pages/Home/HomeHeader';
import Gallery from './Pages/Gallery/Gallery';
import Packages from './Pages/Packages/Packages';
import OurTeam from './Pages/OurTeam/OurTeam';
import About from './Pages/About/About';
import Navbar from './Pages/NavBar/Navbar';
import Chatboat from './Pages/chatboat/Chatboat';
import Test from './Pages/Test/Test';
import { Analytics } from "@vercel/analytics/react"
import Footer from './Pages/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Chatboat></Chatboat>
      <Routes>
      {/* <Route path="/" element={<Test />} /> */}

      
        <Route path="/" element={<HomeHeader />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
      <Analytics />

    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../../assets/Logo/Main/Logo.png'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Packages', path: '/packages' },
    { name: 'About', path: '/about' },
    { name: 'Our Team', path: '/our-team' },
  ];

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            className="flex items-center cursor-pointer"
          >
     
            <img src={Logo} alt="" className='md:w-24 w-20 md:h-10 h-8'/>
   
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.path}
                  className={`relative font-montserrat font-medium px-1 py-2 ${location.pathname === item.path ? 'text-[#328E6E]' : 'text-gray-700 hover:text-[#328E6E]'}`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute left-0 bottom-0 w-full h-0.5 bg-[#328E6E]"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+918075803278"
            className="ml-4 px-6 py-2 bg-gradient-to-r from-[#328E6E] to-[#67AE6E] text-white rounded-full font-montserrat shadow-lg hover:shadow-xl transition-all duration-300 block text-center"
          >
            Connect
          </motion.a>

          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full focus:outline-none"
          >
            <svg className="w-8 h-8 text-[#328E6E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Elegant Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="fixed top-20 right-4 w-64 bg-white/90 backdrop-blur-md rounded-xl shadow-2xl z-50 overflow-hidden border border-white/20"
            >
              {/* Menu Header */}
              <div className="px-5 py-3 bg-gradient-to-r from-[#328E6E]/10 to-[#67AE6E]/10 border-b border-white/20">
                <h3 className="text-[#328E6E] font-playfair font-bold text-lg">Menu</h3>
              </div>
              
              {/* Menu Items */}
              <div className="p-2">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg mx-1 my-1 transition-all duration-300 ${
                        location.pathname === item.path 
                          ? 'bg-gradient-to-r from-[#328E6E]/10 to-[#67AE6E]/10 text-[#328E6E] font-semibold'
                          : 'text-gray-700 hover:bg-gray-100/50'
                      }`}
                    >
                      <div className="flex items-center">
                        <span className="mr-2 text-[#328E6E]">
                          {location.pathname === item.path ? (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                          )}
                        </span>
                        <span className="font-medium">{item.name}</span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              {/* Menu Footer */}
              <div className="px-5 py-3 border-t border-white/20 bg-white/50">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="tel:+918075803278" // <- this makes a direct call
                  className="w-full block text-center py-2 bg-gradient-to-r from-[#328E6E] to-[#67AE6E] text-white rounded-lg font-medium shadow-md"
                >
                  Connect
                </motion.a>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
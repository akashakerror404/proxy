import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = ['Home', 'Gallery', 'Packages', 'About', 'Our Team']

  return (
    <div className="bg-white">
      {/* Company Logo */}
      <div className="fixed top-4 left-4 z-50">
        <h1 className="text-3xl font-playfair text-[#328E6E] font-bold tracking-wider">
          LUVIT <span className="text-[#67AE6E]">WEDS</span>
        </h1>
        <p className="text-sm text-gray-600 font-montserrat mt-1">Creating Timeless Memories</p>
      </div>

      {/* Menu Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsMenuOpen(true)}
        className="fixed top-4 right-4 z-50 p-3 bg-[#328E6E] text-white rounded-full shadow-lg hover:bg-[#67AE6E] transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </motion.button>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white/95 rounded-3xl shadow-2xl w-[90%] max-w-md mx-4 relative overflow-hidden"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 p-2 text-gray-600 hover:text-gray-900"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              <div className="p-8">
                <h2 className="text-3xl font-playfair text-[#328E6E] mb-2 text-center">LUVIT WEDS</h2>
                <p className="text-center text-gray-600 mb-8 font-montserrat">Your Dream Wedding Awaits</p>
                <div className="space-y-4">
                  {menuItems.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                        className="flex items-center py-3 px-4 rounded-lg hover:bg-[#E1EEBC]/20 transition-all duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="w-2 h-2 rounded-full bg-[#328E6E] mr-4"></span>
                        <span className="text-xl font-montserrat text-gray-800 hover:text-[#328E6E]">{item}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar
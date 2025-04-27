import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PLATINUM from '../../assets/PACKAGES/WEDDING/PLATINUM.pdf'
import DIAMOND from '../../assets/PACKAGES/WEDDING/DIAMOND.pdf'
import GOLD from '../../assets/PACKAGES/WEDDING/GOLD.pdf'


import ENGAGEMENTPLATINUM from '../../assets/PACKAGES/ENGAGEMENT/PLATINUM.pdf'
import ENGAGEMENTDIAMOND from '../../assets/PACKAGES/ENGAGEMENT/DIAMOND.pdf'
import ENGAGEMENTGOLD from '../../assets/PACKAGES/ENGAGEMENT/GOLD.pdf'

function Chatboat() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const [showPackages, setShowPackages] = useState(false)
  const [showChat, setShowChat] = useState(false)

  const options = [
    { 
      name: 'Wedding',
      packages: [
        {name: 'Platinum Package', pdf: PLATINUM},
        {name: 'Diamond Package', pdf: DIAMOND},
        {name: 'Gold Package', pdf: GOLD}
      ]
    },
    {
      name: 'Engagement',
      packages: [
        {name: 'Premium Package', pdf: ENGAGEMENTPLATINUM},
        {name: 'Exclusive Package', pdf: ENGAGEMENTDIAMOND}, 
        {name: 'Classic Package', pdf: ENGAGEMENTGOLD}
      ]
    },
    // {
    //   name: 'Baby Shoot',
    //   packages: [
    //     {name: 'Newborn Special', pdf: '/pdfs/baby-newborn.pdf'},
    //     {name: 'Monthly Milestone', pdf: '/pdfs/baby-milestone.pdf'},
    //     {name: 'Family Package', pdf: '/pdfs/baby-family.pdf'}
    //   ]
    // },
    // {
    //   name: 'Model Shoot', 
    //   packages: [
    //     {name: 'Portfolio Pro', pdf: '/pdfs/model-portfolio.pdf'},
    //     {name: 'Fashion Package', pdf: '/pdfs/model-fashion.pdf'},
    //     {name: 'Basic Shoot', pdf: '/pdfs/model-basic.pdf'}
    //   ]
    // }
  ]

  const handleOptionClick = (option) => {
    setSelectedOption(option)
    setShowPackages(true)
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/8075803278', '_blank')
  }

  const handleDownload = (pdf) => {
    window.open(pdf, '_blank')
  }

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen)
    setShowChat(!showChat)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleChat}
        className="bg-gradient-to-r from-[#A1D6B2] to-[#67AE6E] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {!showChat ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" clipRule="evenodd"/>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M19.293 4.293a1 1 0 0 1 1.414 1.414L6.414 20H19a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1V6a1 1 0 1 1 2 0v12.586L19.293 4.293z" clipRule="evenodd"/>
          </svg>
        )}
      </motion.button>

      <AnimatePresence>
        {showChat && isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-16 md:right-0 right-[0px]  md:w-96 w-[350px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
          >
            <div className="p-6 bg-gradient-to-r from-[#A1D6B2] to-[#67AE6E] text-white rounded-t-xl flex justify-between items-center">
              <div>
                <h3 className="font-bold text-xl">PROXY WEDDING  Chat</h3>
                <p className="text-sm opacity-90">Find Your Perfect Package</p>
              </div>
              <button onClick={toggleChat} className="text-white hover:text-gray-200 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 max-h-[60vh] overflow-y-auto bg-gray-50">
              {!showPackages ? (
                <>
                  <p className="text-gray-700 mb-4 font-medium">Please select your preferred service:</p>
                  <div className="space-y-3">
                    {options.map((option, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => handleOptionClick(option)}
                        className="w-full p-4 text-left rounded-xl bg-white shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300"
                      >
                        <span className="text-lg font-semibold text-[#A1D6B2]">{option.name}</span>
                      </motion.button>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <button 
                    onClick={() => setShowPackages(false)}
                    className="mb-6 text-[#A1D6B2] hover:text-[#67AE6E] font-medium flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to services
                  </button>
                  <h4 className="font-bold text-xl mb-4 text-gray-800">{selectedOption.name} Packages</h4>
                  <div className="space-y-3">
                    {selectedOption.packages.map((pkg, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className="p-4 rounded-xl bg-white shadow-sm hover:shadow-md border border-gray-100 flex justify-between items-center"
                      >
                        <span className="font-medium text-gray-700">{pkg.name}</span>
                        <button
                          onClick={() => handleDownload(pkg.pdf)}
                          className="text-[#A1D6B2] hover:text-[#67AE6E] flex items-center gap-2"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          Download PDF
                        </button>
                      </motion.div>
                    ))}
                    
                  </div>
                </>
              )}
            </div>

            <div className="p-6 border-t border-gray-100 bg-white">
              <button
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-center gap-3 bg-green-500 text-white py-3 px-6 rounded-xl hover:bg-green-600 transition-colors duration-300 font-medium shadow-sm hover:shadow-md"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.828z"/>
                </svg>
                Chat on WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Chatboat

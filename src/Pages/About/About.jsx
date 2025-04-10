import React from 'react'

function About() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-[#328E6E] sm:text-5xl md:text-6xl">
          Welcome to <span className="text-[#67AE6E] hover:text-[#328E6E] transition-colors duration-300">LUVIT WEDS</span>
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-[#328E6E] sm:mt-4">
          Capturing Your Love Story, One Frame at a Time
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 border border-[#E1EEBC] lg:col-span-2">
            <h2 className="text-2xl font-bold text-[#328E6E] mb-4">Who We Are</h2>
            <p className="text-[#67AE6E]">Based in the beautiful city of Calicut, Kerala, we are a passionate team of wedding photographers dedicated to capturing your precious moments. With our roots deeply embedded in Kerala's rich cultural heritage, we bring a unique perspective to every wedding we photograph.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 border border-[#E1EEBC]">
            <h2 className="text-2xl font-bold text-[#328E6E] mb-4">Our Journey</h2>
            <p className="text-[#67AE6E]">From the serene backwaters of Kerala to destinations worldwide, we've had the privilege of documenting countless love stories. Our team combines traditional values with contemporary photography techniques to create timeless memories.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 border border-[#E1EEBC] lg:col-span-2">
            <h2 className="text-2xl font-bold text-[#328E6E] mb-4">Why Choose Us</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#67AE6E]">
              <li className="flex items-center transform hover:translate-x-2 transition-transform duration-300">
                <svg className="h-6 w-6 text-[#90C67C] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Expert team with years of experience
              </li>
              <li className="flex items-center transform hover:translate-x-2 transition-transform duration-300">
                <svg className="h-6 w-6 text-[#90C67C] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                International wedding photography experience
              </li>
              <li className="flex items-center transform hover:translate-x-2 transition-transform duration-300">
                <svg className="h-6 w-6 text-[#90C67C] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Understanding of diverse cultural traditions
              </li>
              <li className="flex items-center transform hover:translate-x-2 transition-transform duration-300">
                <svg className="h-6 w-6 text-[#90C67C] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                State-of-the-art photography equipment
              </li>
              <li className="flex items-center transform hover:translate-x-2 transition-transform duration-300">
                <svg className="h-6 w-6 text-[#90C67C] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Personalized attention to every client
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 border border-[#E1EEBC]">
            <h2 className="text-2xl font-bold text-[#328E6E] mb-4">Our Commitment</h2>
            <p className="text-[#67AE6E]">We believe every wedding is unique and deserves to be captured in its full glory. Whether it's a traditional Kerala wedding or a destination wedding abroad, we ensure that every precious moment is preserved for generations to come.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

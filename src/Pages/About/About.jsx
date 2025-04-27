import React from 'react'

function About() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-[#3A4D39] mb-4">
            About <span className="font-medium text-[#67AE6E]">PROXY WEDDING</span>
          </h1>
          <div className="w-24 h-1 bg-[#A1D6B2] mx-auto mb-6"></div>
          <p className="text-lg text-[#5A7D5E] max-w-2xl mx-auto">
            Capturing the essence of your love story through timeless photography
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Our Story */}
          <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-[#A1D6B2]">
            <h2 className="text-2xl font-medium text-[#3A4D39] mb-4">Our Story</h2>
            <p className="text-[#5A7D5E] leading-relaxed">
              Founded in 2011, PROXY WEDDING began as a small team of passionate photographers in Kerala. 
              Today, we've grown into a premier wedding photography service, documenting love stories across 
              India and internationally. Our journey reflects our commitment to artistic excellence and 
              authentic storytelling.
            </p>
          </div>

          {/* Our Approach */}
          <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-[#67AE6E]">
            <h2 className="text-2xl font-medium text-[#3A4D39] mb-4">Our Approach</h2>
            <p className="text-[#5A7D5E] leading-relaxed mb-6">
              We believe wedding photography should be as unique as the couple we're photographing. 
              Our approach combines:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#5A7D5E]">
              <li className="flex items-start">
                <span className="text-[#67AE6E] mr-2">•</span>
                <span>Documentary-style candid coverage</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#67AE6E] mr-2">•</span>
                <span>Artistic portrait sessions</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#67AE6E] mr-2">•</span>
                <span>Attention to cultural details</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#67AE6E] mr-2">•</span>
                <span>Discreet professional presence</span>
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="bg-[#F5F9F5] p-8 rounded-lg">
            <h2 className="text-2xl font-medium text-[#3A4D39] mb-4">Why Choose PROXY WEDDING</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-[#67AE6E] mb-2">Experience</h3>
                <p className="text-[#5A7D5E]">
                  With over 500 weddings photographed, our team brings expertise in handling all types of 
                  ceremonies, from intimate gatherings to grand celebrations.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#67AE6E] mb-2">Quality</h3>
                <p className="text-[#5A7D5E]">
                  We use only professional-grade equipment and deliver images with meticulous attention to 
                  color grading and retouching.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#67AE6E] mb-2">Personal Service</h3>
                <p className="text-[#5A7D5E]">
                  Each couple receives personalized attention from consultation through final delivery, 
                  ensuring your vision is perfectly captured.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-[#E1EEBC]">
            <blockquote className="text-lg italic text-[#5A7D5E] mb-4">
              "PROXY WEDDING gave us not just photographs, but beautiful memories we can revisit forever. 
              Their ability to capture emotions is truly remarkable."
            </blockquote>
            <p className="text-[#67AE6E] font-medium">— Ananya & Rohit, Bangalore</p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-[#5A7D5E]">
            Ready to document your love story? <span className="text-[#67AE6E] font-medium">Get in touch</span> with our team today.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
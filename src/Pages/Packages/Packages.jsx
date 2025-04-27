import React from 'react'
import { motion } from 'framer-motion'
import PLATINUM from '../../assets/PACKAGES/WEDDING/PLATINUM.pdf'
import DIAMOND from '../../assets/PACKAGES/WEDDING/DIAMOND.pdf'
import GOLD from '../../assets/PACKAGES/WEDDING/GOLD.pdf'
import sectionOne1 from '../../assets/GALLERY/SECTION_ONE/sectionone (1).jpg';
import packg3 from '../../assets/GALLERY/SECTION_TWO/sectiontwo (42).jpg'
import packg5 from '../../assets/GALLERY/SECTION_TWO/sectiontwo (32).jpg'

// ENGAGEMENT
import ENGAGEMENTPLATINUM from '../../assets/PACKAGES/ENGAGEMENT/PLATINUM.pdf'
import ENGAGEMENTDIAMOND from '../../assets/PACKAGES/ENGAGEMENT/DIAMOND.pdf'
import ENGAGEMENTGOLD from '../../assets/PACKAGES/ENGAGEMENT/GOLD.pdf'
import eng1 from '../../assets/GALLERY/SECTION_TWO/sectiontwo (88).jpg';
import eng2 from '../../assets/GALLERY/SECTION_TWO/sectiontwo (60).jpg'
import eng3 from '../../assets/GALLERY/SECTION_TWO/sectiontwo (99).jpg'




function Packages() {
  const packages = {
    wedding: [
      {
        name: "PLATINUM",
        description: "Our most luxurious package including full wedding planning, premium venues, and all premium services",
        // price: "$15,000",
        pdf: PLATINUM,
        image: sectionOne1
      },
      {
        name: "DIAMOND", 
        description: "Complete wedding planning with beautiful venues and essential services",
        // price: "$10,000",
        pdf: DIAMOND,
        image: packg3
      },
      {
        name: "GOLD",
        description: "Perfect for smaller weddings while maintaining elegance and style",
        // price: "$7,000", 
        pdf: GOLD,
        image: packg5
      }
    ],
    engagement: [
      {
        name: "Premium Engagement Package",
        description: "Luxury engagement planning with top photographers and venues",
        // price: "$3,000",
        pdf: ENGAGEMENTPLATINUM,
        image: eng1
      },
      {
        name: "Exclusive Engagement Package",
        description: "Beautiful engagement planning with professional services",
        // price: "$2,000",
        pdf: ENGAGEMENTDIAMOND,
        image: eng2
      },
      {
        name: "Classic Engagement Package",
        description: "Beautiful engagement planning with professional services",
        // price: "$2,000",
        pdf: ENGAGEMENTGOLD,
        image: eng3
      }
    ],
    photoshoot: [
      {
        name: "Professional Model Portfolio",
        description: "Complete modeling portfolio shoot with expert photographers",
        price: "$1,500",
        pdf: "/pdfs/model-portfolio-package.pdf",
        image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff"
      },
      {
        name: "Baby Photography Package",
        description: "Capture precious moments with your little one",
        price: "$800",
        pdf: "/pdfs/baby-photo-package.pdf",
        image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed"
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#A1D6B2] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-playfair text-[#A1D6B2] mb-6 drop-shadow-lg">
            Our Packages
          </h1>
          <p className="text-xl text-gray-600 font-montserrat max-w-3xl mx-auto leading-relaxed">
            Choose from our carefully curated packages designed to make your special moments unforgettable
          </p>
        </motion.div>

        {/* Wedding Packages */}
        <section className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-3xl font-playfair text-[#A1D6B2] mb-8 drop-shadow-md"
          >
            Wedding Packages
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.wedding.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-playfair text-[#A1D6B2] mb-4">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4 min-h-[60px]">{pkg.description}</p>
                  <p className="text-2xl font-playfair text-[#67AE6E] mb-6">{pkg.price}</p>
                  <a 
                    href={pkg.pdf}
                    className="inline-block bg-[#A1D6B2] text-white px-6 py-3 rounded-full hover:bg-[#67AE6E] transition-colors duration-300 shadow-md hover:shadow-lg"
                    download
                  >
                    Download Details
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>



        <section className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-3xl font-playfair text-[#A1D6B2] mb-8 drop-shadow-md"
          >
           Engagement Packages
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.engagement.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-playfair text-[#A1D6B2] mb-4">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4 min-h-[60px]">{pkg.description}</p>
                  <p className="text-2xl font-playfair text-[#67AE6E] mb-6">{pkg.price}</p>
                  <a 
                    href={pkg.pdf}
                    className="inline-block bg-[#A1D6B2] text-white px-6 py-3 rounded-full hover:bg-[#67AE6E] transition-colors duration-300 shadow-md hover:shadow-lg"
                    download
                  >
                    Download Details
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Engagement Packages */}
        {/* <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-3xl font-playfair text-[#A1D6B2] mb-8 drop-shadow-md"
          >
            Engagement Packages
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packages.engagement.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-playfair text-[#A1D6B2] mb-4">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4 min-h-[60px]">{pkg.description}</p>
                  <p className="text-2xl font-playfair text-[#67AE6E] mb-6">{pkg.price}</p>
                  <a 
                    href={pkg.pdf}
                    className="inline-block bg-[#A1D6B2] text-white px-6 py-3 rounded-full hover:bg-[#67AE6E] transition-colors duration-300 shadow-md hover:shadow-lg"
                    download
                  >
                    Download Details
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section> */}

        {/* Photography Packages */}
        {/* <section>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-3xl font-playfair text-[#A1D6B2] mb-8 drop-shadow-md"
          >
            Photography Packages
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packages.photoshoot.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-playfair text-[#A1D6B2] mb-4">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4 min-h-[60px]">{pkg.description}</p>
                  <p className="text-2xl font-playfair text-[#67AE6E] mb-6">{pkg.price}</p>
                  <a 
                    href={pkg.pdf}
                    className="inline-block bg-[#A1D6B2] text-white px-6 py-3 rounded-full hover:bg-[#67AE6E] transition-colors duration-300 shadow-md hover:shadow-lg"
                    download
                  >
                    Download Details
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section> */}
      </div>
    </div>
  )
}

export default Packages

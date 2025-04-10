import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation as SwiperNavigation, Pagination as SwiperPagination, Autoplay as SwiperAutoplay, EffectCoverflow as SwiperEffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
    'https://images.unsplash.com/photo-1583939003579-730e3918a45a', 
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc',
    'https://images.unsplash.com/photo-1519741497674-611481863552',
    'https://images.unsplash.com/photo-1583939411023-14783179e581',
    'https://images.unsplash.com/photo-1591604466107-ec97de577aff',
    'https://images.unsplash.com/photo-1583939003579-730e3918a45a',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc',
    'https://images.unsplash.com/photo-1519741497674-611481863552',
    'https://images.unsplash.com/photo-1583939411023-14783179e581',
    'https://images.unsplash.com/photo-1591604466107-ec97de577aff',
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F8FAF0]">
      {/* Header Section */}
      <div className="pt-20 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-playfair text-[#328E6E] mb-6">
            Wedding Gallery
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-montserrat leading-relaxed">
            Step into a world of enchanting moments and timeless celebrations. Our gallery showcases the magic of love stories we've had the privilege to capture and create.
          </p>
        </div>
      </div>

      {/* Hero Section with Slider */}
      <section className="h-[80vh] relative overflow-hidden">
        <Swiper
          modules={[SwiperNavigation, SwiperPagination, SwiperAutoplay, SwiperEffectCoverflow]}
          effect="coverflow"
          centeredSlides={true}
          slidesPerView={1.5}
          loop={true}
          autoplay={{ delay: 3000 }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          className="h-full"
        >
          {galleryImages.slice(0, 5).map((image, index) => (
            <SwiperSlide key={index}>
              <div className="h-full w-full relative">
                <img 
                  src={image}
                  alt={`Featured Wedding ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute inset-0 flex items-center justify-center z-10"
        >
          <div className="text-center text-white">
            <h1 className="text-7xl font-playfair mb-8 text-shadow-lg">Our Masterpieces</h1>
            <p className="text-2xl font-montserrat max-w-3xl mx-auto leading-relaxed text-shadow">
              Each moment captured tells a unique story of love, elegance, and celebration
            </p>
          </div>
        </motion.div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4">
        <div className="max-w-[1400px] mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-2xl shadow-2xl"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image} 
                  alt={`Wedding Story ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white font-playfair text-2xl mb-2">
                      Timeless Love Story {index + 1}
                    </h3>
                    <p className="text-gray-200 font-montserrat opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      A celebration of eternal love and precious moments
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full aspect-[4/5] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                className="w-full h-full object-cover"
                alt="Selected artwork"
              />
              <button 
                className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-3xl hover:bg-white/20 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center py-20"
      >
        <button className="px-16 py-6 bg-[#328E6E] text-white text-2xl rounded-full font-montserrat hover:bg-[#67AE6E] transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
          Explore More Stories
        </button>
      </motion.div>
    </div>
  )
}

export default Gallery

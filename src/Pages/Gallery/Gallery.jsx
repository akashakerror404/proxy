import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Function to dynamically import images with error handling
const importAllImages = (context) => {
  try {
    return context.keys().map(context);
  } catch (error) {
    console.error('Error loading images:', error);
    return [];
  }
};

// Import SECTION_ONE images
const sectionOneImages = importAllImages(
  require.context('../../assets/GALLERY/SECTION_ONE/', false, /\.(jpg)$/)
);

const sectionOneMobileImages = importAllImages(
  require.context('../../assets/GALLERY/SECTION_ONE_MOBILE/', false, /\.(jpg)$/)
);

// Import SECTION_TWO images
const sectionTwoImages = importAllImages(
  require.context('../../assets/GALLERY/SECTION_TWO/', false, /\.(jpg)$/)
);

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleCount, setVisibleCount] = useState(20);
  const [activeTab, setActiveTab] = useState('all');
  const [loadedImages, setLoadedImages] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Track loaded images
  const handleImageLoad = (index) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
  };

  // Initial load effect
  useEffect(() => {
    if (sectionOneImages.length > 0 && sectionTwoImages.length > 0) {
      setIsLoading(false);
    }
  }, []);

  const loadMoreImages = () => {
    setVisibleCount(prev => Math.min(prev + 20, sectionTwoImages.length));
  };

  // Filter images based on active tab
  const filteredImages = sectionTwoImages.filter((_, index) => {
    if (activeTab === 'all') return true;
    // Add other filter conditions if needed
    return true;
  });


    const [isMobile, setIsMobile] = useState(true);
    
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768); 
      };
  
      handleResize(); // Check on initial load
      window.addEventListener('resize', handleResize); 
  
      return () => window.removeEventListener('resize', handleResize); 
    }, []);
  
    const images = isMobile ? sectionOneMobileImages : sectionOneImages;
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#A1D6B2] border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading beautiful memories...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <div className="relative h-screen">
      <Swiper
  modules={[Navigation, Autoplay]}
  slidesPerView={1}
  loop={true}
  autoplay={{ 
    delay: 5000,
    disableOnInteraction: false 
  }}
  navigation
  className="h-full w-full"
>
  {images.map((image, index) => (
    <SwiperSlide key={`hero-${index}`}>
      <div className="relative h-full w-full">
        <img 
          src={image}
          alt={`Hero ${index + 1}`}
          className="w-full h-full object-cover"
          loading="eager"
        />
        
        {/* Desktop Text */}
        <div className="hidden md:flex absolute inset-0 bg-black/30 items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Our Wedding Gallery
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              {index === 0 && "A Moment of Forever"}
              {index === 1 && "Cherished Memories, Captured with Love"}
              {index === 2 && "A Journey of Love"}
              {index === 3 && "Where Two Hearts Meet"}
              {index === 4 && "Love in Focus"}
              {index === 5 && "Elegance in Every Frame"}
              {index === 6 && "The Story of Us"}
            </p>
          </div>
        </div>
        
        {/* Mobile Text */}
        <div className="md:hidden absolute inset-0 bg-black/30 flex items-end pb-8 justify-center">
          <div className="text-center text-white px-4">
            <h2 className="text-2xl font-bold mb-2">
              Wedding Moments
            </h2>
            <p className="text-sm max-w-xs mx-auto mb-4">
              {index === 0 && "Beautiful memories captured forever"}
              {index === 1 && "Every picture tells a story of a beautiful beginning"}
              {index === 2 && "A journey of love and laughter"}
              {index === 3 && "Timeless memories of joy and celebration"}
              {index === 4 && "Capturing love in every detail"}
              {index === 5 && "Elegance and romance in every frame"}
              {index === 6 && "The perfect story of love and commitment"}
            </p>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <div className="animate-bounce">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Our Special Moments</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our collection of beautiful memories from the wedding day
          </p>
          
          {/* Optional tabs for filtering */}
          {/* <div className="flex justify-center mt-8 space-x-2">
            {['all', 'ceremony', 'reception', 'portraits'].map(tab => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-full capitalize ${activeTab === tab ? 'bg-[#A1D6B2] text-white' : 'bg-gray-100 text-gray-700'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div> */}
        </div>

        {/* Masonry Grid Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filteredImages.slice(0, visibleCount).map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: loadedImages[index] ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="break-inside-avoid relative group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              {!loadedImages[index] && (
                <div className="aspect-square bg-gray-100 rounded-lg animate-pulse"></div>
              )}
              <img
                src={image}
                alt={`Wedding moment ${index + 1}`}
                className={`w-full h-auto rounded-lg shadow-md transition-transform ${loadedImages[index] ? 'group-hover:scale-105' : 'opacity-0'}`}
                loading="lazy"
                onLoad={() => handleImageLoad(index)}
              />
              <div className={`absolute inset-0 bg-black/20 ${loadedImages[index] ? 'opacity-0 group-hover:opacity-100' : 'opacity-0'} transition-opacity rounded-lg flex items-center justify-center`}>
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {visibleCount < filteredImages.length && (
          <div className="text-center mt-12">
            <button 
              onClick={loadMoreImages}
              className="px-8 py-3 bg-[#A1D6B2] text-white rounded-full font-medium hover:bg-[#7db38a] transition flex items-center mx-auto"
            >
              Load More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>
        )}
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative max-w-4xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                className="w-full h-full object-contain"
                alt="Enlarged view"
              />
              <button
                className="absolute top-4 right-4 text-white text-3xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition"
                onClick={() => setSelectedImage(null)}
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Gallery;
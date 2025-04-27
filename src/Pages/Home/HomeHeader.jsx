import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom';

import hero1 from '../../assets/HERO_IMAGES/hero1.jpeg';
import hero2 from '../../assets/HERO_IMAGES/hero2.jpeg';
import hero3 from '../../assets/HERO_IMAGES/hero3.jpeg';
import hero4 from '../../assets/HERO_IMAGES/hero4.jpeg';
import hero5 from '../../assets/HERO_IMAGES/hero5.jpeg';
import hero6 from '../../assets/HERO_IMAGES/hero6.jpeg';
import hero7 from '../../assets/HERO_IMAGES/hero7.jpeg';

import hero1mobile from '../../assets/HERO_IMAGES/hero1mobile.jpeg';
import hero2mobile from '../../assets/HERO_IMAGES/hero2mobile.jpeg';
import hero3mobile from '../../assets/HERO_IMAGES/hero3mobile.jpeg';
import hero4mobile from '../../assets/HERO_IMAGES/hero4mobile.jpeg';
import hero5mobile from '../../assets/HERO_IMAGES/hero5mobile.jpeg';
import hero6mobile from '../../assets/HERO_IMAGES/hero6mobile.jpeg';
import hero7mobile from '../../assets/HERO_IMAGES/hero7mobile.jpeg';

import wed01 from '../../assets/WEDDING_IMAGES/wed01.jpg';
import wed02 from '../../assets/WEDDING_IMAGES/wed02.jpg';
import wed03 from '../../assets/WEDDING_IMAGES/wed03.jpg';
import wed04 from '../../assets/WEDDING_IMAGES/wed04.jpg';
import wed05 from '../../assets/WEDDING_IMAGES/wed05.jpg';
import wed06 from '../../assets/WEDDING_IMAGES/wed06.jpg';

import TESTIMONIALS01 from '../../assets/TESTIMONIALS/TESTIMONIALS-01.jpg';
import TESTIMONIALS02 from '../../assets/TESTIMONIALS/TESTIMONIALS-02.jpg';
import TESTIMONIALS03 from '../../assets/TESTIMONIALS/TESTIMONIALS-03.jpg';
import TESTIMONIALS04 from '../../assets/TESTIMONIALS/TESTIMONIALS-04.jpg';

const HERO_IMAGES = [hero1,hero2,hero3,hero4,hero5,hero6,hero7,]
const HERO_IMAGESMOBILE = [hero1mobile,hero2mobile,hero3mobile,hero4mobile,hero5mobile,hero6mobile,hero7mobile,]


const WEDDING_IMAGES = [wed01, wed02, wed03, wed04, wed05, wed06];
const TESTIMONIALS = [
  {
    name: 'Sudeesh & Rincy',
    image: TESTIMONIALS01,
    text: '"Our engagement was nothing short of perfect. From breathtaking décor to the magical atmosphere, every detail was flawlessly executed. Proxy Wedding didnt just plan our day — they created a masterpiece',
    type: 'Engagement',
    date: 'June 2024'
  },
  
  {
    name: 'Rahul & Smaya',
    image: TESTIMONIALS02,
    text: '"Our traditional wedding was a dream come true. Proxy Wedding beautifully blended rituals with elegance, creating a celebration that truly honored our roots. Every moment felt special and meaningful."',
    type: 'Traditional Wedding',
    date: 'May 2024'
  },
  {
    name: 'Pranav & Kavya',
    image: TESTIMONIALS03,
    text: '"Our engagement shoot was a dream come true. Every frame, every backdrop, every vibe felt personal and magical. Proxy Wedding captured our love story like a true piece of art."',
    type: 'Engagement',
    date: 'April 2024'
  },
  {
    name: 'Deepak & Rash Patil',
    image: TESTIMONIALS04,
    text: '"Our post-wedding shoot in Manali was absolutely magical. The snow-capped mountains, pristine valleys, and the team\'s expertise in capturing those perfect moments made our experience unforgettable. Every photo tells our love story against the stunning Himalayan backdrop."',
    type: 'Post Wedding Shoot',
    date: 'March 2025'
  }
]

function HomeHeader() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === HERO_IMAGES.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const stats = [
    { number: 530, label: "Weddings Planned", isPercentage: false },
    { number: 16, label: "Years Experience", isPercentage: false },
    { number: 50, label: "Destinations", isPercentage: false },
    { number: 100, label: "Client Satisfaction", isPercentage: true }
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const duration = 2; // Animation duration in seconds
  const steps = 60; // Total animation steps

  useEffect(() => {
    const incrementValues = stats.map(stat => stat.number / steps);
    const incrementTime = (duration * 1000) / steps;
    
    const timer = setInterval(() => {
      setCounts(prevCounts => {
        return prevCounts.map((count, index) => {
          const newCount = count + incrementValues[index];
          return newCount >= stats[index].number 
            ? stats[index].number 
            : Math.ceil(newCount);
        });
      });

      // Check if all counts have reached their targets
      const allComplete = counts.every((count, index) => 
        count >= stats[index].number
      );
      
      if (allComplete) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, []);

  const [isMobile, setIsMobile] = useState(true);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize(); // Check on initial load
    window.addEventListener('resize', handleResize); 

    return () => window.removeEventListener('resize', handleResize); 
  }, []);

  const images = isMobile ? HERO_IMAGESMOBILE : HERO_IMAGES;

  

  return (
    <div className="min-h-screen bg-white overflow-hidden md:mt-0 ">
      {/* Hero Section with Enhanced Animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="relative h-screen"
      >
        {/* Background Image Layer */}
        <div className="absolute inset-0">
          <AnimatePresence mode='wait'>
            <motion.img
              key={currentImageIndex}
              src={images[currentImageIndex]}
              alt="Wedding Celebration"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 to-transparent" />
        </div>

        <div className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image Layer with Fade Animation */}
            <motion.div
              key={currentImageIndex} // important for re-render animation
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 z-0"
            >
              <img
                src={images[currentImageIndex]}
                alt="Background Wedding"
                className="w-full h-full object-cover object-center brightness-75"
              />
            </motion.div>

  {/* Overlay Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="space-y-8"
    >
      {/* <span className="hidden md:flex text-[#E1EEBC] text-lg font-montserrat tracking-widest md:mt-0 ">
        ELEGANT WEDDING PLANNING
      </span> */}

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold text-white leading-tight">
        Your Dream Wedding <br className="hidden sm:block" /> Starts Here
      </h1>

      <p className="text-lg text-gray-200 font-montserrat max-w-2xl mx-auto">
        We create unforgettable moments tailored to your love story.
        Let our expertise guide you through every magical step.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-[#A1D6B2] hover:bg-[#A1D6B2] text-white rounded-full font-montserrat transition-all duration-300 flex items-center gap-2"
          onClick={() => navigate('/contact')}
        >
          Get Started
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.05,
            backgroundColor: 'rgba(255, 255, 255, 0.1)'
          }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 border-2 border-white text-white rounded-full font-montserrat transition-all duration-300"
          onClick={() => navigate('/gallery')}
        >
          View Portfolio
        </motion.button>
      </div>
    </motion.div>

    {/* Stats Bar */}
    <motion.div
      className="md:mt-16 mt-6 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="p-4">
            <p className="text-3xl font-playfair text-[#E1EEBC]">
              {counts[index]}{stat.isPercentage ? '%' : '+'}
            </p>
            <p className="text-sm text-gray-200 font-montserrat mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
</div>


        {/* Enhanced Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, delay: 2, repeat: Infinity }}
          className="absolute bottom-4 md:left-1/2 left-[35%] transform -translate-x-1/2 text-center "
        >
          <p className="text-[#E1EEBC] mb-2 font-montserrat">Scroll to Explore</p>
          <div className="w-6 h-10 border-2 border-[#E1EEBC] rounded-full flex justify-center mx-auto">
            <div className="w-1 h-3 bg-[#E1EEBC] rounded-full mt-2" />
          </div>
        </motion.div>
      </motion.div>

      {/* Enhanced Wedding Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair text-[#A1D6B2] mb-4">Magical Moments</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-montserrat">
              Every wedding tells a unique story. Browse through our gallery of enchanting celebrations that showcase our dedication to creating perfect moments.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {WEDDING_IMAGES.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3] group"
              >
                <img 
                  src={image} 
                  alt={`Wedding Gallery ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-montserrat text-lg">Discover the story behind this magical day</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Couple Stories Section */}
      <section className="py-20 bg-[#A1D6B2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair text-[#A1D6B2] mb-4">Love Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-montserrat">
              Real couples, real emotions, real memories. Discover how we helped these couples bring their dream weddings to life.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.name}'s Wedding`}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 group-hover:opacity-40 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <h3 className="text-2xl font-playfair text-[#A1D6B2]">{testimonial.name}</h3>
                    <div className="ml-auto flex gap-2">
                      <span className="text-yellow-400">★★★★★</span>
                    </div>
                  </div>
                  <p className="text-gray-600 font-montserrat leading-relaxed">
                    {testimonial.text}
                  </p>
                  <div className="mt-6 flex items-center text-sm text-gray-500">
                    <span className="mr-4">{testimonial.type}</span>
                    <span>{testimonial.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair text-[#A1D6B2] mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-montserrat">
              From full-service planning to day-of coordination, we offer a range of services to suit your needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {[
    {
      title: "Wedding Photography",
      description: "Capturing timeless memories with stunning wedding photography to cherish forever.",
      icon: "📸"
    },
    {
      title: "Wedding Videography",
      description: "Beautiful cinematic videos that tell the full story of your special day.",
      icon: "🎥"
    },
    {
      title: "Engagement Shoots",
      description: "Celebrate your journey together with creative engagement photography sessions.",
      icon: "💍"
    },
    {
      title: "Birthday Photography",
      description: "Capturing joyful moments and unforgettable memories from birthday celebrations.",
      icon: "🎂"
    },
    {
      title: "Model Shoots",
      description: "Professional model photography sessions to build your portfolio and boost your brand.",
      icon: "🧑‍🎤"
    },
    {
      title: "Event Videography",
      description: "Full coverage for weddings, birthdays, and corporate events with cinematic storytelling.",
      icon: "🎬"
    },
    {
      title: "Pre-Wedding Shoots",
      description: "Romantic and stylish pre-wedding photography sessions tailored to your story.",
      icon: "💒"
    },
    {
      title: "All Types of Photography",
      description: "From corporate events to personal shoots — we cover every photography need with passion.",
      icon: "📷"
    },
    {
      title: "All Types of Videography",
      description: "High-quality videography services for all occasions, capturing every special moment beautifully.",
      icon: "📹"
    }
  ].map((service, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-[#A1D6B2] p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300"
    >
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="text-2xl font-playfair text-gray-600  mb-4">{service.title}</h3>
      <p className="text-gray-600 font-montserrat">{service.description}</p>
    </motion.div>
  ))}
</div>


        </div>
      </section>

      {/* New Contact Section */}
      <section className="py-20 bg-[#A1D6B2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair mb-4">Start Your Journey</h2>
            <p className="max-w-2xl mx-auto font-montserrat">
              Ready to begin planning your dream wedding? Get in touch with us today.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 max-w-2xl mx-auto"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-montserrat mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A1D6B2]" />
                </div>
                <div>
                  <label className="block text-gray-700 font-montserrat mb-2">Phonenumber</label>
                  <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A1D6B2]" />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-montserrat mb-2">Message</label>
                <textarea className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A1D6B2] h-32"></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-[#A1D6B2] text-white rounded-full font-montserrat text-lg hover:bg-[#67AE6E] transition-colors duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomeHeader
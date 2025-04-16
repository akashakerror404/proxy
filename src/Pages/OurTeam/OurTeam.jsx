import React from 'react'
import { motion } from 'framer-motion'
import OUR_TEAM1 from '../../assets/OUR_TEAM/OUR_TEAM1.jpg';
import OUR_TEAM2 from '../../assets/OUR_TEAM/OUR_TEAM2.jpg';
import OUR_TEAM3 from '../../assets/OUR_TEAM/OUR_TEAM3.jpg';
import OUR_TEAM4 from '../../assets/OUR_TEAM/OUR_TEAM4.jpg';
import OUR_TEAM5 from '../../assets/OUR_TEAM/OUR_TEAM5.jpg';
import OUR_TEAM6 from '../../assets/OUR_TEAM/OUR_TEAM6.jpg';
import OUR_TEAM7 from '../../assets/OUR_TEAM/OUR_TEAM7.jpg';



function OurTeam() {
  const teamMembers = [
    {
      name: "Akash Ak",
      role: "Lead Photographer",
      image: OUR_TEAM4,
      description: "Akash brings unmatched passion and precision to every event he captures, having covered over 150 weddings and turning special moments into timeless memories.",
      specialties: ["Wedding Photography", "Creative Portraits", "Fashion", "Event Coverage", "Portrait Photography"]
    }
    
    ,
    {
      name: "Dinoop",
      role: "Photographer",
      image: OUR_TEAM2,
      description: "Dinoop specializes in product photography and ad shoots, delivering sharp visuals that elevate brand stories with creative precision.",
      specialties: ["Product Photography", "Ad Shoots", "Creative Lighting"]
    },
    
    
    {
      name: "Asnayin",
      role: "Wedding Specialist",
      image: OUR_TEAM3, // Replace with the correct image if needed
      description: "Asnayin is passionate about capturing the beauty, joy, and emotions of weddings. With a creative approach and attention to detail, she ensures every moment is preserved with elegance.",
      specialties: ["Wedding Photography", "Candid Moments", "Pre-Wedding Shoots"]
    }
    ,
    {
      name: "Jayeesh",
      role: "Wedding Specialist",
      image: OUR_TEAM5, // Replace with the correct image if needed
      description: "Jayeesh is a dedicated wedding specialist and the main constant at all our wedding events. His deep understanding of ceremonies and eye for emotion ensures every moment is beautifully documented.",
      specialties: ["Wedding Photography", "Traditional Ceremonies", "Event Coverage"]
    }
    ,
    {
      name: "Sreeraj",
      role: "Photographer & Video Editor",
      image: OUR_TEAM1, // Replace with the correct image if needed
      description: "Sreeraj combines his skills in photography and video editing to craft visually compelling stories. From capturing the shot to perfecting the final edit, he delivers high-quality visual content every time.",
      specialties: ["Photography", "Video Editing", "Post-Production"]
    },
    {
      name: "Avinsh",
      role: "Wedding & Celebrity Photographer",
      image: OUR_TEAM7, // Replace with the correct image if needed
      description: "Avinsh is renowned for his expertise in wedding, celebrity, and model shoots, blending artistic flair with professional precision. His lens captures glamour, grace, and unforgettable moments.",
      specialties: ["Wedding Photography", "Celebrity Shoots", "Model Portfolio"]
    },
    
    {
      name: "Jithin Raj",
      role: "Wedding Photographer",
      image: OUR_TEAM6, // Replace with the correct image if needed
      description: "Jithin Raj specializes in wedding photography, capturing timeless moments with a blend of elegance and emotion. His work tells heartfelt stories that couples cherish forever.",
      specialties: ["Wedding Photography", "Candid Shots", "Couple Portraits"]
    },

    

  ]

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-playfair text-[#328E6E] mb-4">Meet Our Photography Team</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our talented team of photographers and videographers are passionate about capturing your precious moments in the most beautiful way possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair text-[#328E6E] mb-2">{member.name}</h3>
                <p className="text-[#67AE6E] font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                <div className="space-y-2">
                  {member.specialties.map((specialty, i) => (
                    <span 
                      key={i}
                      className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-600 mr-2 mb-2"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurTeam

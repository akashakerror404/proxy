import React from 'react'
import { motion } from 'framer-motion'

function OurTeam() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Lead Photographer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      description: "With over 10 years of experience in wedding photography, Sarah has a keen eye for capturing those perfect moments that tell your unique love story.",
      specialties: ["Wedding Photography", "Couple Portraits", "Creative Direction"]
    },
    {
      name: "Michael Chen", 
      role: "Senior Photographer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      description: "Michael's artistic vision and technical expertise allow him to create stunning compositions that bring out the natural beauty in every shot.",
      specialties: ["Landscape Photography", "Architecture", "Natural Light"]
    },
    {
      name: "Emily Rodriguez",
      role: "Portrait Specialist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      description: "Emily specializes in making subjects feel comfortable and natural in front of the camera, resulting in authentic and emotional portraits.",
      specialties: ["Portrait Photography", "Family Sessions", "Fashion"]
    },
    {
      name: "David Kim",
      role: "Videographer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      description: "David brings stories to life through his cinematic approach to wedding videography, creating beautiful films that capture your special day.",
      specialties: ["Wedding Films", "Drone Photography", "Video Editing"]
    }
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

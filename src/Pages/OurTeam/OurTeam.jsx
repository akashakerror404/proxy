import React from 'react'
import { motion } from 'framer-motion'
import OUR_TEAM1 from '../../assets/OUR_TEAM/OUR_TEAM1.jpg';
import OUR_TEAM2 from '../../assets/OUR_TEAM/OUR_TEAM2.jpg';
import OUR_TEAM3 from '../../assets/OUR_TEAM/OUR_TEAM3.jpg';
import OUR_TEAM4 from '../../assets/OUR_TEAM/OUR_TEAM4.jpg';
import OUR_TEAM5 from '../../assets/OUR_TEAM/OUR_TEAM5.jpg';
import OUR_TEAM6 from '../../assets/OUR_TEAM/OUR_TEAM6.jpg';
import OUR_TEAM7 from '../../assets/OUR_TEAM/OUR_TEAM7.jpg';
import TEAM from '../../assets/OUR_TEAM/TEAM.jpg';
import TEAM2 from '../../assets/OUR_TEAM/TEAM2.jpg';


function OurTeam() {
  const founder = {
    name: "Pratheesh Prakash",
    role: "Founder & Creative Director",
    image: OUR_TEAM1,
    description: "With over a decade of experience in photography and videography, Pratheesh Prakash founded our studio with a vision to create timeless visual stories. His expertise spans across wedding, commercial, and artistic photography, bringing a unique creative perspective to every project.",
    specialties: ["Photography", "Videography", "Creative Direction", "Post-Production", "Brand Storytelling"]
  };

  const teamMembers = [
    {
      name: "Sujil Das",
      role: "Photographer, Videographer & Color Grade Specialist",
      image: OUR_TEAM2,
      description: "Suil Das is a pillar of Proxy Weddings, specializing in photography, videography, and color grading, creating timeless moments with exceptional craftsmanship.",
      specialties: ["Photography", "Videography", "Color Grading", "Proxy Wedding Specialist"]
    },



  
    {
      name: "Divya Maneesh",
      role: "Color Grading Specialist",
      image: OUR_TEAM4,
      description: "Divya is a skilled color grading specialist, enhancing visuals with a keen eye for color balance and mood, ensuring every shot is visually stunning.",
      specialties: ["Color Grading", "Post-Production", "Visual Effects", "Cinematic Look"]
    },
    {
      name: "Abhisha Ashok",
      role: "Album Designer",
      image: OUR_TEAM5,  // (assuming you have a variable or import like OUR_TEAM6 for her photo)
      description: "Abhisha is a talented album designer, crafting beautiful and memorable photo albums with creativity and attention to detail, turning moments into lasting treasures.",
      specialties: ["Album Design", "Photo Editing", "Creative Layouts", "Storytelling"]
    },
{
  name: "Nishitha",
  role: "Manager",
  image: OUR_TEAM6, // update this to her actual image variable if different
  description: "Nishitha is an experienced manager, leading the team with dedication, organization, and a clear vision to ensure smooth operations and exceptional results.",
  specialties: ["Team Leadership", "Project Management", "Client Relations", "Strategic Planning"]
},

{
  name: "Shinoop",
  role: "Video Editor",
  image: OUR_TEAM7, // update this to his actual image variable if different
  description: "Shinoop is a skilled video editor, bringing stories to life through seamless transitions, creative effects, and precise cuts that capture emotions and engage viewers.",
  specialties: ["Video Editing", "Color Grading", "Motion Graphics", "Storytelling"]
}
,
      {
      name: "Sujay C Nair",
      role: "Cinematographer",
      image: OUR_TEAM3,
      description: "Sujay C Nair is an expert cinematographer, capturing breathtaking visuals and creating compelling cinematic experiences with every frame.",
      specialties: ["Cinematography", "Film Production", "Lighting", "Camera Techniques"]
    },




  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-playfair text-[#A1D6B2] mb-4">Our Creative Family</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Meet the passionate artists behind the lens who transform moments into lasting memories
        </p>
      </motion.div> */}

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto mb-8"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={TEAM}
            alt="Our Team Together"
            className="hidden md:flex w-full h-auto max-h-[600px] object-cover"
          />
            <img
            src={TEAM2}
            alt="Our Team Together"
            className="md:hidden w-full h-auto max-h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
            <div className="text-white ">
              <div className='hidden md:flex'>
                <h1 className=" text-sm md:text-5xl font-playfair mb-4">Our Creative Family</h1>

              </div>
              {/* <div className='md:hidden flex justify-center'>
                <p className=" text-sm md:text-5xl ">Our Creative Family</p>


              </div>
              <div className='md:hidden flex pl-8'>
                <p className='text-[10px] text-white'>
                  Dedicated to telling your story with heart</p>


              </div> */}
              <div className='hidden md:flex'>
                <p className="md:text-lg text-sm max-w-2xl opacity-90">
                  A passionate collective of visual storytellers dedicated to capturing your most precious moments

                </p>

              </div>

            </div>
          </div>
        </div>
      </motion.section>
      <div className="max-w-7xl mx-auto">
        {/* <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-playfair text-[#A1D6B2] mb-4">Our Creative Family</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the passionate artists behind the lens who transform moments into lasting memories
          </p>
        </motion.div> */}

        {/* Founder Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto"
          >
            <div className="md:flex">
              <div className="md:w-1/3 h-96 md:h-auto">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-2/3">
                <div className="uppercase tracking-wide text-sm text-[#67AE6E] font-semibold mb-1">Visionary</div>
                <h2 className="text-3xl font-playfair text-[#A1D6B2] mb-2">{founder.name}</h2>
                <p className="text-gray-500 italic mb-6">{founder.role}</p>
                <p className="text-gray-600 mb-6">{founder.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 mb-3">SPECIALTIES</h4>
                  <div className="flex flex-wrap gap-2">
                    {founder.specialties.map((specialty, i) => (
                      <span
                        key={i}
                        className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-600"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Team Members */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair text-[#A1D6B2] mb-4">The Talented Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our dedicated professionals who bring creativity and technical excellence to every project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="h-96 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair text-[#A1D6B2] mb-1">{member.name}</h3>
                <p className="text-[#67AE6E] font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 mb-2">EXPERTISE</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, i) => (
                      <span
                        key={i}
                        className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs text-gray-600"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
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
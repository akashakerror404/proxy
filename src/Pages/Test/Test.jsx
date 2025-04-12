import React, { useEffect, useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

function Test() {
  const container = useRef()
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  return (
    <main className="overflow-hidden">
      <div className='h-[100vh]'/>
      <div ref={container}>
        <Slide direction={'left'} left={"-40%"} progress={scrollYProgress}/>
        <Slide direction={'right'} left={"-25%"} progress={scrollYProgress}/>
        <Slide direction={'left'} left={"-75%"} progress={scrollYProgress}/>
      </div>
      <div className='h-[100vh]' />
    </main>
  )
}

const Slide = (props) => {
  const direction = props.direction === 'left' ? -1 : 1
  const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction])
  return (
    <motion.div style={{x: translateX, left: props.left}} className="relative flex whitespace-nowrap">
      <Phrase />
      <Phrase2 />
      <Phrase3 />
    </motion.div>
  )
}

const Phrase = () => {
  return (
    <div className={'px-5 flex gap-5 items-center'}>
      <p className='text-[7.5vw]'>Make Your Day </p>
      <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
      <img src="https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt4a4af7e6facea579/6668df6ceca9a600983250ac/beautiful-flowers-hero.jpg?q=70&width=3840&auto=webp" alt="" />
      </span>
    </div>
  )
}
const Phrase2 = () => {
    return (
      <div className={'px-5 flex gap-5 items-center'}>
        <p className='text-[7.5vw]'>With Us  </p>
        <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <img src="https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt4a4af7e6facea579/6668df6ceca9a600983250ac/beautiful-flowers-hero.jpg?q=70&width=3840&auto=webp" alt="" />
        </span>
      </div>
    )
  }
  const Phrase3 = () => {
    return (
      <div className={'px-5 flex gap-5 items-center'}>
        <p className='text-[7.5vw]'>Luvit Wdeds  </p>
        <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <img src="https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt4a4af7e6facea579/6668df6ceca9a600983250ac/beautiful-flowers-hero.jpg?q=70&width=3840&auto=webp" alt="" />
        </span>
      </div>
    )
  }

export default Test

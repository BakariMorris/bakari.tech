import { motion } from 'framer-motion';

const stairAnimation = {
  initial: {
    top: '0%',
  },
  animate: {
    top: '100%',
  },
  exit: {
    top: ['100%', '0%'],
  },
}

{ /* calculate the reverse index for the staggered delay */ }

const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
}


{/* rendering 6 motion steps here representing a set of stairs Each div has the sme animation defined above
    The delay for each div is calculated dynamically based on it's reversed index
    Creating a staggered effect with deceasing delay for every step after */}
const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial='initial'
          animate='animate'
          exit='exit'
          transition={{
            duration: 0.4,
            ease: 'easeInOut',
            delay: reverseIndex(index) * 0.1,
          }}
          className='h-full w-full bg-[#414141ce] relative'
        />
      ))}
    </>
  )
}

export default Stairs;
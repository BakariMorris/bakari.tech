import Link from 'next/link';
import { Button } from './ui/button';
import { BsArrowDown } from 'react-icons/bs';
import { motion } from 'framer-motion';

interface I_props {
  nextLink: string,
  nextIcon?: React.ReactNode,
  buttonStyling?: string,
  containerStyling?: string
}

const StoryNav = (props: I_props) => {
  const {
    nextLink,
    nextIcon,
    buttonStyling
  } = props;

  return (
    <motion.div 
    initial={{opacity: 0}} 
    className='flex justify-center z-[-1]'
    animate={{
      opacity: 1,
      transition: {delay: 1, duration: 0.4, ease: 'easeInOut'}
    }}>
      {<Link
        href={nextLink}
        className={`${buttonStyling} relative text-center mb-8`}>
        <Button
          >
          {(nextIcon) ? nextIcon : <BsArrowDown />}
          </Button>
      </Link>}
    </motion.div>
  )
}

export default StoryNav;
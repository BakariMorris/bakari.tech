import Link from 'next/link';
import { Button } from './ui/button';
import { BsArrowDown } from 'react-icons/bs';

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
    <>
      {<Link
        href={nextLink}>
        <Button
          className={`${buttonStyling} relative z-[-1] text-center ml-[48%] mb-2`}>
          {(nextIcon) ? nextIcon : <BsArrowDown />}
          </Button>
      </Link>}
    </>
  )
}

export default StoryNav;
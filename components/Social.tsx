import {ReactNode} from 'react';
import Link from "next/link";
import {FaGithub, FaGoogle, FaLinkedinIn, FaYoutube} from 'react-icons/fa';
import { Button } from './ui/button';

interface ISocialLink {
  icon: ReactNode,
  path: string
}

interface ISocialPropTypes {
  containerStyles: string,
  iconStyles: string
}

const socials: Array<ISocialLink> = [
  {icon: <FaGithub />, path: 'https://github.com/BakariMorris?tab=repositories'},
  {icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/bakari-morris/'},
  {icon: <FaGoogle />, path: 'mailto:bakari.morris@gmail.com, bakari.morris@gmail.com'},
]


const Social = (props: ISocialPropTypes) => {
  return <div className={props.containerStyles}>
    
    {socials.map((social, index) => (
      <Link href={social.path} key={index} className={props.iconStyles}>
        <span>{social.icon}</span>
      </Link>
    ))}
  </div>;
}

export default Social;
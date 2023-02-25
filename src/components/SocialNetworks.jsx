import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa"
import React from 'react'
import '../styles/components/socialnetworks.sass';

const socialnetworks = [
    { name: "linkedin", icon: <FaLinkedinIn/>, link:'https://www.linkedin.com/in/jefferson-donizete-do-nascimento-a381b2212/' },
    { name: "github", icon: <FaGithub/>, link: 'https://github.com/JeffDoni' },
    { name: "instagram", icon: <FaInstagram/>, link: 'https://www.instagram.com/jdn1937/' },
]

const SocialNetworks = () => {
  return (
  <section id='social-networks'>
    {socialnetworks.map((network) => (
        <a href={network.link} className='social-btn' id={network.name} key={network.name} target='_blank'>
            {network.icon}
        </a>
    ))}
  </section>
  )
}

export default SocialNetworks

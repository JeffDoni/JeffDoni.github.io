import React from 'react';
import Avatar from '../img/eu.jpeg';
import InformationContainer from './InformationContainer';

import '../styles/components/sidebar.sass';
import SocialNetworks from './SocialNetworks';


const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Jefferson Donizete" className='profile'/>
      <p className='title'>Desenvolvedor Web</p>
      <SocialNetworks/>
      <InformationContainer/>
      <a href="https://drive.google.com/file/d/1GwfHiEi4AmDuttc9aN2W57t8AygMMB-4/view?usp=sharing" target='_blank' className='btn'>
        Dowload Currículo
      </a>
    </aside>
  )
}

export default Sidebar

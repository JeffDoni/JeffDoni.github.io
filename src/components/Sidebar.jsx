import React from 'react';
import Avatar from '../img/eu.jpeg';
import InformationContainer from './InformationContainer';

import '../styles/components/sidebar.sass';
import SocialNetworks from './SocialNetworks';


const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Jefferson Donizete" />
      <p className='title'>Desenvolvedor Web</p>
      <SocialNetworks/>
      <InformationContainer/>
      <a href="" className='btn'>
        Dowload Currículo
      </a>
    </aside>
  )
}

export default Sidebar

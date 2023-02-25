import React from 'react'
import '../styles/components/maincontent.sass';
import AboutContainer from './AboutContainer';
import ProjectsContainer from './ProjectsContainer';
import TechnoLOgiesContainer from './TechnologiesContainer';

const MainContent = () => {
  return (
    <main id='main-content'>
      <AboutContainer/>
      <TechnoLOgiesContainer/>
      <ProjectsContainer/>
    </main>
  )
}

export default MainContent

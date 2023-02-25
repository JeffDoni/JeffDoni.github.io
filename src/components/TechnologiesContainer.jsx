import React from 'react'

import{
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiReact,
    DiBootstrap
} from 'react-icons/di'

import{
    SiSass,
    SiRedux,
    SiTailwindcss
} from 'react-icons/si'

import '../styles/components/technologiescontainer.sass'

const technologies = [
    {id: 'html', name: 'HTML5', icon: <DiHtml5/>},
    {id: 'css', name: 'CSS3', icon: <DiCss3/>},
    {id: 'js', name: 'JavaScript', icon: <DiJsBadge/>},
    {id: 'react', name: 'React', icon: <DiReact/>},
    {id: 'bootstrap', name: 'Bootstrap', icon: <DiBootstrap/>},
    {id: 'Sass', name: 'Sass', icon: <SiSass/>},
    {id: 'Redux', name: 'SiRedux', icon: <SiRedux/>},
    {id: 'Tailwind', name: 'Tailwind', icon: <SiTailwindcss/>}

];

const TechnologiesContainer = () => {
  return (
  <section className='technologies-container'>
    <h2>Tecnologias</h2>
    <div className='tecnologies-grid'>
        {
            technologies.map((tech)=> (
               <div className="technology-card" id={tech.id} key={tech.id}>
                {tech.icon}
                <div className="technology-info">
                    <h3>{tech.name}</h3>
                </div>

               </div> 
            ))
        }
    </div>
  </section>
  )
}

export default TechnologiesContainer

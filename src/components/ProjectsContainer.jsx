import React from 'react'
import Tunes from '../img/tunes.gif'
import Trivia from '../img/trivia.gif'
import Movies from '../img/movies.gif'
import Food from '../img/lanchonete.gif'
import '../styles/components/projectsContainer.sass'


const ProjectsContainer = () => {


const project = [
  {link: 'https://tunes-omega.vercel.app/', name: 'Tunes', gif: Tunes },
  {link: 'https://trivia-rouge.vercel.app/', name: 'Trivia', gif: Trivia },
  {link: 'https://dev-movies.vercel.app/', name: 'Movies', gif: Movies },
  {link: 'https://lanchonete-mata-fome.vercel.app/', name: 'Lanchonete', gif: Food },
  
 
];
  return (
   <section className="project">
    <h2>Projetos</h2>
    <p>
    Desenvolvi alguns projetos durante minha trajetória no desenvolvimento web, acesse e conheça cada uma das aplicações na galeria abaixo.
    </p>
    <div className="carousel">
    {project.map((e) => (
      <div key={e.name} className='projects-container item'>
        <img src={e.gif} alt={e.name} className='photo'/>
        <p>{e.name}</p>
        <a href={e.link}>Acesse</a>
      </div>
    ))}
    </div>

    <div className='btnproject'>
 
    <a href="https://github.com/JeffDoni?tab=repositories" className='btn'>
        Ver mais Projetos 
    </a> 
    </div>
   
   </section>
  )
}

export default ProjectsContainer

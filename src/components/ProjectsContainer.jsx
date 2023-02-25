import React from 'react'
import Tunes from '../img/tunes.gif'
import Trivia from '../img/trivia.gif'
import Shopping from '../img/shopping.gif'
import { useRef } from 'react';
import '../styles/components/projectsContainer.sass'


const ProjectsContainer = () => {

  const carouselRef = useRef(null);

  // function handleScroll(direction) {
  //   const carousel = carouselRef.current;
  //   console.log('ok', carousel)
  //   const scrollWidth = carousel.scrollWidth;
  //   const viewWidth = carousel.offsetWidth;
  //   const maxScroll = scrollWidth - viewWidth;

  //   if (direction === 'left' && carousel.scrollLeft > 0) {
  //     carousel.scrollLeft -= viewWidth;
  //   } else if (direction === 'right' && carousel.scrollLeft < maxScroll) {
  //     carousel.scrollLeft += viewWidth;
  //   }
  // }

const project = [
  {link: 'https://tunes-omega.vercel.app/', name: 'Tunes', gif: Tunes },
  {link: 'trivia-rouge.vercel.app', name: 'Trivia', gif: Trivia },
  {link: 'https://shopping-cart-theta-two.vercel.app/', name: 'ShoppingCart', gif: Shopping },
  
 
];
  return (
   <section>
    <h2>Projetos</h2>
    <p>
    Desenvolvi alguns projetos durante minha trajetória no desenvolvimento web, acesse e conheça cada uma das aplicações na galeria abaixo.
    </p>
    <div className="carousel">
    {project.map((e) => (
      <div key={e.name} className='projects-container item'>
        <img src={e.gif} alt={e.name} className='photo'/>
        <a href={e.link}>Acesse</a>
        <p>{e.name}</p>
      </div>
    ))}
    </div>
    {/* <div className="buttons">
        <button onClick={() => handleScroll('left')}>Anterior</button>
        <button onClick={() => handleScroll('right')}>Próximo</button>
      </div>
 
    <a href="https://github.com/JeffDoni?tab=repositories" className='btn'>
        Ver Projetos 
    </a> */}
   
   </section>
  )
}

export default ProjectsContainer

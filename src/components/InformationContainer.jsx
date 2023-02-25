import React from 'react'
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai"
import '../styles/components/informationContainer.sass'

const informationContainer = () => {
  return (
   <section id='information-container'>
    <div className='info-card'>
      <AiFillPhone id='phone-icon'/>
      <div>
        <h3>Telefone</h3>
        <p>(31)99562-2842</p>
      </div>
    </div>
    <div className='info-card'>
      <AiOutlineMail id='email-icon'/>
      <div>
        <h3>E-email</h3>
        <p>jdn1937@hotmail.com</p>
      </div>
    </div>
    <div className='info-card'>
      <AiFillEnvironment id='pin-icon'/>
      <div>
        <h3>Localização</h3>
        <p>Barbacena/MG</p>
      </div>
    </div>

   </section>
  )
}

export default informationContainer

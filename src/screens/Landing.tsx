import React from 'react';
import {FiArrowRight} from 'react-icons/fi'
import {Link} from 'react-router-dom'

import '../styles/pages/landing.css'
import logoImg from '../images/logow.png'

function Landing(){
    return(
      <div id="page-landing">
        <div className="content-wrapper">
          <img src={logoImg} alt="Happy"/>
          <main>
            <h1>Leve a felicidade para casa</h1>
            <p>Busque ONGs e encontre seu melhor amigo.</p>
          </main>

          <div className="location">
            <strong>São Paulo</strong>
            <span>Cotia e região</span>
          </div>

          <Link to="/app" className="enter-app"> 
            <FiArrowRight size={26} color="rgba(0,0,0,0.6)"/> 
          </Link>
        </div>
      </div>
    )
}

export default Landing;
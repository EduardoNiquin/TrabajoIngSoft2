import React from 'react'
//import Navbar from './Navbar'
import Card1 from './helper/Card1'
import Card2 from './helper/Card2'


const Vision = () => {
    return (
      <div class="container">
     <p className='about-title'>NUESTRA FUNDACIÓN</p>

      <div class="row">

      <div class="col-md-6">
       <Card1 
       titulo='Visión'
       texto='Somos una ONG iniciativa de la Congregación de Nuestra Señora de la Caridad del Buen Pastor proactiva con las personas en situación de vulnerabilidad por la pobreza, violencia de género, migración y la trata de personas; especialmente mujeres, niñas, niños, se encuentran participando activamente en la construcción de una sociedad inclusiva y equitativa.'
        />
      </div>
      <div class="col-md-6">
        <Card2 
         imagen1='08'
         imagen2='09'/>
       </div>
      </div>

      <div class="row">
      <div class="col-md-6">
       <Card1 
       titulo='Misión'
       texto='La Fundación Madre Josefa Fernández Concha, acoge, acompaña y empodera a las personas en situación de vulnerabilidad, especialmente migrantes, mujeres, niños, niñas en situación de pobreza, violencia de género y trata de personas para su integración plena en el país con un compromiso claro en la defensa de los derechos humanos y la dignidad de la persona.'
        />
      </div>
      <div class="col-md-6">
        <Card2 
         imagen1='10'
         imagen2='11'/>
       </div>
      </div>
    </div>
    );
  }
  
  export default Vision;
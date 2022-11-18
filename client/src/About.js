import React from 'react'
import Footer from './Footer'
//import Navbar from './Navbar'
import Card1 from './helper/Card1'
import Card2 from './helper/Card2'

const About = () => {
  return (
    <><div class="container">
      <p className='about-title1'>NUESTRA FUNDACIÓN</p>

      <div class="row">

        <div class="col-md-6">
          <Card1
            titulo='Qué hacemos.'
            texto='Trabajamos en temas de Migración, violencia contra la mujer y justicia económica en las regiones de Tarapacá, Coquimbo, Metropolitana, Maule y Araucanía.Trabajamos con un enfoque en Derechos Humanos por un mundo con más justicia e inclusión, con equidad de género, sin discriminación, con mujeres migrantes integradas y capaces de defender sus derechos, los de sus hijos, los de sus pares y de toda mujer niño o niña. Lo hacemos a través de los siguientes programas.' />
        </div>
        <div class="col-md-6">
          <Card2
            imagen1='01'
            imagen2='02' />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <Card2
            imagen1='03'
            imagen2='04' />
        </div>
        <div class="col-md-6">
          <Card1
            titulo='Centro de Atención e inclusión social para migrantes y refugiados'
            texto='El objetivo del centro, es la inclusión social y laboral de las personas migrantes en situación de pobreza y mayor vulnerabilidad, mediante la entrega de asesoría legal, social y laboral y de un acompañamiento espiritual inspirado en el Buen Pastor. Para el logro de este trabajo se utiliza como principal estrategia el acompañamiento de la persona durante todo el proceso de intervención, con ella se trabajan distintas dimensiones las cuales son identificadas al momento de su ingreso Tres son las líneas de acción que comprende el Centro para la promoción de la inclusión social y laboral de las personas migrantes: Proceso de Migración Seguro, Intermediación Laboral y Desarrollo Humano' />
        </div>
      </div>

      <div class="row">

        <div class="col-md-6">
          <Card1
            titulo='Programa de Prevención de la Trata de Personas'
            texto='Buscamos generar espacios de sensibilización, información y formación sobre este flagelo social, mediante campañas comunicacionales, jornadas de reflexión, paneles informativos, y trabajo con organizaciones estratégicas.' />
        </div>
        <div class="col-md-6">
          <Card2
            imagen1='05'
            imagen2='06' />
        </div>
      </div>
    </div><Footer /></>
  );
}

export default About;
import React from 'react'
import Footer from './Footer'

const Information = () => {
  return (
    <><div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <img id="Pic-Dir" src={require('./assets/12.jpg')} alt="Foto-Dir" />
              <h4 class="card-title">Hna. Maria Cristina O.</h4>
              <h6 class="text-muted card-subtitle mb-2">Representante Legal y Presidenta del Directorio de la Fundación Madre Josefa</h6>
              <a href={"mailto:mopazo@fundacionmadrejosefa.cl"} id="email_fundación">Email:mopazo@fundacionmadrejosefa.cl</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card-body">
            <img id="Pic-Dir" src={require('./assets/13.jpg')} alt="Foto-Dir" />
            <h4 class="card-title">Hna. Guadalupe Lisambarth González</h4>
            <h6 class="text-muted card-subtitle mb-2">Miembro del Directorio Fundación Madre Josefa</h6>
            <a href={"mailto:lupelisambarth@fundacionmadrejosefa.cl"} id="email_fundación">Email:lupelisambarth@fundacionmadrejosefa.cl</a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card-body">
            <img id="Pic-Dir" src={require('./assets/14.jpg')} alt="Foto-Dir" />
            <h4 class="card-title">Maria Rojas</h4>
            <h6 class="text-muted card-subtitle mb-2">Secretaria</h6>
            <a href={"mailto:mrojas@fundacionmadrejosefa.cl"} id="email_fundación">Email:mrojas@fundacionmadrejosefa.cl</a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <img id="Pic-Dir" src={require('./assets/15.jpg')} alt="Foto-Dir" />
              <h4 class="card-title">Hna. Carmen Abello Flores</h4>
              <h6 class="text-muted card-subtitle mb-2">Directora</h6>
              <a href={"mailto:cabello@fundacionmadrejosefa.cl"} id="email_fundación">Email:cabello@fundacionmadrejosefa.cl</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card-body">
            <img id="Pic-Dir" src={require('./assets/16.jpg')} alt="Foto-Dir" />
            <h4 class="card-title">Rocío Astudillo Díaz</h4>
            <h6 class="text-muted card-subtitle mb-2">Tesorera</h6>
            <a href={"mailto:rdiaz@fundacionmadrejosefa.cl"} id="email_fundación">Email:rdiaz@fundacionmadrejosefa.cl</a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card-body">
            <img id="Pic-Dir" src={require('./assets/17.jpg')} alt="Foto-Dir" />
            <h4 class="card-title">Elba Cornejo</h4>
            <h6 class="text-muted card-subtitle mb-2">Directora</h6>
            <a href={"mailto:ecornejo@fundacionmadrejosefa.cl"} id="email_fundación">Email:ecornejo@fundacionmadrejosefa.cl</a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <img id="Pic-Dir" src={require('./assets/18.jpg')} alt="Foto-Dir" />
              <h4 class="card-title">Hna. Nelly León</h4>
              <h6 class="text-muted card-subtitle mb-2">Directora</h6>
              <a href={"mailto:nleon@fundacionmadrejosefa.cl"} id="email_fundación">Email:nleon@fundacionmadrejosefa.cl</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
        </div>
        <div class="col-md-4">
        </div>
      </div>
    </div><Footer /></>
  )
}

export default Information
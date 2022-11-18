import React from "react";
import Footer from './Footer'
//import Navbar from "./Navbar";

const Missons = () => {
  const Iquique = () => {
    let PP1 = document.getElementById("panel_principal_1_desactivado");
    PP1.id = "panel_principal_1_activado";

    let PP2 = document.getElementById("panel_principal_2_activado");
    PP2.id = "panel_principal_2_desactivado";
  };
  const LaSerena = () => {
    let PP1 = document.getElementById("panel_principal_1_activado");
    PP1.id = "panel_principal_1_desactivado";

    let PP2 = document.getElementById("panel_principal_2_desactivado");
    PP2.id = "panel_principal_2_activado";
  };
  return (
    <>
    <div class="container">
      <div class="row">
        <div class="col-2 col-sm-2 col-md-2 col-lg-2 col-xxl-2" id="sidebar">
          <button type="button" onClick={Iquique} id="boton_Iquique">Iquique</button>
          <button type="button" onClick={LaSerena} id="boton_LaSerena">La Serena</button>
        </div>
          <div class="col-9 col-sm-9 col-md-10 col-lg-9 col-xl-9 col-xxl-9" id="panel_principal_1_activado">
          <div class="row">
            <h2 id="titulo_mision">Centro de Atención al Migrante Iquique</h2>
            <div id="texto_mision">
              <p>El trabajo en la Misión Iquique se enfoca principalmente en la prevención de la trata con mujeres, 
                niñas/os migrantes. Al ser una ciudad ubicada en zona fronteriza es clave procurar estrategias de prevención 
                de la trata de persona, por lo cual se ejecuta proyecto binacional entre Chile – Bolivia en conjunto con la 
                fundación Levántate Mujer iniciativa de la Congregación de Nuestra Señora de la Caridad del Buen Pastor en Bolivia.</p>
              <p>Además, a través del centro de atención al migrante se desarrollar las prestaciones de regularización migratoria, 
                intermediación laboral y desarrollo humano. Lo anterior, orientado a empoderar a las personas migrantes en sus procesos
                migratorios desde un enfoque de derechos humanos y espiritualidad del Buen Pastor.</p>
              <span>Directora: Karina Fauste</span><br></br>
              <a href={"https://goo.gl/maps/i5P4Y7yyP7hzuNng9"} target="_blank" id="email_fundación">Dirección: Arturo Pérez Canto # 1265, Iquique.</a><br></br>
              <a href={"mailto:direccionmisioniquique@fundacionmadrejosefa.cl"} id="email_fundación">Email: direccionmisioniquique@fundacionmadrejosefa.cl</a><br></br>
              <span>Teléfono: 572218078</span>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-sm-6 col-md-6"><iframe width="465" height="315" src="https://www.youtube.com/embed/wDFqz5r_owg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
            <div class="col-sm-6 col-md-6"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.9195366795834!2d-70.1377266!3d-20.220664399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9152155383990271%3A0x258e3fd0d78ab204!2sFundaci%C3%B3n%20Madre%20Josefa%2C%20Misi%C3%B3n%20Iquique.!5e0!3m2!1ses-419!2scl!4v1666657453391!5m2!1ses-419!2scl" width="465" height="315" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="google_maps"></iframe></div>
          </div>
          </div>
          <div class="col-9 col-sm-9 col-md-10 col-lg-9 col-xl-9 col-xxl-9" id="panel_principal_2_desactivado">
          <div class="row">
            <h2 id="titulo_mision">Centros de Atención al Migrante, Mujer y Familia</h2>
            <div id="texto_mision">
              <p>1. Centro de Atención Mujer y Familia</p>
              <p>Misión La Serena desarrolla su labor principalmente a través del Centro de Atención Mujer y Familia por una Vida de Buen Trato destinado a víctimas de violencia o abuso. Aquí se presta apoyo psicológico y pastoral con intervenciones individuales y grupales.</p>
              <p>Esta es la información de contacto del Centro de Mujer y Familia:</p>
              <span>Directora: Alejandra Vivanco</span><br></br>
              <a href={"https://goo.gl/maps/r2Eau4PFJqM6dBmJ6"} target="_blank" id="email_fundación">Dirección: Balmaceda 2774, La Pampa, La Serena.</a><br></br>
              <a href={"mailto:ceamujer@fundacionmadrejosefa.cl"} id="email_fundación">Email: ceamujer@fundacionmadrejosefa.cl</a><br></br>
              <span>Teléfono: +56966460871</span><br></br>
              <p>2. Centro de Atención al Migrante</p>
              <p>Además, el trabajo con las personas migrantes se extiende hasta el sector de Tierras blancas, en Coquimbo. Allí se desarrolla diversas iniciativas que procurar dar herramientas para la integración social – cultural de las personas migrantes, principalmente actividades orientadas al desarrollo de capacidades referente a la formación ciudadana, clases de español, talleres de repostería, entre otras actividades.</p>
              <p>Para comunicarte con el Centro de Atención al Migrante, estos son los datos:</p>
              <span>Directora: Karimme Muñoz</span><br></br>
              <a href={"https://goo.gl/maps/r2Eau4PFJqM6dBmJ6"} target="_blank" id="email_fundación">Dirección: Balmaceda 2774, La Pampa, La Serena.</a><br></br>
              <a href={"mailto:direccionmisionlaserena@fundacionmadrejosefa.cl"} id="email_fundación">Email: direccionmisionlaserena@fundacionmadrejosefa.cl</a><br></br>
              <span>Teléfono: +56956915347</span><br></br><br></br>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-sm-6 col-md-6"><iframe width="465" height="315" src="https://www.youtube.com/embed/nga-vOYniBE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
            <div class="col-sm-6 col-md-6"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.920680637464!2d-71.25872868377905!3d-29.924185632656318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9691ca440dff954f%3A0x4e53818c27641e26!2sFundaci%C3%B3n%20Madre%20Josefa!5e0!3m2!1ses-419!2scl!4v1666663420755!5m2!1ses-419!2scl" width="465" height="315" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="google_maps"></iframe></div>
          </div>
          </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Missons;

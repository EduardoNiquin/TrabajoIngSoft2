//create basic footer react component

import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h2 class="text-center">NUESTRAS MISIONES</h2>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h3>Casa Central</h3>
                        <p>Dirección Ejecutiva</p>
                        <a href={"https://goo.gl/maps/i5P4Y7yyP7hzuNng9"} target="_blank" id="email_fundación">Esmeralda 730 · Santiago Centro</a><br></br>
                        <a href={"mailto:direccion.ejecutiva@fundacionmadrejosefa.cl"} id="email_fundación">direccion.ejecutiva@fundacionmadrejosefa.cl</a>
                        <br></br><span>226 386 023</span>
                    </div>
                    <div class="col-md-6">
                        <h3>Centro de Atención al Migrante La Serena</h3>
                        <p>Directora: Karimme Muñoz</p>
                        <a href={"https://goo.gl/maps/wgc2QWqj17fgAUjn7"} target="_blank" id="email_fundación">Balmaceda # 2774 · La Serena</a><br></br>
                        <a href={"mailto:direccionmisionlaserena@fundacionmadrejosefa.cl"} id="email_fundación">direccionmisionlaserena@fundacionmadrejosefa.cl</a>
                        <br></br><span>956 915 347</span>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h3>Centro de Atención al Migrante Talca</h3>
                        <p>Directora: Hna. Carmen Abello</p>
                        <a href={"https://goo.gl/maps/V74d3NZC9akznn3V9"} target="_blank" id="email_fundación">1 Sur #246 · Talca</a><br></br>
                        <a href={"mailto:direccionmisiontalca@fundacionmadrejosefa.cl"} id="email_fundación">direccionmisiontalca@fundacionmadrejosefa.cl</a>
                        <br></br><span>71 221 9185</span>
                    </div>
                    <div class="col-md-6">
                        <h3>Centro de Atención al Migrante Santiago</h3>
                        <p>Directora:</p>
                        <a href={"https://goo.gl/maps/pZaXL85X4SXqG2Wb9"} target="_blank" id="email_fundación">Esmeralda #732 · Santiago</a><br></br>
                        <a href={"mailto:direccionmisionsantiago@fundacionmadrejosefa.cl"} id="email_fundación">direccionmisionsantiago@fundacionmadrejosefa.cl</a>
                        <br></br><span>9 5615 8721</span>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <h3>Centro de Atención al Migrante Iquique</h3>
                        <p>Directora: Karina Fauste</p>
                        <a href={"https://goo.gl/maps/ywcFAvTvKEFuoV7U9"} target="_blank" id="email_fundación">Arturo Pérez Canto #1265, Iquique</a><br></br>
                        <a href={"mailto: direccionmisioniquique@fundacionmadrejosefa.cl"} id="email_fundación"> direccionmisioniquique@fundacionmadrejosefa.cl</a>
                        <br></br><span>572 218 078</span>
                    </div>
                    <div class="col-md-4">
                        <h3>Centro de Atención Mujer y Familia</h3>
                        <p>Directora: Alejandra Vivanco</p>
                        <a href={"https://goo.gl/maps/pZaXL85X4SXqG2Wb9"} target="_blank" id="email_fundación">Balmaceda # 2774 · La Serena</a><br></br>
                        <a href={"mailto: ceamujer@fundacionmadrejosefa.cl"} id="email_fundación"> ceamujer@fundacionmadrejosefa.cl</a>
                        <br></br><span>512 290 943</span>
                    </div>
                    <div class="col-md-4">
                        <h3>Centro de Atención al Migrante Temuco</h3>
                        <p>Director: Guido Mejías Rojas</p>
                        <a href={"https://goo.gl/maps/9KWHBucszkvcc1vM9"} target="_blank" id="email_fundación"> Blanco Encalada #791, Temuco.</a><br></br>
                        <a href={"mailto: direccionmisiontemuco@fundacionmadrejosefa.cl"} id="email_fundación"> direccionmisiontemuco@fundacionmadrejosefa.cl</a>
                        <br></br><span>452 878 178</span>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <img id="logo-footer"src={require('./assets/logo-footer.png')} alt="logo_footer" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <a id ="texto-final-footer"class="text-center">La Fundación Madre Josefa es una iniciativa de la Congregación de Nuestra Señora de la Caridad del Buen Pastor</a>
                    </div>
                </div>
            </div>
        </div>
    )
    }

export default Footer
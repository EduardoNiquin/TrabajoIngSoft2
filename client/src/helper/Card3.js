import React from "react";


function Card3(props){
    return(
     
         <div class="col-md-12">
         <img
            className='imagen-texto'
            src={require(`../assets/${props.imagen}.jpg`)}
            alt="" />
            
            <div class="col-md-8">
             <p className='titulo1'>{props.nombre} </p>
             <p className='texto1'>{props.cargo}</p>
             <p className='texto1'>{props.lugar}</p>
            </div>
         </div>
       
    )
}
export default Card3 ;
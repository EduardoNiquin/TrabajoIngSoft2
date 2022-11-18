import React from "react";

function Card2(props){
    return(
    
         
           <div class="col-md-12">
              <img
                className='imagen-texto1'
                src={require(`../assets/${props.imagen1}.jpg`)}
                alt="" />
              <img
                className= 'imagen-texto2'
                src={require(`../assets/${props.imagen2}.jpg`)}
                alt="" /> 
           </div>
          
    
    )
}
export default Card2;
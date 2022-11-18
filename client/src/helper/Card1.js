import React from "react";
  

function Card1(props){
    return(
     
     
         <div class="col-md-12">
           <p className='titulo'>{props.titulo}</p>
           <p className='texto'>{props.texto}</p>
         </div>
         
       
    )
}
export default Card1 ;
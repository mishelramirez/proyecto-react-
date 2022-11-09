import react from "react";

export default function CartTrabajadoras() {

    Array = [
    
        <> 
         <p>Sandra</p>
            <p>Esta profecional esta capacitada para organizar las uñas de manos y pies</p>
            <img src="./img/manicurista.jpg" alt="foto de manicurista" />
        </>,
        <>
            <p>Leidy</p>
            <p>Esta profecional esta capacitada para organizar el cabello de las mujeres</p>
            <img src="./img/manicurista.jpg" alt="foto de manicurista" />
        </>,
        <>
            <p></p>
            <p>Esta profecional esta capacitada para la barberia</p>
            <img src="./img/manicurista.jpg" alt="foto de manicurista" />
        </>,
    ]
  return(
    <div>
            
            <div>{Array}</div>
           
        </div>
  );
   
}
import React from 'react'
import imagen1 from "./assets/img/rey_atanagildo.png"
import imagen2 from "./assets/img/rey_leogivildo.png"
import styles from "./assets/styles/styles.css"
import { useRef } from 'react'

const Calcular = () => {
    const cambio = 23.16;
    const refCaja=useRef();
    const incrementar = (e) => {
        e.target.innerHTML=Number(e.target.innerHTML) +1;
        if (e.target.innerHTML>=10){
            e.target.innerHTML=1;
        }
        if (e.target.innerHTML>=8){  
            e.target.style.backgroundColor="red";       
    } else {
        e.target.style.backgroundColor="white";
    }
}
    const convertir = () => {
          refCaja.current.innerHTML= Number(refCaja.current.innerHTML)*cambio;
    }
    const cambiarImagen= (j) => {
        if(j.target.src.includes("atanagildo")){
            j.target.src= imagen2;
        }else{
            j.target.src= imagen1;
        }
  }
  const lectura= (e) => {
    refCaja.current.innerHTML=e.target.value
}
  return (
    <>
    <div ref={refCaja} className= "caja" onClick={incrementar}>1</div>
    <button onClick={convertir}>Aceptar</button>
    <div><img onClick={cambiarImagen} src={imagen1} alt="rey"/></div>
    <input onChange={lectura} className="campo"/>
    </>
  );
}  

export default Calcular
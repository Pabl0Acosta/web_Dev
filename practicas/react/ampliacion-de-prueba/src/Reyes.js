import React from "react";
import styles from "./assets/styles/styles.css"
import imagen1 from "./assets/img/rey_atanagildo.png"
import imagen2 from "./assets/img/rey_leogivildo.png"
import imagen3 from "./assets/img/rey_teodorico.png"
import imagen4 from "./assets/img/rey_incognito.png"

const reyes = () => {
  let arrayReyes = ["rey atanagildo","rey leogivildo","rey teodorico"]

  const cambiarNombre = (j) => {
    if (j.target.innerHTML=="Visto"){
        j.target.innerHTML="";      
  } else {
    j.target.innerHTML="Visto";  
   }
  }
  const cambiarImagen= (j) => {
    j.target.parentNode.style.backgroundColor="white";
    if(j.target.src.includes("incognito")){
      j.target.style.visibility= "hidden";
    }
  else{
    j.target.src= imagen4;
  }
}
  return (
    <div className="box">
      <section className="kings" >
        <img onClick={cambiarImagen} src= {imagen1} alt = "rey"/>
        <h1  onClick={cambiarNombre} className="names">{arrayReyes[0]}</h1>
      </section>
      <section className="kings">
        <img onClick={cambiarImagen} src= {imagen2} alt = "rey 2"/>
        <h2  onClick={cambiarNombre} className="names">{arrayReyes[1]}</h2>
      </section>
      <section className="kings">
        <img onClick={cambiarImagen} src= {imagen3} alt = "rey 3"/>
        <h3  onClick={cambiarNombre} className="names">{arrayReyes[2]}</h3>
      </section>
    </div>
  )
}

export default reyes
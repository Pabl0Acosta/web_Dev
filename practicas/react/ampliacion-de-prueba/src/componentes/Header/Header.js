//rafce y click para que cree el componente entero automaticamente
import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <ul className='menu'>
      <li>Home</li>
      <li>Galeria</li>
      <li>Contactos</li>
      <li>FAQ's</li>
    </ul>
  )
}

export default Header
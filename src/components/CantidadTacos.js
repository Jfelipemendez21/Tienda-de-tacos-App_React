import React from 'react'
import {Link} from "react-router-dom"
import carrito from "../imgs/carrito.png"

function CantidadTacos({tacosTotales, cambiarEstiloCarrito}) {
  return tacosTotales > 0
  ?(
    !cambiarEstiloCarrito
    ? 
    <div className='cantidadTacos bg-light'>
        <h3 className='numeroTacosTotales'>{
        tacosTotales
        }</h3>
        <img src="../imgs/carrito" alt=''/>
        <Link to="/tacos/carrito"><img className='imgCarrito' src={carrito} alt=''/></Link>
    </div>
    :
    <div className='cantidadTacosAlCambio bg-light'>
        <h3 className='numeroTacosTotales'>{
        tacosTotales
        }</h3>
        <img src="../imgs/carrito" alt=''/>
        <Link to="/tacos/carrito"><img className='imgCarrito' src={carrito} alt=''/></Link>
    </div>
  )
  :(
    <div className='cantidadTacos'>
      <Link to="/tacos/carrito"><img className='imgCarrito' src={carrito} alt=''/></Link>
    </div>
  )
}

export default CantidadTacos
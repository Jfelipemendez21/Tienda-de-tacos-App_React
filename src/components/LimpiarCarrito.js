import React from 'react'
import carritoVacio from "../imgs/carritoVacio.png"

function LimpiarCarrito({carrito, limpiarCarrito}) {
  return carrito.length > 0 
  ?(
    <div className='my-4'>
        <button className='btn btn-dark' onClick={limpiarCarrito}>Limpiar carrito</button>
    </div>
  )
  :(
    <div className='container m-4'>
        <h3>Carrito de compras triste y vacio :'c</h3>
        <p className='text-danger'>!Aun no has escogido tus tacos!</p>
        <img src={carritoVacio} alt=''></img>
    </div>
  )
}

export default LimpiarCarrito
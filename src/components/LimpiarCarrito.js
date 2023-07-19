import React from 'react'

function LimpiarCarrito({carrito, limpiarCarrito}) {
  return carrito.length > 0 
  ?(
    <div>
        <button onClick={limpiarCarrito}>Limpiar carrito</button>
    </div>
  )
  :(
    <div>
        <h3>Carrito vacio</h3>
        <p>Imagen de carrito triste y vacio :v</p>
    </div>
  )
}

export default LimpiarCarrito
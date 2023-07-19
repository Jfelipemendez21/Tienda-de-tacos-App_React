import React from 'react'

function PrecioTotal({precioTotal}) {
  return precioTotal > 0 
  ?(
    <div>
        <h4>Total a pagar:</h4>
        <h4>${precioTotal}.00</h4>
    </div>
  ): 
  (
    <div></div>
  )
}

export default PrecioTotal
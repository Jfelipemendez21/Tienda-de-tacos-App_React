import React from 'react'

function PrecioTotal({precioTotal}) {
  return precioTotal > 0 
  ?(
    <div className='my-4'>
        <h4>Total a pagar:</h4>
        <h4 className='text-warning'>${precioTotal}.00</h4>
        <button className='btn btn-success'>Efectuar compra</button>
    </div>
  ): 
  (
    <div></div>
  )
}

export default PrecioTotal
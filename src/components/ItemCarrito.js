import React from 'react'

function ItemCarrito({data, deleteToProduct, deleteToAllProducts}) {
  return (
    <div className='itemCarrito'>
        <h3>{data.nombre}</h3>
        <h3>${data.precio}.00 x {data.quantity}</h3>
        <button onClick={()=>{
            deleteToProduct(data.nombre)
        }}>Eliminar uno</button>
        <button onClick={()=>{
            deleteToAllProducts(data.nombre)
        }}>Eliminar todos</button>
    </div>
  )
}

export default ItemCarrito
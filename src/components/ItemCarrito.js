import React from 'react'

function ItemCarrito({data, deleteToProduct, deleteToAllProducts, AddCarrito}) {
  return (
    <div className='itemCarrito m-3 p-4'>
        <h3>{data.nombre}</h3>
        <h3>${data.precio}.00 x {data.quantity}</h3>
        <div>
          <button className='btn btn-info m-2' onClick={()=>{
            AddCarrito(data.nombre)
          }}>+</button>
          <button className='btn btn-warning m-2' onClick={()=>{
            deleteToProduct(data.nombre)
          }}>-</button>
        </div>
        <br></br>
        <button className='btn btn-danger m-2' onClick={()=>{
            deleteToAllProducts(data.nombre)
        }}>Eliminar todos</button>
    </div>
  )
}

export default ItemCarrito
import React from 'react'
import {Link} from "react-router-dom"; 


function Products({data, AddCarrito}) {

  return(
        <div className='ProductCard m-3'>
            <h3><b>{data.nombre}</b></h3>
            <h4>Precio: ${data.precio}.00</h4>
            <img className='imagenes mx-auto d-block' src={data.imagen} alt=""/>
            <br></br>
            <Link className='container d-flex' to={`/tacos/ingredientes/${data.nombre}`}>Ver detalles del taco</Link>
            <br></br>
            <button className='btn btn-warning' onClick={()=>{
                AddCarrito(data.nombre); 
            }}>Agregar al carrito</button>
        </div>
  )
}

export default Products
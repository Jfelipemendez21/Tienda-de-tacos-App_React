import React from 'react'
import {useParams} from "react-router-dom";

function Detalles({data}){
    let {nombre} = useParams();
    let taco1 = data.find(product =>( 
        product.nombre===nombre
    ))
    return (
        <div className='p-3 m-4'>
            <h2>Taco de {taco1.nombre}</h2>
            <img className='mx-auto d-block imgDetalles' src={taco1.imagen} alt=""/>
            <h3 className='m-3'>Ingredientes:</h3>
            <ul>
                {taco1.ingredientes.map((ingrediente)=>(
                    <li key={ingrediente}>{ingrediente}</li>
                    ))}
            </ul>
            <h3 className='m-3'>Preparacion:</h3>
            <span>{taco1.preparacion}</span>
            <br />
            <h3 className='m-3'>Historia:</h3>
            <span>{taco1.historia}</span>
      </div>
    )
}

export default Detalles
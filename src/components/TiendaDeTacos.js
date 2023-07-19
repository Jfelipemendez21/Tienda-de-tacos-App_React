import React from 'react'
import {Link} from "react-router-dom"

function TiendaDeTacos() {
  return (
    <div>
        <h1>Bienvenidos a la mejor tienda de tacos</h1>
        <Link to="/tacos">Antojate con nuestros taquitos..</Link>
    </div>
  )
}

export default TiendaDeTacos
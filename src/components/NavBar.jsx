import React from 'react'
import { Link } from 'react-router-dom'
import CantidadTacos from './CantidadTacos'

function NavBar({tacosTotales, cambiarEstiloCarrito, productos}) {
  return (
    <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div class="container-fluid">
    <Link class="navbar-brand mx-4" to="/">Home</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <Link class="nav-link mx-4" to="/tacos">Tienda</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Nuestros tacos</a>
          <div class="dropdown-menu">
            {productos.map((taco)=>
              <Link class="dropdown-item mx-4" to={`tacos/ingredientes/${taco.nombre}`}>{taco.nombre}</Link>
            )}
          </div>
        </li>
      </ul>
      <div>
      <CantidadTacos tacosTotales={tacosTotales} cambiarEstiloCarrito={cambiarEstiloCarrito}/>
      </div>
    </div>
  </div>
</nav>
  )
}

export default NavBar
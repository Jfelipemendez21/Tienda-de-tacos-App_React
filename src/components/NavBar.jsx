import React from 'react'
import { Link } from 'react-router-dom'
import CantidadTacos from './CantidadTacos'

function NavBar({tacosTotales, cambiarEstiloCarrito, productos}) {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand mx-4" to="/">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link mx-4" to="/tacos">Tienda</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Nuestros tacos</a>
          <div className="dropdown-menu">
            {productos.map((taco)=>
              <Link className="dropdown-item" to={`tacos/ingredientes/${taco.nombre}`}>{taco.nombre}</Link>
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
import React, {useReducer, useState, useEffect} from 'react'
import {TYPES} from "../actions/ActionCarrito"
import {CarritoReducerFunction, initialStateCarrito} from "../reducer/CarritoReducer";
import ItemCarrito from './ItemCarrito';
import Products from './Products';
import {Routes, Route} from "react-router-dom"; 
import TiendaDeTacos from './TiendaDeTacos';
import Detalles from './Detalles';
import PrecioTotal from './PrecioTotal';
import LimpiarCarrito from './LimpiarCarrito';
import Spinner from './Spinner';
import NavBar from './NavBar';
import Footer from './Footer';


function CarritoDeCompras() {
    let [state, dispatch] = useReducer(CarritoReducerFunction, initialStateCarrito); 
    let {productos, carrito}= state;
    const [precioTotal, setPrecioTotal] = useState(0);
    const [tacosTotales, setTacosTotales] = useState(0);
    const [loading, setLoading] = useState(true);
    const [cambiarEstiloCarrito, setCambiarEstiloCarrito] = useState(false)

    const AddCarrito=(nombre)=>{
        dispatch({type: TYPES.agregarAlCarrito, payload: nombre})
    }
    const deleteToProduct=(nombre)=>{
        dispatch({type: TYPES.eliminarUno, payload: nombre})
    }
    const deleteToAllProducts=(nombre)=>{
        dispatch({type: TYPES.eliminarTodos , payload: nombre})
    }
    const limpiarCarrito=()=>{
        dispatch({type: TYPES.limpiarCarrito})
    }
    
    useEffect(() => {
        setTacosTotales(
            carrito.reduce((suma, num) => suma + parseInt(num.quantity), 0) 
        )
        setPrecioTotal(
            carrito.reduce((suma, num) => suma + parseFloat(num.precio*num.quantity), 0)
        )
        setCambiarEstiloCarrito(true);
        setTimeout(()=>{
            setCambiarEstiloCarrito(false);
        },500)
    }, [carrito])

    useEffect(() => {
        fetch("https://api-tacos.vercel.app/api-tacos/tacos")
            .then((res)=> res.json())
            .then((data)=> {
                dispatch({type: TYPES.obtenerProductos, payload: data})
            })
            .catch((err)=> console.log(err))

        setTimeout(()=>{
            setLoading(false)
        },3000)
    }, [])

    
    
  return (
    <div>
        <div>
            <NavBar productos={productos} tacosTotales={tacosTotales} cambiarEstiloCarrito={cambiarEstiloCarrito} /> 
            <Routes>
                <Route index path="/" element={
                    <TiendaDeTacos/>
                }></Route>
                <Route path='/tacos' element={
                    <div className='container m-3 p-3'>
                        <h1>Nuestros tacos</h1>
                        {
                            loading ? 
                            <Spinner />
                            : 
                            <div className='containerProductos d-flex'>
                                {
                                productos.map((product)=>(  
                                <Products key={product.id} data={product} AddCarrito={AddCarrito} loading={loading}/> 
                                ))
                                }
                            </div>
                        }
                    </div>}>
                 </Route>
                 <Route path="/tacos/ingredientes/:nombre" element={ <Detalles data={productos} /> }>
                 </Route>
                <Route path="/tacos/carrito" element={
                    <div>
                        <h2>Carrito de tacos</h2>
                        {carrito.map((producto, index)=>(
                        <ItemCarrito key={index} data={producto} deleteToProduct={deleteToProduct} deleteToAllProducts={deleteToAllProducts} carrito={carrito}/>
                        ))}
                        <PrecioTotal precioTotal={precioTotal}/>
                        <LimpiarCarrito carrito={carrito} limpiarCarrito={limpiarCarrito} />
                    </div>
                    
                    }>
                </Route>
            </Routes>
            <Footer />
            <br></br>
        </div>
    </div>
  )
}

export default CarritoDeCompras
import {TYPES} from "../actions/ActionCarrito";
    

export const initialStateCarrito={
    productos: [],
    carrito: [],
}

export const CarritoReducerFunction= (state, action)=>{
    switch(action.type){
        case TYPES.obtenerProductos:
          return {...state, productos: action.payload}

        case TYPES.agregarAlCarrito:
          let newTaco= state.productos.find((taco)=>
            taco.nombre === action.payload
          ); 
          let findTaco= state.carrito.find((taquito)=>
            newTaco.nombre === taquito.nombre 
          );

          return findTaco 
          ?{
            ...state, 
            carrito: state.carrito.map((taco)=>
              taco.nombre===newTaco.nombre
              ?{...taco, quantity: taco.quantity + 1}
              : taco
              ),
          }
          :{
            ...state, carrito: [...state.carrito, {...newTaco, quantity: 1}],
          }

        case TYPES.eliminarUno:
          const buscaTaco= state.carrito.find((taco)=>
            taco.nombre === action.payload
          )

          return buscaTaco.quantity > 1
          ?{
            ...state, 
            carrito: state.carrito.map((taco)=>
            buscaTaco.nombre===taco.nombre
              ?{...taco, quantity: taco.quantity - 1}
              : taco
            )
          } 
          :{
            ...state, 
            carrito: state.carrito.filter((taco)=>
            taco.nombre !== buscaTaco.nombre)
          }
        case TYPES.eliminarTodos:
          let buscarTaco= state.productos.find((taco)=>
            taco.nombre === action.payload
          );

          return {
            ...state, 
            carrito: state.carrito.filter((taco)=>
            taco.nombre !== buscarTaco.nombre)
          } 
        case TYPES.limpiarCarrito:
          return initialStateCarrito
        default: 
        
    }
}
 
import './App.css';
import CarritoDeCompras from './components/CarritoDeCompras';
import {BrowserRouter} from "react-router-dom";
import "./styles/bootstrap.min.css"

function App() {
  return (
    <BrowserRouter>
      <CarritoDeCompras />
    </BrowserRouter>
  );
}

export default App;

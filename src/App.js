import React, { useState } from 'react';

import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import Producto from './components/Producto';

function App() {

  // crear listado de productos para mostrar en la aplicación
  const [ productos, guardarProductos ] = useState([
    { id: 1, nombre: 'Remeras de ReactJS', precio: 500 },
    { id: 2, nombre: 'Remeras de NodeJS', precio: 1000 },
    { id: 3, nombre: 'Remeras de JavaScript', precio: 800 },
    { id: 4, nombre: 'Remeras de Python', precio: 900 },
  ]);


    // Obtener fecha actual
    const fecha = new Date().getFullYear()


  return (
    <div>
        <div className="App">
          <Header
            titulo="Tienda Virtual"
           />
          <h1>Lista de Remeras</h1>
          { productos.map(producto => (
           <Producto
              producto={producto}
            />

          ))}
          <Footer
           fecha={fecha}
           />
        </div>
      </div>
  );
}

export default App;

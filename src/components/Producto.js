import React from 'react'


const Producto = ({ producto }) => {
    return (
        <div>
            <h2>{producto.nombre}</h2>
            <p>{producto.precio}</p>
        </div>
      );
}
 
export default Producto;
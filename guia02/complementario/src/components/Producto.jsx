import React from 'react'
const Producto = ({ producto, index, deleteProducto }) => {
    return (
        <>
            <div className="list">
                <h3>{producto.cant} - {producto.producto}</h3>
                <button className="btn-delete" onClick={() => deleteProducto(index)}>X</button>
            </div>
        </>
    )
}
export default Producto
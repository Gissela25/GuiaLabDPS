import React, { useState } from 'react'
import Producto from './Producto'

const Form = () => {

    const [producto, setProducto] = useState()
    const [productos, setProductos] = useState([
         {producto: 'Manzanas',
        cant: '4'},
         {producto: 'Jabon',
        cant: '2'},
         {producto: 'Papel Toalla', 
        cant: '4'}
    ])

    //const handleChange = e => setTodo({ [e.target.name]: e.target.value })
    const handleChange = e => {
        let all = {}; 
        all[e.target.name] = e.target.value;
        setProducto({...producto,...all})
    };
    const handleClick = e => {
        if (Object.keys(producto.producto).length === 0 || producto.producto.trim() === '') {
            alert('el campo no puede estar vacio')
            return
        
        }
        if (Object.keys(producto.cant).length === 0 || producto.cant.trim() === ''){
            alert('el campo no puede estar vacio')
            return
        }
        setProductos([...productos, producto])
    }

    const deleteProducto = indice => {
        const newProductos = [...productos]
        newProductos.splice(indice, 1)
        setProductos(newProductos);
    }


    return (
        <>

            <form onSubmit={e => e.preventDefault()}>
                <label>Agregar Producto</label><br />
                <input type="text" name="producto" onChange={handleChange} />
                <label>Agregar Cantidad</label><br />
                <input type="text" name="cant" onChange={handleChange} />
                <button onClick={handleClick}>Agregar</button>
            </form>
            {
                productos.map((value, index) => (<Producto producto={value} key={index} index={index} deleteProducto={deleteProducto} />))

            }


        </>
    )
}
export default Form

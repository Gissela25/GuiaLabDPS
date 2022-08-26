import React, { useState } from 'react'
import Producto from './Producto'

const Form = () => {

    const [producto, setProducto] = useState()
    const [productos, setProductos] = useState([
         {producto: 'todo 1',
        cant: '1'},
         {producto: 'todo 2',
        cant: '2'},
         {producto: 'todo 3', 
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
                <label>Agregar tarea</label><br />
                <input type="text" name="producto" onChange={handleChange} />
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

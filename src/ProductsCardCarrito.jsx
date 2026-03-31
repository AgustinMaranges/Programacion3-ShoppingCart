import { useState } from "react"

const ProductsCardCarrito = ({code,name,price,listaCarrito,setListaCarrito,precioFinalCarrito,setPrecioFinalCarrito}) => {

    const[eliminarProductCarrito,setEliminarProductCarrito] = useState(false)

    const precioActualCarrito = precioFinalCarrito

    const handleEliminarProductCarrito = () => {
        setEliminarProductCarrito(!eliminarProductCarrito)
        const precioCarrito = precioActualCarrito-price
        setListaCarrito(listaCarrito.filter((product) => product.code !== code))
        setPrecioFinalCarrito(precioCarrito)
    }
    

    return(
        <div className="card carrito-card">
            <h2 style={{color: "white"}}> {code} </h2>
            <h2 style={{color: "white"}}> {name} </h2>
            <h2 style={{color: "white"}}> {price} </h2>
            <button onClick={handleEliminarProductCarrito}> Eliminar </button>
            <h1 style={{color:"#3FE5FC"}}>---------------------------</h1>
        </div>
    );

}



export default ProductsCardCarrito;
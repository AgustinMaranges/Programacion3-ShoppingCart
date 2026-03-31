import { useState } from "react"


const ProductCard = ({code,name,price,isAvailable,listaCarrito,setListaCarrito,precioFinalCarrito,setPrecioFinalCarrito}) => {

    const enCarritoCache = () => {
        return listaCarrito.some((product) => product.code === code)
    }

    const[enCarrito,setCarrito] = useState(enCarritoCache())

    const handleCarrito = () => {
        if(!isAvailable) return
        setCarrito(!enCarrito)

        const productData = {
            code,
            name,
            price
        }

        const precioActualCarrito = precioFinalCarrito 

        if(!enCarrito){
            const precioCarrito = precioActualCarrito+price
            setListaCarrito([...listaCarrito,productData])
            setPrecioFinalCarrito(precioCarrito)
        }else{
            const precioCarrito = precioActualCarrito-price
            setListaCarrito(listaCarrito.filter((product) => product.code !== code))
            setPrecioFinalCarrito(precioCarrito)
        }
    }

    return(
        <div className="card" style={{backgroundColor: isAvailable ? "green":"red"}}>
            <h2 style={{color: "white"}}> {code} </h2>
            <h2 style={{color: "white"}}> {name} </h2>
            <h2 style={{color: "white"}}> {price} </h2>
            <h2 style={{color: "white"}}> {isAvailable} </h2>
            <button onClick={handleCarrito}> Estado: {enCarrito ? "En Carrito" : "No en Carrito"} </button>
        </div>
    );
}

export default ProductCard;
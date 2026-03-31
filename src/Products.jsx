import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductsCardCarrito from "./ProductsCardCarrito";

const Products = ({allProducts}) => {
    
    const ListAllProducts = allProducts
    const[listaCarrito, setListaCarrito] = useState([]);
    const[enDivCarrito, setDivCarrito] = useState(false)
    const[precioFinalCarrito, setPrecioFinalCarrito] = useState(0)

    const handleComprar = () => {
        setListaCarrito([])
        setPrecioFinalCarrito(0)
    }

    const handleDivCarrito = () => {
        setDivCarrito(!enDivCarrito)
    }

            if(!enDivCarrito) { 
                return(
                    <div className="products-grid">
                        {ListAllProducts.map((product) =>(

                            <ProductCard
                                key={product.code} 
                                code = {product.code}
                                name = {product.name}
                                price = {product.price}
                                isAvailable = {product.isAvailable}
                                listaCarrito={listaCarrito}
                                setListaCarrito={setListaCarrito}
                                precioFinalCarrito={precioFinalCarrito}
                                setPrecioFinalCarrito={setPrecioFinalCarrito}
                            />

                        ))}
                        <button onClick={handleDivCarrito}>Ir al carrito</button>
                    </div> 
                    )  
            }else{
                return(
                    <div className="products-grid"> 

                        <h1>CARRITO</h1>
                        <h1 style={{color:"#3FE5FC"}}>---------------------------</h1>
                        {listaCarrito.map((product) =>(

                            <ProductsCardCarrito
                                key={product.code} 
                                code = {product.code}
                                name = {product.name}
                                price = {product.price}
                                listaCarrito={listaCarrito}
                                setListaCarrito={setListaCarrito}
                                precioFinalCarrito={precioFinalCarrito}
                                setPrecioFinalCarrito={setPrecioFinalCarrito}
                            />
                        ))}
                        <h4 style={{color:"#3FE5FC"}}>***************************</h4>
                        <h3>| Total: {precioFinalCarrito} |</h3>
                        <h4 style={{color:"#3FE5FC"}}>***************************</h4>

                        <button onClick={handleComprar}>COMPRAR</button>
                        <button onClick={handleDivCarrito}>Volver a comprar</button>
                    </div>
                )
            }
}



export default Products;
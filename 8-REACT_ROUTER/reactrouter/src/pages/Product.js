import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { Link } from "react-router-dom"

const Product = () => {

    // 4 - rota Dinâmica
    const { id } = useParams()

    // 5 - Carregamneto dado individual
    const url ="http://localhost:3000/products/" + id

    const {data: product, loading, error} = useFetch(url)

    console.log(product)

    return (
        <div>
            <p>ID do produto: {id}</p>
            {error && <p>Ocorreu um erro</p>}
            {loading && <p>Carregando Produto</p>}
            {product && (
                <div>
                    <h1>{product.name}</h1>
                    <p>R${product.price}</p>
                    {/* 6 - Nested Routes */}
                    <Link to={`/products/${product.id}/info`}>Mais Informações</Link>
                </div>
            )}
        </div>
    )   
}

export default Product
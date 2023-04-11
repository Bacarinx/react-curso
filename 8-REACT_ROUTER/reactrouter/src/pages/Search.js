import { useSearchParams, Link } from "react-router-dom"
import { useFetch } from '../hooks/useFetch'

const Search = () => {

    const [searchParamns] = useSearchParams()

    const url = "http://localhost:3000/products?" + searchParamns

    const {data: items, loading, error} = useFetch(url)

  return (
    <div>
        <h1>Resultado disponivel:</h1>
        <ul className="products">
            {items && 
            items.map((item) => (
                <li key={item.id}>
                    <h2>{item.name}</h2>
                    <p>{item.price}</p>
                    <Link to={`/products/${item.id}`}>Detalhes</Link>
                </li>
            ))
            }
        </ul>
    </div>
  )
}

export default Search
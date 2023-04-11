import {useState, useEffect} from 'react'

//4 - custom hook
export const useFetch = (url) => {
    const [data, setData] = useState(null)

    // 5 - refatorando Post
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    // 6 - loading state
    const [loading, setLoading] = useState(false)

    // 7 - Tratando erros
    const [error, setError] = useState(null)

    // 8 - desafio 6 
    const [itemId, setItemId] = useState(null) 

    const httpConfig = (data, method) => {
        if(method === "POST") {
            setConfig({
                method: method,
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
            setMethod(method)

        } else if( method === "DELETE") {
            setConfig({
                method: method,
                headers: {
                    "Content-type": "application/json"
                }
            })
            setMethod(method)
            setItemId(data)
        }
    }

    // 
    useEffect(() => {
        const fetchData = async () => {
            //6 loading
            setLoading(true) //inicio periodo de loading

            try{
                const res = await fetch(url) //requisição do bd

                const json = await res.json() //tranformando a info em Json

                setData(json) //setando a vaviavel data com nome e price

            } catch (error){
                setError("Houve algum erro no carregamento de dados")
            }
            setLoading(false) //fim periodo de loading
        };

        fetchData()
    }, [url, callFetch])

    // 5 - refatorando POST
    useEffect(() => {
        const httpRequest = async () => {
            if(method === "POST") {

                let fetchOptions = [url, config]
    
                const res = await fetch(...fetchOptions)
    
                const json = await res.json()
    
                setCallFetch(json)
            } else if (method === "DELETE") {

                const deleteUrl = `${url}/${itemId}`
                
                const res = await fetch(deleteUrl, config)

                const json = await res.json()

                setCallFetch(json)
            }
        }
        httpRequest()
    }, [config, method, url])
    return {data, httpConfig, loading, error};
}
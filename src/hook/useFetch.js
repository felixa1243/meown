import {useEffect, useState} from "react";

const useFetch = (query, params) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const fetchQuery = async () => {
        try {
            setLoading(true)
            const res = params ? await query(params) : await query
            setData(res.data)
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchQuery()
    }, [])
    return [data, error, loading]
}
export default useFetch
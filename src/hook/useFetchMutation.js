import {useState} from "react";

const useFetchMutation = (mutation, onSuccess) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchMutation = async (data, params) => {
        try {
            setLoading(true)
            const result = params ? await mutation(params, data) : await mutation(data)
            onSuccess?.(result)
        } catch (e) {
            setError(e)
        } finally {
            setLoading(false)
        }
    }
    return [error, loading, fetchMutation]
}
export default useFetchMutation
import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = (url) => {

    const [state, setState] = useState()

    useEffect(() => {
        axios.get(url)
            .then(res => setState(res.data))
            .catch(err => console.log(err))

    }, [url])

    return state
}

export default useFetch
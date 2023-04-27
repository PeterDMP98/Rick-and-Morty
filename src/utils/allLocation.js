import useFetch from "../hooks/useFetch"

const allLocation = () => {

    const allLocation = []

    for (let i = 1; i <= 126; i++) {
        const location = useFetch(`https://rickandmortyapi.com/api/location/${i}`)
        allLocation.push(location?.name)
    }

    return allLocation
}

export default allLocation
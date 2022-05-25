import { useEffect, useState } from "react"

const useMostSell = () => {
    const [mostSells, setMostSells] = useState();

    useEffect(() => {
        fetch("https://shrouded-brook-15177.herokuapp.com/mostsell")
            .then(res => res.json())
            .then(data => setMostSells(data))
    }, [])
    return [mostSells, setMostSells]
}
export default useMostSell;
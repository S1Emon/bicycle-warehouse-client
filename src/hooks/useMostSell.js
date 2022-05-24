import { useEffect, useState } from "react"

const useMostSell = () => {
    const [mostSells, setMostSells] = useState();

    useEffect(() => {
        fetch("http://localhost:5000/mostsell")
            .then(res => res.json())
            .then(data => setMostSells(data))
    }, [])
    return [mostSells, setMostSells]
}
export default useMostSell;
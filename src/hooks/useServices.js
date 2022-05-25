import { useEffect, useState } from "react"

const useServices = () => {
    const [services, setServices] = useState();

    useEffect(() => {
        fetch('https://shrouded-brook-15177.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return [services, setServices]
}
export default useServices;
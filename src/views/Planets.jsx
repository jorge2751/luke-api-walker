import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Planets = () => {
    const {id} = useParams()
    const [planet, setPlanet] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then(response=>{
            setPlanet(response.data)
        })
        .catch(()=>navigate('/error'))
    }, [id])

    return (
        <div>
            {
                planet?
                <div>
                    <h2>{planet.name}</h2>
                    <p><b>Climate</b>: {planet.climate}</p>
                    <p><b>Terrain</b>: {planet.terrain}</p>
                    <p><b>Surface Water</b>: {planet.surface_water > 0? 'true' : 'false'}</p>
                    <p><b>Population</b>: {planet.population}</p>
                </div>:
                <h1>Planet not found</h1>
            }
        </div>
    )
}

export default Planets
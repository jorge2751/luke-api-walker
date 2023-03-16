import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const People = () => {
    const {id} = useParams()
    const [person, setPerson] = useState()
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(response=>{
            setPerson(response.data)
        })
        .catch(()=>navigate('/error'))
    }, [id])

    return (
        <div>
            {
                person?
                <div>
                    <h2>{person.name}</h2>
                    <p><b>Height</b>: {person.height} cm</p>
                    <p><b>Mass</b>: {person.mass} kg</p>
                    <p><b>Hair Color</b>: {person.hair_color}</p>
                    <p><b>Skin Color</b>: {person.skin_color}</p>
                </div>:
                <h1>No person found</h1>
            }
        </div>
    )
}

export default People
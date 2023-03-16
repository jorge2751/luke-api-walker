import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchForm = (props) => {

    const [category, setCategory] = useState()
    const [id, setId] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/${category}/${id}`)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Search for:</label>
                <select onChange={(e) => setCategory(e.target.value)} name="category" value={category}>
                    <option hidden>Select Category</option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <label>ID:</label>
                <input type="number" style={{width:'40px'}} onChange={(e) => setId(e.target.value)} value={id}/>
                <input type="submit" value="Search"/>
            </form>
        </div>
    )
}

export default SearchForm
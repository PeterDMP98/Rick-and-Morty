import './styles/formFilter.css'
import allLocation from '../utils/allLocation'
import { useState } from 'react'

const FormFilter = ({ setNameLocation, setStarCurrentPage, setLastCurrentPage }) => {

    const locations = allLocation()
    const [locationName, setLocationName] = useState([])
    const [optionLocation, setOptionLocation] = useState()

    const handleSearch = e => {
        e.preventDefault()
        setNameLocation(e.target.locationInput.value)
        setStarCurrentPage(1)
        setLastCurrentPage(8)
        setOptionLocation()
    }

    const changeInput = (e) => {
        setLocationName(locations.filter(name => !name.toLowerCase().indexOf(e.target.value)));
        if (e.target.value == []) {
            
            setLocationName([])
        }
    }

    const option = e => {
        setOptionLocation(e.target.id)
        setLocationName([])
        setNameLocation(e.target.id)
        setOptionLocation()
    }

    return (
        <div className='filter'>
            <form className='filter__form' onSubmit={handleSearch}>
                <div className='filter__input' >
                    <input autoComplete='off' value={optionLocation} onChange={changeInput} id='locationInput' type="text" />
                    <ul className='filter__list'>
                        {
                            locations[2] ? locationName.sort().map(name => (
                                <li onClick={option} id={name} className='filter__item' key={name}>{name}</li>
                            ))
                                : <div></div>
                        }
                    </ul>
                </div>
            </form>
        </div>

    )
}

export default FormFilter
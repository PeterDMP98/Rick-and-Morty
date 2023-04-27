import React, { useEffect, useState } from 'react'
import LocationInfo from './LocationInfo'
import Residentcard from './Residentcard'
import './styles/maincontent.css'
import Pagination from './Pagination'

const MainContent = ({ locations, starCurrentPage, lastCurrentPage }) => {

    const [residents, setResidents] = useState()
    const [totalCharacter, setTotalCharacter] = useState()

    const [characterPerPage, setCharacterPerPage] = useState(8)
    const [currentPage, setCurrentPage] = useState(1)

    const lastIndex = currentPage * characterPerPage;
    const firstIndex = lastIndex - characterPerPage;

    const residentList = () => {
        setTotalCharacter(locations?.results[0].residents.length);
        setResidents(locations?.results[0].residents)
    }

    useEffect(() => {
        if (starCurrentPage) {
            setCharacterPerPage(lastCurrentPage)
            setCurrentPage(starCurrentPage)
        }

    }, [starCurrentPage])


    useEffect(() => {
        residentList()
    }, [locations])

    return (
        <>
            <LocationInfo locations={locations} />
            <div className='resident-container'>
                {
                    locations?.results[0].residents.map(url => (
                        <Residentcard key={url} url={url} />
                    )).slice(firstIndex, lastIndex)
                }
            </div>
            <Pagination
                characterPerPage={characterPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalCharacter={totalCharacter}
            />
        </>
    )
}

export default MainContent
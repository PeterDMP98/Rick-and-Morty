import { useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormFilter from './components/FormFilter'
import MainContent from './components/MainContent'


function App() {

  const [nameLocation, setNameLocation] = useState("Earth (C-137)")

  const [starCurrentPage, setStarCurrentPage] = useState()
  const [lastCurrentPage, setLastCurrentPage] = useState()

  const locations = useFetch(`https://rickandmortyapi.com/api/location/?name=${nameLocation}`)

  return (
    <div className='app'>
      <h1 className='app__title'>Rick and Morty</h1>
      <FormFilter
        setNameLocation={setNameLocation}
        setStarCurrentPage={setStarCurrentPage}
        setLastCurrentPage={setLastCurrentPage}
      />

      <MainContent
        locations={locations}
        starCurrentPage={starCurrentPage}
        lastCurrentPage={lastCurrentPage}
      />
    </div>
  )
}

export default App

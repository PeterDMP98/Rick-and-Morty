import './styles/locationInfo.css'

const LocationInfo = ({ locations }) => {

  return (
    <article className='location'>
      <h2 className='location__name'>{locations?.results[0].name}</h2>

      <ul className='location__list'>

        <li className='location__item'>
          <span className='location__label'>Type:</span>
          <span className='location__value'>{locations?.results[0].type}</span>
        </li>
        <li className='location__item'>
          <span className='location__label'>Dimension:</span>
          <span className='location__value'>{locations?.results[0].dimension}</span>
        </li>
        <li className='location__item'>
          <span className='location__label'>Population:</span>
          <span className='location__value'>{locations?.results[0].residents.length}</span>
        </li>
      </ul>
    </article>
  )
}

export default LocationInfo
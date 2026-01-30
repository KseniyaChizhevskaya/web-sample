import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCars } from '../../utils/api/requests'
import CarComponent from './components/CarComponent'

export default function CarsCatalog() {
  const [cars, setCars] = useState([])
  const navigate = useNavigate()

  const handleButtonClick = (carId) => {
    navigate(`/car/${carId}`)
  }
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await getCars()
        setCars(data)
      }
      catch (error) {
        console.error('Ошибка загрузки машин:', error)
      }
    }

    fetchCars()
  }, [])

  return (
    <div
      style={{
        width: '960px',
        height: '920px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 298.666px)',
        gap: '48px',
        padding: '20px',
      }}
    >
      {cars.data?.data.map(car => (
        <CarComponent
          key={car.id}
          id={car.id}
          brand={car.brand}
          model={car.model}
          name={car.name}
          transmission={car.transmission}
          engine={car.engine}
          rentalPrice={car.rentalPrice}
          media={car.media}
          price={car.price}
          handleButtonClick={handleButtonClick}
        />
      ))}
    </div>
  )
}

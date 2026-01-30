import { useEffect, useState } from 'react';
import { getCars } from '../utils/api/requests';
import { baseURL } from '../utils/constants/baseURL';
import { useNavigate } from 'react-router-dom';

export default function CarCatalog() {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  const handleButtonClick = (carId) => {
    navigate(`/car/${carId}`);
  };
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await getCars();
        setCars(data);
      } catch (error) {
        console.error('Ошибка загрузки машин:', error);
      }
    };

    fetchCars();
  }, []);

  return (
    <div
      style={{
        width: '960px',
        height: '920px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 298.666px)',
        gap: '48px',
        padding: '20px'
      }}
    >
      {cars.data?.data.map((car) => (
        <div
          key={car.id}
          style={{
            width: '298.666px',
            height: '436px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}
        >
          <img
            src={`${baseURL}${car.media[0].url}`}
            alt={`${car.brand} ${car.model || car.name}`}
            style={{
              width: '299px',
              height: '221px',
              objectFit: 'cover',
              borderRadius: '8px',
              marginBottom: '12px',
              background: '#f5f5f5',
              border: '1px solid #ddd'
            }}
          />

          <div>
            <h3 style={{ margin: '0', fontSize: '18px', fontWeight: 600 }}>
              {car.brand}
              {car.model}
            </h3>
            <p style={{ margin: '8px 0 0', fontSize: '14px', color: '#666' }}>
              {car.transmission},{car.engine}
            </p>
            <p style={{ margin: '8px 0 0', fontSize: '16px', fontWeight: 700 }}>{car.price}₽</p>
            <p style={{ margin: '4px 0 0', fontSize: '14px', color: '#666' }}>
              {car.rentalPrice}
              за 14 дней
            </p>
          </div>

          <button onClick={() => handleButtonClick(car.id)} className='button-choice'>
            <span>Выбрать</span>
          </button>
        </div>
      ))}
    </div>
  );
}

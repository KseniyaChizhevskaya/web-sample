import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCarById } from '../../utils/api/requests/getCar';
import { baseURL } from '../../utils/constants/baseURL';

function CarPage() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCar = async () => {
      try {
        setLoading(true);
        const data = await getCarById(id);
        setCar(data?.data?.data || null);
      } catch (err) {
        console.error('Ошибка загрузки машины:', err);
        setError('Не удалось загрузить данные автомобиля');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCar();
    }
  }, [id]);

  if (loading) {
    return <div className='car-details'>Загрузка...</div>;
  }

  if (error || !car) {
    return <div className='car-details'>Автомобиль не найден</div>;
  }

  const mainImage = `${baseURL}${car.media[0].url}`;
  const media = Array.isArray(car.media) ? car.media : [];

  return (
    <div className='car-details'>
      <div className='back-link'>
        <a onClick={() => navigate('/')} href='#' className='back-button'>
          Назад
        </a>
      </div>

      <div className='car-content'>
        <div className='image-section'>
          <div className='main-image'>
            <img src={mainImage} alt={car.name || 'Автомобиль'} />
          </div>
          <div className='thumbnail-row'>
            {media.map((src, idx) => (
              <div key={idx} className='thumbnail'>
                <img src={baseURL + src.url} alt={`Thumbnail ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className='info-section'>
          <h1>{car.name}</h1>

          <section className='specs'>
            <h2>Характеристики</h2>
            <div className='spec-item'>
              <span className='label'>Коробка передач</span>
              <span className='value'>{car.transmission || '—'}</span>
            </div>
            <div className='spec-item'>
              <span className='label'>Руль</span>
              <span className='value'>{car.steering || '—'}</span>
            </div>
            <div className='spec-item'>
              <span className='label'>Тип кузова</span>
              <span className='value'>{car.bodyType || '—'}</span>
            </div>
            <div className='spec-item'>
              <span className='label'>Цвет</span>
              <span className='value'>{car.color || '—'}</span>
            </div>
          </section>

          <section className='price'>
            <h2>Стоимость</h2>
            <div className='price-item'>
              <span className='label'>Аренда на 7 дней</span>
              <span className='value'>1 апреля – 8 апреля</span>
            </div>
            <div className='total-price'>
              <span className='label'>Итого</span>
              <span className='value bold'>{car.price ? `${car.price} ₽` : '—'}</span>
            </div>
          </section>

          <div className='actions'>
            <button onClick={() => navigate('/')} className='btn btn-outline'>
              Назад
            </button>
            <button className='btn btn-primary'>Забронировать</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarPage;

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Вспомогательная функция: timestamp → DD.MM.YYYY
function formatDateFromTimestamp(ts) {
  if (!ts) return '—';
  const date = new Date(ts);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

function SuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { rent } = location.state || {};
  const {
    carInfo = {},
    pickupLocation = 'Место получения',
    returnLocation = 'Место возврата',
    startDate,
    endDate,
    status = 0
  } = rent;

  const carName = carInfo.name || '—';

  const statusText = status === 0 ? 'Создано' : 'Неизвестно';

  return (
    <div>
      {' '}
      <div className='booking-success'>
        <div className='header'>
          <div className='status-icon'>
            <svg
              width='48'
              height='48'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='12' cy='12' r='10' fill='#E6F4EA' />
              <path
                d='M9 12L11 14L15 10'
                stroke='#389E0D'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
          <h1>Автомобиль забронирован</h1>
        </div>
        <div className='info-card'>
          <div className='info-row'>
            <span className='label'>Статус</span>
            <span className='value'>
              <span className='status-dot'></span>
              {statusText}
            </span>
          </div>
          <div className='info-row'>
            <span className='label'>Автомобиль</span>
            <span className='value'>{carName}</span>
          </div>
          <div className='info-row'>
            <span className='label'>Даты брони</span>
            <span className='value'>
              {formatDateFromTimestamp(startDate)} –{formatDateFromTimestamp(endDate)}
            </span>
          </div>
          <div className='info-row'>
            <span className='label'>Место получения</span>
            <span className='value'>{pickupLocation}</span>
          </div>
          <div className='info-row'>
            <span className='label'>Место возврата</span>
            <span className='value'>{returnLocation}</span>
          </div>
          <div className='info-row note'>
            <span className='value small-text'>Вся информация была продублирована в SMS</span>
          </div>
        </div>
        <div className='actions'>
          <button className='btn btn-outline'>Посмотреть статус</button>
          <button onClick={() => navigate('/')} className='btn btn-primary'>
            На главную
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;

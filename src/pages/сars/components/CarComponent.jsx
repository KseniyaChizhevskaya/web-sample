import React from 'react'
import { baseURL } from '../../../utils/constants'

function CarComponent(props) {
  const { id, brand, model, transmission, engine, rentalPrice, media, price, handleButtonClick }
    = props
  return (
    <div
      key={id}
      style={{
        width: '298.666px',
        height: '436px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
      }}
    >
      <img
        src={`${baseURL}${media[0].url}`}
        alt={`${brand} ${model || name}`}
        style={{
          width: '299px',
          height: '221px',
          objectFit: 'cover',
          borderRadius: '8px',
          marginBottom: '12px',
          background: '#f5f5f5',
          border: '1px solid #ddd',
        }}
      />
      <div>
        <h3 style={{ margin: '0', fontSize: '18px', fontWeight: 600 }}>
          {brand}
          {model}
        </h3>
        <p style={{ margin: '8px 0 0', fontSize: '14px', color: '#666' }}>
          {transmission}
          ,
          {engine}
        </p>
        <p style={{ margin: '8px 0 0', fontSize: '16px', fontWeight: 700 }}>
          {price}
          ₽
        </p>
        <p style={{ margin: '4px 0 0', fontSize: '14px', color: '#666' }}>
          {rentalPrice}
          за 14 дней
        </p>
      </div>
      <button onClick={() => handleButtonClick(id)} className="button-choice">
        <span>Выбрать</span>
      </button>
    </div>
  )
}

export default CarComponent

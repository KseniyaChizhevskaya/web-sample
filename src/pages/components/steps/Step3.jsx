import React from 'react';

function Step3({ formData, onBack, onSubmit }) {
  return (
    <div className='step3'>
      <h1>Проверка данных</h1>
      <div className='progress-bar'>
        <div className='progress-step'>Шаг 1 из 3</div>
        <div className='progress-line active'></div>
        <div className='progress-step'>Шаг 2 из 3</div>
        <div className='progress-line active'></div>
        <div className='progress-step active'>Шаг 3 из 3</div>
      </div>
      <div className='summary-card'>
        <h3>Данные брони</h3>
        <div className='summary-row'>
          <span>Автомобиль</span>
          <span>{formData.carName || '—'}</span>
        </div>
        <div className='summary-row'>
          <span>Даты брони</span>
          <span>{formData.rentalDates || '—'}</span>
        </div>
        <div className='summary-row'>
          <span>Место получения</span>
          <span>{formData.pickupLocation || '—'}</span>
        </div>
        <div className='summary-row'>
          <span>Место возврата</span>
          <span>{formData.returnLocation || '—'}</span>
        </div>
      </div>
      <div className='summary-card'>
        <h3>Данные заказчика</h3>
        <div className='summary-row'>
          <span>ФИО</span>
          <span>
            {[formData.lastName, formData.firstName, formData.middleName]
              .filter(Boolean)
              .join(' ') || '—'}
          </span>
        </div>
        <div className='summary-row'>
          <span>Дата рождения</span>
          <span>{formData.birthDate || '—'}</span>
        </div>
        <div className='summary-row'>
          <span>Телефон</span>
          <span>{formData.phone || '—'}</span>
        </div>
        <div className='summary-row'>
          <span>Email</span>
          <span>{formData.email || '—'}</span>
        </div>
        <div className='summary-row'>
          <span>Комментарий</span>
          <span>{formData.comment || '—'}</span>
        </div>
      </div>
      <div className='total-section'>
        <div className='total-row'>
          <span>Итого:</span>
          <span className='total-amount'>
            {formData.price ? `${new Intl.NumberFormat('ru-RU').format(formData.price)} ₽` : '—'}
          </span>
        </div>
        <div className='total-subtext'>
          Аренда:
          {formData.rentalDates}
        </div>
      </div>
      <div className='form-actions'>
        <button type='button' className='btn btn-outline' onClick={onBack}>
          Назад
        </button>
        <button type='button' className='btn btn-primary' onClick={onSubmit}>
          Забронировать
        </button>
      </div>
    </div>
  );
}

export default Step3;

import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const formatDateRange = (start, end) => {
  if (!start || !end) return '';
  const opts = { day: 'numeric', month: 'long' };
  const startStr = start.toLocaleDateString('ru-RU', opts);
  const endStr = end.toLocaleDateString('ru-RU', opts);
  const year = end.getFullYear();
  return `${startStr} – ${endStr} ${year}`;
};

function Step1({ formData, setFormData, onNext, onBack }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setFormData((prev) => ({
      ...prev,
      startDate: start,
      endDate: end,
      rentalDates: start && end ? formatDateRange(start, end) : ''
    }));
  };

  const handleChangeLocation = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className='step1'>
      <h1>Бронирование авто</h1>
      <form className='step-form'>
        <div className='form-group'>
          <label>Даты аренды</label>
          <DatePicker
            selectsRange
            startDate={formData.startDate}
            endDate={formData.endDate}
            onChange={handleDateChange}
            dateFormat='dd.MM.yyyy'
            placeholderText='Выберите даты'
            className='date-input'
            monthsShown={2}
            locale='ru'
            showPopperArrow={false}
          />
        </div>
        <div className='form-group'>
          <input type='text' value={formData.rentalDates} readOnly className='date-input' />
        </div>
        <div className='form-group'>
          <label>Место получения</label>
          <input
            name='pickupLocation'
            value={formData.pickupLocation}
            onChange={handleChangeLocation}
            placeholder='Место получения'
            className='input-field'
          />
        </div>
        <div className='form-group'>
          <label>Место возврата</label>
          <input
            name='returnLocation'
            value={formData.returnLocation}
            onChange={handleChangeLocation}
            placeholder='Место возврата'
            className='input-field'
          />
        </div>
        <div className='form-actions'>
          <button type='button' className='btn btn-outline' onClick={onBack}>
            Назад
          </button>
          <button type='button' className='btn btn-primary' onClick={onNext}>
            Продолжить
          </button>
        </div>
      </form>
    </div>
  );
}

export default Step1;

import React from 'react';

function Step2({ formData, setFormData, onNext, onBack }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    setFormData((prev) => ({ ...prev, agreementAccepted: e.target.checked }));
  };

  return (
    <div className='step2'>
      <h1>Введите ваши данные</h1>
      <div className='progress-bar'>
        <div className='progress-step'>Шаг 1 из 3</div>
        <div className='progress-line active'></div>
        <div className='progress-step active'>Шаг 2 из 3</div>
        <div className='progress-line'></div>
        <div className='progress-step'>Шаг 3 из 3</div>
      </div>
      <form className='step-form'>
        <div className='form-group'>
          <label>Фамилия</label>
          <input
            type='text'
            name='lastName'
            value={formData.lastName || ''}
            onChange={handleChange}
            placeholder='Фамилия'
            className='input-field'
          />
        </div>
        <div className='form-group'>
          <label>Имя</label>
          <input
            type='text'
            name='firstName'
            value={formData.firstName || ''}
            onChange={handleChange}
            placeholder='Имя'
            className='input-field'
          />
        </div>
        <div className='form-group'>
          <label>Отчество</label>
          <input
            type='text'
            name='middleName'
            value={formData.middleName || ''}
            onChange={handleChange}
            placeholder='Отчество'
            className='input-field'
          />
        </div>
        <div className='form-group'>
          <label>Дата рождения</label>
          <input
            type='text'
            name='birthDate'
            value={formData.birthDate || ''}
            onChange={handleChange}
            placeholder='дд.мм.гггг'
            className='input-field date-input'
          />
        </div>
        <div className='form-group'>
          <label>Номер телефона</label>
          <input
            type='tel'
            name='phone'
            value={formData.phone || ''}
            onChange={handleChange}
            placeholder='Номер телефона'
            className='input-field'
          />
        </div>
        <div className='form-group'>
          <label>Электронная почта</label>
          <input
            type='email'
            name='email'
            value={formData.email || ''}
            onChange={handleChange}
            placeholder='Электронная почта'
            className='input-field'
          />
        </div>
        <div className='form-group'>
          <label>Комментарий</label>
          <textarea
            name='comment'
            value={formData.comment || ''}
            onChange={handleChange}
            placeholder='Введите дополнительную информацию'
            rows='3'
            className='input-field textarea'
          ></textarea>
        </div>
        <div className='form-group checkbox-group'>
          <label className='checkbox-label'>
            <input
              type='checkbox'
              checked={!!formData.agreementAccepted}
              onChange={handleCheckboxChange}
            />
            <span>Принимаю условия соглашения</span>
          </label>
        </div>
        <div className='form-actions'>
          <button type='button' className='btn btn-outline' onClick={onBack}>
            Назад
          </button>
          <button
            type='button'
            className='btn btn-primary'
            onClick={onNext}
            disabled={!formData.agreementAccepted}
          >
            Продолжить
          </button>
        </div>
      </form>
    </div>
  );
}

export default Step2;

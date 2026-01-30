import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Step1 from '../components/steps/Step1';
import Step2 from '../components/steps/Step2';
import Step3 from '../components/steps/Step3';

const formatDateRange = (start, end) => {
  if (!start || !end) return '';
  const opts = { day: 'numeric', month: 'long' };
  const startStr = start.toLocaleDateString('ru-RU', opts);
  const endStr = end.toLocaleDateString('ru-RU', opts);
  const year = end.getFullYear();
  return `${startStr} – ${endStr} ${year}`;
};

const OrderPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { car } = location.state || {};

  useEffect(() => {
    if (!car) {
      navigate('/', { replace: true });
    }
  }, [car, navigate]);

  const [currentStep, setCurrentStep] = useState(1);
  const today = new Date();
  const defaultEndDate = new Date(today);
  defaultEndDate.setDate(today.getDate() + 7);

  const [formData, setFormData] = useState({
    carId: car?.id || null,
    carName: car?.name || '',
    price: car?.price || 0,
    startDate: today,
    endDate: defaultEndDate,
    rentalDates: formatDateRange(today, defaultEndDate),
    pickupLocation: '',
    returnLocation: '',
    lastName: '',
    firstName: '',
    middleName: '',
    birthDate: '',
    phone: '',
    email: '',
    comment: ''
  });

  const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
  const handleBack = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = () => {
    console.log('Оформление заказа:', formData);
    alert('Заказ успешно отправлен!');
    navigate('/');
  };

  if (!car) return null;

  return (
    <div className='order-form-container'>
      {currentStep === 1 && (
        <Step1
          formData={formData}
          setFormData={setFormData}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
      {currentStep === 2 && (
        <Step2
          formData={formData}
          setFormData={setFormData}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
      {currentStep === 3 && (
        <Step3 formData={formData} onBack={handleBack} onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default OrderPage;

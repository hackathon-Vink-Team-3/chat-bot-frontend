import './RateStars.css';
import { useState } from 'react';

export default function RateStars() {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const handleRate = (index: number) => {
    setCurrentStep(index + 1);
  };

  return (
    <div className='rate-stars'>
      {[...Array(10).keys()].map((index) => (
        <div
          className={`statusBar__item ${
            currentStep === index + 1
              ? 'currentStep_type_active'
              : currentStep > index + 1
              ? 'currentStep_type_active'
              : ''
          }`}
          key={index}
          onClick={() => handleRate(index)}
        >{index + 1}</div>
      ))}
    </div>
  );
}

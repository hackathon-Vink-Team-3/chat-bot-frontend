import { useState } from 'react';
import Modal from '../Modal/Modal';
import './Main.css';
import Logo from "./Logo";
import CompanyDescription from "./CompanyDescription";
import ChatButton from "./ChatButton";

export default function Main() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // Удалить после переноса отсюда
  const [isRateOpen, setIsRateOpen] = useState(false);
  const [isThanksOpen, setIsThanksOpen] = useState(false);

  const handleOpenRate = () => {
    setIsRateOpen(true);
  };

  const handleOpenThanks = () => {
    setIsThanksOpen(true);
  };
  // до сюда

  const handleOpenChat = () => {
    setIsPopupOpen(true);
  };

  const handleCloseChat = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className='main'>
      
          <div className="first-section">
      <Logo />
      <CompanyDescription />
    </div>
    <div className="second-section">
      <ChatButton />
      <Modal />
      
      
      
      <button
        onClick={handleOpenChat}
        style={{ width: '200px', height: '100px' }}
      >
        Открыть чат
      </button>
      <button
        onClick={handleOpenRate}
        style={{ width: '200px', height: '100px' }}
      >
        Оценить
      </button>{' '}
      <button
        onClick={handleOpenThanks}
        style={{ width: '200px', height: '100px' }}
      >
        Спасибо
      </button>
      {isPopupOpen && (
        <Modal
          handleCloseChat={handleCloseChat}
          isRateOpen={isRateOpen}
          isThanksOpen={isThanksOpen}
        />
      )}


    
      

  </div>
);


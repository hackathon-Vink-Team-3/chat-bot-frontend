import Modal from '../Modal/Modal';
import './Main.css';
import Logo from './Logo';
import CompanyDescription from './CompanyDescription';
import ChatButton from './ChatButton';
import { useState } from 'react';

export default function Main() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleOpenChat = () => {
    setIsPopupOpen(true);
  };

  // Удалить после переноса отсюда
  const [isThanksOpen, setIsThanksOpen] = useState(false);
  const handleOpenThanks = () => {
    setIsThanksOpen(true);
  };
  // до сюда

  const handleCloseChat = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className='main'>
      {/* // Удалить после переноса отсюда */}
        <button
        onClick={handleOpenThanks}
        style={{ width: '200px', height: '100px' }}
      >
        Спасибо
      </button>
      {/* // до сюда */}
      <div className='first-section'>
        <Logo />
        <CompanyDescription />
      </div>
      <div className='second-section'>
        <ChatButton handleOpenChat={handleOpenChat} />
        {isPopupOpen && (
          <Modal
            handleCloseChat={handleCloseChat}
            isThanksOpen={isThanksOpen}
          />
        )}
      </div>
    </div>
  );
}

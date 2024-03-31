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

  const handleCloseChat = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className='main'>
      <div className='first-section'>
        <Logo />
        <CompanyDescription />
      </div>
      <div className='second-section'>
        <ChatButton handleOpenChat={handleOpenChat} />
        {isPopupOpen && (
          <Modal
            handleCloseChat={handleCloseChat}
          />
        )}
      </div>
    </div>
  );
}

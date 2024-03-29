import { useState } from 'react';
import Modal from '../Modal/Modal';
import './Main.css';

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
      <button
        onClick={handleOpenChat}
        style={{ width: '200px', height: '100px' }}
      >
        Открыть чат
      </button>
      {isPopupOpen && <Modal 
      handleCloseChat={handleCloseChat} 
      />}
    </div>
  );
}

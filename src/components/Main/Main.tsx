import './Main.css';
import { useState } from 'react';
import Layout from './Layout/Layout';
import Modal from '../Modal/Modal';

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
      <Layout handleOpenChat={handleOpenChat} />
      {isPopupOpen && <Modal handleCloseChat={handleCloseChat} />}
    </div>
  );
}

import './Main.css';
import { useState } from 'react';
import Layout from './Layout/Layout';
import Modal from '../Modal/Modal';
import { HistoryItem } from '../IconsContainer/IconsContainer';

interface MainApp {
  sendMessage: () => void;
  history: HistoryItem[];
}

export default function Main({ sendMessage, history }: MainApp) {
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
      {isPopupOpen && (
        <Modal
          handleCloseChat={handleCloseChat}
          sendMessage={sendMessage}
          history={history}
        />
      )}
    </div>
  );
}

import './Main.css';
import { useState } from 'react';
import Layout from './Layout/Layout';
import Modal from '../Modal/Modal';
import { HistoryItem } from '../IconsContainer/IconsContainer';
import { Message } from './../Chat/Chat';

interface MainApp {
  openChat: () => void;
  getChat: () => void;
  sendMessage: () => void;
  history: HistoryItem[];
  historyMess: Message[];
}

export default function Main({
  openChat,
  history,
  getChat,
  historyMess,
  sendMessage,
}: MainApp) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleOpenChat = () => {
    setIsPopupOpen(true);
    openChat();
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
          historyMess={historyMess}
          history={history}
          getChat={getChat}
        />
      )}
    </div>
  );
}

import './Main.css';
import { useState } from 'react';
import Layout from './Layout/Layout';
import Modal from '../Modal/Modal';

interface MainApp {
  sendMessage: () => void;
}

export default function Main(
  { sendMessage }: MainApp
  ) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleOpenChat = () => {
    // postChat();
    setIsPopupOpen(true);
  };

  const handleCloseChat = () => {
    setIsPopupOpen(false);
  };

  // const [openChats, setOpenChats] = useState(null);
  // useEffect(() => {
  //   openChats;
  // }, []);
  // console.log('openChats ', openChats);

  // const postChat = () => {
  //   Api.postChat();
  // };

  return (
    <div className='main'>
      <Layout handleOpenChat={handleOpenChat} />
      {isPopupOpen && <Modal handleCloseChat={handleCloseChat} sendMessage={sendMessage}/>}
    </div>
  );
}

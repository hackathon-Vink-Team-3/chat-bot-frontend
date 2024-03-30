import './Modal.css';
import Chat from '../Chat/Chat';
import IconsContainer from './../IconsContainer/IconsContainer';
import ModalFooter from '../ModalFooter/ModalFooter';
import ModalHeader from '../ModalHeader/ModalHeader';
import Whatsapp from '../Whatsapp/Whatsapp';
import Telegram from '../Telegram/Telegram';
// import Rate from '../Rate/Rate';
// import Thanks from '../Thanks/Thanks';
import { useState } from 'react';

interface ModalProps {
  handleCloseChat: () => void;
  // isRateOpen: boolean;
  // isThanksOpen: boolean;
}

export default function Modal({
  handleCloseChat,
  // isRateOpen,
  // isThanksOpen,
}: ModalProps) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isTelegramOpen, setIsTelegramOpen] = useState<boolean>(false);
  const [isWhatsappOpen, setIsWhatsappOpen] = useState(false);

  const handleOpenChat = () => {
    setIsChatOpen(true);
  };

  const handleOpenTelegram = () => {
    setIsTelegramOpen(true);
  };

  const handleOpenWhatsapp = () => {
    setIsWhatsappOpen(true);
  };

  return (
    <div className='modal'>
      <ModalHeader handleCloseChat={handleCloseChat} />
      <div className='modal__conteiner-main'>
        {isTelegramOpen && <Telegram setIsTelegramOpen={setIsTelegramOpen} />}
        {isWhatsappOpen && <Whatsapp setIsWhatsappOpen={setIsWhatsappOpen} />}
        {/* {isRateOpen && <Rate />}
        {isThanksOpen && <Thanks />} */}
        {/* {!isTelegramOpen && !isWhatsappOpen && !isRateOpen && !isThanksOpen && ( */}

        {!isTelegramOpen && !isWhatsappOpen && (

          <>
            {isChatOpen ? (
              <Chat setIsChatOpen={setIsChatOpen} />
            ) : (
              <IconsContainer
                handleOpenChat={handleOpenChat}
                handleOpenTelegram={handleOpenTelegram}
                handleOpenWhatsapp={handleOpenWhatsapp}
              />
            )}
          </>
        )}
        <ModalFooter />
      </div>
    </div>
  );
}

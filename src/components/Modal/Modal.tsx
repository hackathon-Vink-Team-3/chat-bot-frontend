import './Modal.css';
import Chat from '../Chat/Chat';
import IconsContainer from './../IconsContainer/IconsContainer';
import ModalFooter from '../ModalFooter/ModalFooter';
import ModalHeader from '../ModalHeader/ModalHeader';
import Whatsapp from '../Whatsapp/Whatsapp';
import Telegram from '../Telegram/Telegram';
import Rate from '../Rate/Rate';
import Thanks from '../Thanks/Thanks';
import { useEffect, useRef, useState } from 'react';

interface ModalProps {
  handleCloseChat: () => void;
  isThanksOpen: boolean;
}

export default function Modal({
  handleCloseChat,
  isThanksOpen,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isTelegramOpen, setIsTelegramOpen] = useState<boolean>(false);
  const [isWhatsappOpen, setIsWhatsappOpen] = useState(false);
  const [inactiveTime, setInactiveTime] = useState(0);
  const [isRateOpen, setIsRateOpen] = useState(false);

  useEffect(() => {
    if (modalRef.current) {
      const modal = modalRef.current;
      modal.style.display = 'block';
      modal.style.opacity = '0';
      modal.animate(
        [
          { opacity: 0 },
          { opacity: 1 }
        ],
        {
          duration: 400,
          easing: 'ease-in-out',
          fill: 'forwards'
        }
      );
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setInactiveTime((prevTime) => prevTime + 1);
    }, 600);
      return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (inactiveTime >= 10) {
      setIsRateOpen(true);
    }
  }, [inactiveTime]);

  const handleOpenNewChat = () => {
    setIsChatOpen(true);
  };

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
    <div className='modal'  ref={modalRef}>
      <ModalHeader handleCloseChat={handleCloseChat} />
      <div className='modal__conteiner-main'>
        {isTelegramOpen && <Telegram setIsTelegramOpen={setIsTelegramOpen} />}
        {isWhatsappOpen && <Whatsapp setIsWhatsappOpen={setIsWhatsappOpen} />}
        {isRateOpen && <Rate setInactiveTime={setInactiveTime}/>}
        {isThanksOpen && <Thanks />}
        {!isTelegramOpen && !isWhatsappOpen && !isRateOpen && !isThanksOpen && (
          <>
            {isChatOpen ? (
              <Chat setIsChatOpen={setIsChatOpen} />
            ) : (
              <IconsContainer
                handleOpenChat={handleOpenChat}
                handleOpenTelegram={handleOpenTelegram}
                handleOpenWhatsapp={handleOpenWhatsapp}
                handleOpenNewChat={handleOpenNewChat}
              />
            )}
          </>
        )}
        <ModalFooter />
      </div>
    </div>
  );
}
        {/* {!isTelegramOpen && !isWhatsappOpen && ( */}

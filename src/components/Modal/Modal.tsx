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
import { HistoryItem } from './../IconsContainer/IconsContainer'
import { Message } from './../Chat/Chat'

interface ModalProps {
  handleCloseChat: () => void;
  getChat: () => void;
  sendMessage: (message: string) => void;
  history: HistoryItem[];
  historyMess: Message[]
}

export default function Modal({
  handleCloseChat,
  historyMess,
  history,
  getChat,
  sendMessage,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isTelegramOpen, setIsTelegramOpen] = useState<boolean>(false);
  const [isWhatsappOpen, setIsWhatsappOpen] = useState(false);
  const [isRateOpen, setIsRateOpen] = useState(false);
  const [inactiveTime, setInactiveTime] = useState(0);
  const [isThanksOpen, setIsThanksOpen] = useState<boolean>(false);
  const [inputEnabled, setInputEnabled] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setInactiveTime((prevTime) => prevTime + 1);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (inactiveTime >= 4) {
      setIsRateOpen(true);
      setIsTelegramOpen(false);
      setIsWhatsappOpen(false);
    }
  }, [inactiveTime]);

  useEffect(() => {
    if (modalRef.current) {
      const modal = modalRef.current;
      modal.style.display = 'block';
      modal.style.opacity = '0';
      modal.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 400,
        easing: 'ease-in-out',
        fill: 'forwards',
      });
    }
  }, []);

  const handleOpenChat = () => {
    setIsChatOpen(true);
    getChat();
  };

  const handleOpenTelegram = () => {
    setIsTelegramOpen(true);
  };

  const handleOpenWhatsapp = () => {
    setIsWhatsappOpen(true);
  };

  return (
    <div className='modal' ref={modalRef}>
      <ModalHeader handleCloseChat={handleCloseChat} />
      <div className='modal__conteiner-main'>
        {isTelegramOpen && <Telegram setIsTelegramOpen={setIsTelegramOpen} />}
        {isWhatsappOpen && <Whatsapp setIsWhatsappOpen={setIsWhatsappOpen} />}
        {isRateOpen && (
          <Rate
            setIsThanksOpen={setIsThanksOpen}
            inputEnabled={inputEnabled}
            setInputEnabled={setInputEnabled}
            setInactiveTime={setInactiveTime}
          />
        )}
        {isThanksOpen && (
          <Thanks
            setIsChatOpen={setIsChatOpen}
            setIsRateOpen={setIsRateOpen}
            setIsThanksOpen={setIsThanksOpen}
          />
        )}
        {!isTelegramOpen && !isWhatsappOpen && !isRateOpen && !isThanksOpen && (
          <>
            {isChatOpen ? (
              <Chat
                setIsChatOpen={setIsChatOpen}
                setInactiveTime={setInactiveTime}
                sendMessage={sendMessage}
                historyMess={historyMess}
              />
            ) : (
              <IconsContainer
                handleOpenChat={handleOpenChat}
                handleOpenTelegram={handleOpenTelegram}
                handleOpenWhatsapp={handleOpenWhatsapp}
                history={history}
              />
            )}
          </>
        )}
        <ModalFooter />
      </div>
    </div>
  );
}

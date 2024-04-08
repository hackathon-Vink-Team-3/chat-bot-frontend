import './Chat.css';
import Back from './../../assets/Back.svg?react';
import Input from '../Input/Input';
import ChatOperator from '../ChatOperator/ChatOperator';
import ChatUser from '../ChatUser/ChatUser';
import { useEffect, useRef } from 'react';

interface ChatProps {
  setIsChatOpen: (isOpen: boolean) => void;
  setInactiveTime: React.Dispatch<React.SetStateAction<number>>;
  setIsRateOpen: (isOpen: boolean) => void;
  sendMessage: (message: string) => void;
  historyMess: Message[];
}

export interface Message {
  sender_type: string;
  text: string;
}

export default function Chat({
  setIsChatOpen,
  setInactiveTime,
  setIsRateOpen,
  sendMessage,
  historyMess,
}: ChatProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (historyMess.some((message) => message.text.toLowerCase().includes('спасибо'))) {
      setTimeout(() => {
        setIsRateOpen(true);
      }, 900);
    }
  }, [historyMess]);

  const handleBack = () => {
    setIsChatOpen(false);
  };

  const reversedHistoryMess = [...historyMess].reverse();

  return (
    <div className='chat'>
      <Back className='chat__back' onClick={handleBack} />
      <div className='chat__container'>
        {reversedHistoryMess.map((message: Message, index) => {
          if (message.sender_type === 'bot') {
            return <ChatOperator key={index} text={message.text} />;
          } else if (message.sender_type === 'user') {
            return <ChatUser key={index} text={message.text} />;
          }
        })}
        <div ref={messagesEndRef}></div>
      </div>
      <Input
        setInactiveTime={setInactiveTime}
        sendMessage={sendMessage}
      />
    </div>
  );
}

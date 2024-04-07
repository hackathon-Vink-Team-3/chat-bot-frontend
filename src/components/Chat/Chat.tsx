import './Chat.css';
import Back from './../../assets/Back.svg?react';
import Input from '../Input/Input';
import ChatOperator from '../ChatOperator/ChatOperator';
import { messageOperatorData } from '../../utils/constants';
import ChatUser from '../ChatUser/ChatUser';
import { useEffect, useRef, useState } from 'react';

interface ChatProps {
  setIsChatOpen: (isOpen: boolean) => void;
  setInactiveTime: React.Dispatch<React.SetStateAction<number>>;
  setIsRateOpen: (isOpen: boolean) => void;
  sendMessage: () => void;
}

export default function Chat({
  setIsChatOpen,
  setInactiveTime,
  setIsRateOpen,
  sendMessage,
}: ChatProps) {
  const [messages, setMessages] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const addMessage = (newMessage: string) => {
    setMessages([...messages, newMessage]);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (messages.some((message) => message.toLowerCase().includes('спасибо'))) {
      setTimeout(() => {
        setIsRateOpen(true);
      }, 900);
    }
  }, [messages]);

  const handleBack = () => {
    setIsChatOpen(false);
  };

  return (
    <div className='chat'>
      <Back className='chat__back' onClick={handleBack} />
      <div className='chat__container'>
        <ChatOperator text={messageOperatorData.messOne} />
        <ChatOperator text={messageOperatorData.messTwo} />
        {messages.map((message, index) => (
          <ChatUser key={index} text={message} />
        ))}
        <div ref={messagesEndRef}></div>
      </div>
      <Input
        setInactiveTime={setInactiveTime}
        addMessage={addMessage}
        sendMessage={sendMessage}
      />
    </div>
  );
}

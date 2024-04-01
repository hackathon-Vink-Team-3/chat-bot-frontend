import './Rate.css';
import Input from '../Input/Input';
import ChatOperator from '../ChatOperator/ChatOperator';
import { RATE_DATA } from '../../utils/constants';
import RateStars from '../RateStars/RateStars';
import { useEffect, useRef, useState } from 'react';
import ChatUser from '../ChatUser/ChatUser';

interface RateProps {
  setIsThanksOpen: (isOpen: boolean) => void;
  handleCloseChat: (isOpen: boolean) => void;
  setIsRateOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Rate({
  setIsThanksOpen,
  handleCloseChat,
  setIsRateOpen,
}: RateProps) {
  const [messages, setMessages] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const addMessage = (newMessage: string) => {
    setMessages([...messages, newMessage]);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className='rate'>
      <ChatOperator text={RATE_DATA.messOne} />
      <RateStars
        setIsThanksOpen={setIsThanksOpen}
        handleCloseChat={handleCloseChat}
      />
      <div className='rate__container'>
      {messages.map((message, index) => (
        <ChatUser key={index} text={message} />
      ))}
      <div ref={messagesEndRef}></div>
      </div>
      <Input addMessage={addMessage} setIsRateOpen={setIsRateOpen}/>
    </div>
  );
}

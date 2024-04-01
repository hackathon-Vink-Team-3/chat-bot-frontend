import './Thanks.css';
import Input from '../Input/Input';
import ChatOperator from '../ChatOperator/ChatOperator';
import { THANKS_DATA } from '../../utils/constants';
import Hand from '../../assets/Thanks.svg';
import { useEffect, useRef, useState } from 'react';
import ChatUser from '../ChatUser/ChatUser';

interface ThanksProps {
  setIsRateOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Thanks({ setIsRateOpen }: ThanksProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<string[]>([]);

  const addMessage = (newMessage: string) => {
    setMessages([...messages, newMessage]);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className='thanks'>
      <ChatOperator text={THANKS_DATA.thanks} />
      <img src={Hand} className='thanks__img' alt='Спасибо' />
      <div className='thanks__container'>
        {messages.map((message, index) => (
          <ChatUser key={index} text={message} />
        ))}
        <div ref={messagesEndRef}></div>
      </div>
      <Input addMessage={addMessage} setIsRateOpen={setIsRateOpen} />
    </div>
  );
}

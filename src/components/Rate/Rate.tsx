import './Rate.css';
import Input from '../Input/Input';
import ChatOperator from '../ChatOperator/ChatOperator';
import { rateData } from '../../utils/constants';
import RateStars from '../RateStars/RateStars';
import { useState } from 'react';
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

  const addMessage = (newMessage: string) => {
    setMessages([...messages, newMessage]);
  };
  return (
    <div className='rate'>
      <ChatOperator text={rateData.messOne} />
      <RateStars
        setIsThanksOpen={setIsThanksOpen}
        handleCloseChat={handleCloseChat}
      />
      {messages.map((message, index) => (
        <ChatUser key={index} text={message} />
      ))}
      <Input addMessage={addMessage} setIsRateOpen={setIsRateOpen}/>
    </div>
  );
}

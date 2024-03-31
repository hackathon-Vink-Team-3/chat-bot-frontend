import './Chat.css';
import Back from './../../assets/Back.svg?react';
import Input from '../Input/Input';
import ChatOperator from '../ChatOperator/ChatOperator';
import { messageOperatorData } from '../../utils/constants';
import ChatUser from '../ChatUser/ChatUser';
import { useState } from 'react';

interface ChatProps {
  setIsChatOpen: (isOpen: boolean) => void;
  setInactiveTime: React.Dispatch<React.SetStateAction<number>>;
  setIsRateOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Chat({
  setIsChatOpen,
  setInactiveTime,
  setIsRateOpen,
}: ChatProps) {
  const [messages, setMessages] = useState<string[]>([]);

  const addMessage = (newMessage: string) => {
    setMessages([...messages, newMessage]);
  };

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
      </div>
      <Input
        setInactiveTime={setInactiveTime}
        addMessage={addMessage}
        setIsRateOpen={setIsRateOpen}
      />
    </div>
  );
}

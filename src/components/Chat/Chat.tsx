import './Chat.css';
import Back from './../../assets/Back.svg?react';
import Input from '../Input/Input';
import ChatOperator from '../ChatOperator/ChatOperator';
import ChatUser from '../ChatUser/ChatUser';
import { useEffect, useRef } from 'react';

interface ChatProps {
  setIsChatOpen: (isOpen: boolean) => void;
  setInactiveTime: React.Dispatch<React.SetStateAction<number>>;
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
  sendMessage,
  historyMess,
}: ChatProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chatContainer = document.querySelector('.chat__container');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [historyMess]);

  const handleBack = () => {
    setIsChatOpen(false);
  };

  return (
    <div className='chat'>
      <Back className='chat__back' onClick={handleBack} />
      <div className='chat__container'>
        {historyMess.map((message: Message, index) => {
          if (message.sender_type === 'bot') {
            return <ChatOperator key={index} text={message.text} />;
          } else if (message.sender_type === 'user') {
            return <ChatUser key={index} text={message.text} />;
          }
        })}
        <div ref={messagesEndRef}></div>
      </div>
      <Input setInactiveTime={setInactiveTime} sendMessage={sendMessage} />
    </div>
  );
}

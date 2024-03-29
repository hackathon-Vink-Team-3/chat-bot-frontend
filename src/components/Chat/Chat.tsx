import './Chat.css';
import Back from './../../assets/Back.svg?react';
import Input from '../Input/Input';
import ChatOperator from '../ChatOperator/ChatOperator';
import { messageOperatorData, messageUserData } from '../../utils/constants';
import ChatUser from '../ChatUser/ChatUser';

interface ChatProps {
  setIsChatOpen: (isOpen: boolean) => void;
}

export default function Chat({ setIsChatOpen }: ChatProps) {

  const handleBack = () => {
    setIsChatOpen(false)
    };

  return (
    <div className='chat'>
      <Back className='chat__back' onClick={handleBack} />
      <div className='chat__container-with-chat-text'>
        <ChatUser text={messageUserData.messOne} />
        <ChatOperator text={messageOperatorData.messOne} />
        <ChatOperator text={messageOperatorData.messTwo} />
        <ChatUser text={messageUserData.messTwo} />
        <ChatOperator text={messageOperatorData.messThree} />
        <ChatUser text={messageUserData.messThree} />
      </div>
      <Input />
    </div>
  );
}

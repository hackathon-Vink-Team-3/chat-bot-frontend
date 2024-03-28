import './ChatUser.css';
import User from './../../assets/user.svg?react';

interface ChatUserProps {
  text?: string;
}

export default function ChatUser({ text }: ChatUserProps) {
  return (
    <div className='chat-user'>
      <div className='chat-user__container-messedge'>
        <p className='chat-user__messedge'>{text}</p>
      </div>
      <User className='chat-operator__avatar' />
    </div>
  );
}

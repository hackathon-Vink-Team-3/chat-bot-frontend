import './ChatOperator.css';
import Avatar from './../../assets/Avatar.jpg';

interface ChatOperatorProps {
  text?: string;
}

export default function ChatOperator({ text }: ChatOperatorProps) {
  return (
    <div className='chat-operator'>
      <img src={Avatar} alt='фото пользователя' className='chat-user__avatar' />{' '}
      <div className='chat-operator__container'>
        <p className='chat-operator__messedge'>{text}</p>
      </div>
    </div>
  );
}

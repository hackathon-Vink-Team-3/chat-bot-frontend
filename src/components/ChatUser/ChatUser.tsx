import './ChatUser.css';
import UserImg from './../../assets/User.png';

interface ChatUserProps {
  text?: string;
}

export default function ChatUser({ text }: ChatUserProps) {
  return (
    <div className='chat-user'>
      <div className='chat-user__container-messedge'>
        <p className='chat-user__messedge'>{text}</p>
      </div>
      <img src={UserImg} alt='иконка юзера' className='chat-operator__avatar' />
    </div>
  );
}

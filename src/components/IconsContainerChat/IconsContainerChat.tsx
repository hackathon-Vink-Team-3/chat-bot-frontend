import './IconsContainerChat.css';
import IconChat from './../../assets/IconChat.svg?react';

interface IconsContainerChatProps {
  name: string;
  text?: string;
  time: string;
  handleOpenChat?: () => void;
}

export default function IconsContainerChat({
  name,
  text,
  time,
  handleOpenChat,
}: IconsContainerChatProps) {
  return (
    <div className='icons-container-chat' onClick={handleOpenChat}>
      <div style={{ width: '38px', height: '37px' }}>
        <IconChat />
      </div>
      <div className='icons-container-chat__text'>
        <p className='icons-container-chat__name'>{name}</p>
        <p className='icons-container-chat__text'>{text}</p>
      </div>
      <p className='icons-container-chat__date'>{time}</p>
    </div>
  );
}

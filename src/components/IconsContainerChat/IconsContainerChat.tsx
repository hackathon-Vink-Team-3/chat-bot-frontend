import './IconsContainerChat.css';
import IconChat from './../../assets/IconChat.svg?react';

interface IconsContainerChatProps {
  name: string;
  text: string;
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
      <IconChat />
      <div className='icons-container-chat__text'>
        <p className='icons-container-chat__name'>{name}</p>
        <p className='icons-container-chat__text'>{text}</p>
      </div>
      <p className='icons-container-chat__text icons-container-chat__text_type_right'>
        {time}
      </p>
    </div>
  );
}

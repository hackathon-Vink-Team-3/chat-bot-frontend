import './IconsContainerChat.css';
import IconChat from './../../assets/IconChat.svg?react';

interface IconsContainerChatProps {
  name: string;
  text: string;
  time: string;
}

export default function IconsContainerChat({
  name,
  text,
  time,
}: IconsContainerChatProps) {
  return (
    <>
      <IconChat />
      <div className='icons-container__container-text'>
        <p className='icons-container__name'>{name}</p>
        <p className='icons-container__text'>{text}</p>
      </div>
      <p className='icons-container__text icons-container__text_side-right'>
        {time}
      </p>
    </>
  );
}

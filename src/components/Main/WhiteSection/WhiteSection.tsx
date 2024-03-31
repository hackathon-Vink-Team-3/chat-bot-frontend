import ChatButton from './../../../assets/ChatButton.svg?react';
import './WhiteSection.css';

interface WhiteSectionProps {
  handleOpenChat: () => void;
}

export default function WhiteSection({ handleOpenChat }: WhiteSectionProps) {
  return (
    <div className='white-section'>
      <ChatButton className='white-section__button' onClick={handleOpenChat} />
    </div>
  );
}

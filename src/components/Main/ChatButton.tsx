import ChatButtonImage from '../../assets/ChatButton.svg?react';

interface ChatButtonProps {
  handleOpenChat: () => void;
}

export default function ChatButton({ handleOpenChat }: ChatButtonProps) {
  return (
    <>
  <ChatButtonImage onClick={handleOpenChat} className='chat-button' />
  </>
  )
}

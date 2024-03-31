import './Icons.css';

interface IconsProps {
  title: string;
  icon: string;
  handleOpenTelegram: () => void;
  handleOpenWhatsapp: () => void;
  handleOpenNewChat: () => void;
}

export default function Icons({
  title,
  icon,
  handleOpenTelegram,
  handleOpenWhatsapp,
  handleOpenNewChat,
}: IconsProps) {
  const handleClick = () => {
    if (title.includes('Telegram')) {
      handleOpenTelegram();
    } else if (title.includes('WhatsApp')) {
      handleOpenWhatsapp();
    } else if (title.includes('Написать')) {
      handleOpenNewChat();
    }
  };

  return (
    <div className='icons' onClick={handleClick}>
      <div className='icons__container'>
        <img src={icon} alt='иконка меню' />
      </div>
      <p className='icons__text'>{title}</p>
    </div>
  );
}

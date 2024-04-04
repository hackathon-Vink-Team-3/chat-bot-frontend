import './Whatsapp.css';
import { WHATSAPP_DATA } from '../../utils/constants';
import TelegramIcon from './../../assets/WhatsAppSoon.svg?react';
import Back from './../../assets/Back.svg?react';

interface TelegramProps {
  setIsWhatsappOpen: (isOpen: boolean) => void;
}

export default function Whatsapp({ setIsWhatsappOpen }: TelegramProps) {

  const handleBack = () => {
    setIsWhatsappOpen(false)
    };

  return (
    <div className='whatsapp'>
      <Back className='whatsapp__back' onClick={handleBack} />
      <TelegramIcon />
      <p className='whatsapp__text'>{WHATSAPP_DATA.text}</p>
    </div>
  );
}

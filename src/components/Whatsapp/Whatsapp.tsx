import './Whatsapp.css';
import { whatsappData } from '../../utils/constants';
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
      <p className='whatsapp__text'>{whatsappData.text}</p>
    </div>
  );
}

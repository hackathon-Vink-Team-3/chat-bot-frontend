import './Whatsapp.css';
import { whatsappData } from '../../utils/constants';
import TelegramIcon from './../../assets/WhatsAppSoon.svg?react';

export default function Whatsapp() {
  return (
    <div className='whatsapp'>
        <TelegramIcon />
        <p className='whatsapp__text'>{whatsappData.text}</p>
      </div>
  );
}

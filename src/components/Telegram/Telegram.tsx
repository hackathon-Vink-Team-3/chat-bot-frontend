import './Telegram.css';
import { telegramData, telegramListData } from '../../utils/constants';
import TelegramIcon from './../../assets/Telegram.svg?react';
import Qr from './../../assets/Qr.png';
import TelegramList from '../TelegramList/TelegramList';
import Back from './../../assets/Back.svg?react';

interface TelegramProps {
  setIsTelegramOpen: (isOpen: boolean) => void;
}

export default function Telegram({ setIsTelegramOpen }: TelegramProps) {

  const handleBack = () => {
    setIsTelegramOpen(false)
    };
    
  return (
    <>
      <div className='telegram'>
        <Back className='telegram__back' onClick={handleBack} />
        <p className='telegram__title'>{telegramData.title}</p>
        <ol className='telegram__container-text'>
          {telegramListData.map((item, index) => (
            <TelegramList key={index} field={item} />
          ))}
        </ol>
        <button className='telegram__button'>
          <TelegramIcon style={{ width: '28px', height: '28px' }} />
          <p className='telegram__text'>{telegramData.button}</p>
        </button>
        <div className='telegram__container'>
          <img src={Qr} className='telegram__qr' alt='QR code' />
          <p className='telegram__text-qr'>{telegramData.qr}</p>
        </div>
      </div>
    </>
  );
}

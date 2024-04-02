import './Telegram.css';
import { TELEGRAM_DATA, TELEGRAM_LIST_DATA } from '../../utils/constants';
import TelegramIcon from './../../assets/Telegram-big.svg?react';
import Qr from './../../assets/Qr.png';
import TelegramList from '../TelegramList/TelegramList';
import Back from './../../assets/Back.svg?react';

interface TelegramProps {
  setIsTelegramOpen: (isOpen: boolean) => void;
}

export default function Telegram({ setIsTelegramOpen }: TelegramProps) {
  const handleBack = () => {
    setIsTelegramOpen(false);
  };

  return (
    <div className='telegram'>
      <Back className='telegram__back' onClick={handleBack} />
      <div>
        <p className='telegram__title'>{TELEGRAM_DATA.title}</p>
        <ol className='telegram__container-text'>
          {TELEGRAM_LIST_DATA.map((item, index) => (
            <TelegramList key={index} field={item} />
          ))}
        </ol>
        <a
          href='https://t.me/VinkSmartBot'
          target='_blank'
          rel='noreferrer'
          className='telegram__link'
        >
          <button className='telegram__button'>
            <TelegramIcon style={{ width: '28px', height: '28px' }} />
            <p className='telegram__text'>{TELEGRAM_DATA.button}</p>
          </button>
        </a>
      </div>
      <div className='telegram__container-desktop'>
        <img src={Qr} className='telegram__qr' alt='QR code' />
        <p className='telegram__text-qr'>{TELEGRAM_DATA.qr}</p>
      </div>
    </div>
  );
}

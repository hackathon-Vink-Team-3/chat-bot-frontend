import './Telegram.css';
import { TELEGRAM_DATA, TELEGRAM_LIST_DATA } from '../../utils/constants';
import TelegramIcon from './../../assets/Telegram.svg?react';
import Qr from './../../assets/Qr.png';
import TelegramList from '../TelegramList/TelegramList';
import Back from './../../assets/Back.svg?react';
import { useEffect, useState } from 'react';

interface TelegramProps {
  setIsTelegramOpen: (isOpen: boolean) => void;
}

export default function Telegram({ setIsTelegramOpen }: TelegramProps) {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleBack = () => {
    setIsTelegramOpen(false);
  };

  return (
      <div className='telegram'>
        <Back className='telegram__back' onClick={handleBack} />
        {isDesktop ? (
          <div>
            <p className='telegram__title'>{TELEGRAM_DATA.title}</p>
            <ol className='telegram__container-text'>
              {TELEGRAM_LIST_DATA.map((item, index) => (
                <TelegramList key={index} field={item} />
              ))}
            </ol>
            <button className='telegram__button'>
              <TelegramIcon style={{ width: '28px', height: '28px' }} />
              <p className='telegram__text'>{TELEGRAM_DATA.button}</p>
            </button>
          </div>
        ) : (
          <div className='telegram__container-desktop'>
            <img src={Qr} className='telegram__qr' alt='QR code' />
            <p className='telegram__text-qr'>{TELEGRAM_DATA.qr}</p>
          </div>
        )}
      </div>
  );
}

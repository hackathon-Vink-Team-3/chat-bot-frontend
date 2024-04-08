import './IconsContainer.css';
import {
  ICONS_DATA,
  CHAT_DATA,
  ICON_CONTAINER_DATA,
} from '../../utils/constants';
import Sms from './../../assets/sms.svg?react';
import Mms from './../../assets/mms.svg?react';
import Icons from '../Icons/Icons';
import IconsContainerChat from '../IconsContainerChat/IconsContainerChat';
import { useState } from 'react';

interface IconsContainerProps {
  handleOpenChat: () => void;
  handleOpenTelegram: () => void;
  handleOpenWhatsapp: () => void;
  history: HistoryItem[];
}

export interface HistoryItem {
  first_message_text: string;
}

export default function IconsContainer({
  handleOpenChat,
  handleOpenTelegram,
  handleOpenWhatsapp,
  history,
}: IconsContainerProps) {
  const [firstMessageTime, setFirstMessageTime] = useState<string>('');

  function getCurrentDateTime() {
    const now = new Date();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const year = now.getFullYear();

    return `${day}.${month}.${year}`;
  }

  if (firstMessageTime === '' && history.length > 0) {
    const firstMessageDateTime = getCurrentDateTime();
    setFirstMessageTime(firstMessageDateTime);
  }

  return (
    <>
      <div className='icons-container'>
        {ICONS_DATA.map((item, index) => {
          return (
            <Icons
              key={index}
              title={item.title}
              icon={item.icon}
              handleOpenTelegram={handleOpenTelegram}
              handleOpenWhatsapp={handleOpenWhatsapp}
              handleOpenChat={handleOpenChat}
            />
          );
        })}
      </div>
      {ICON_CONTAINER_DATA === null ? (
        <div className='icons-container-whithout-text'>
          <div className='icons-container__container'>
            <div className='icons-container-icons'>
              <Sms className='icons-container__sms' />
              <Mms className='icons-container__mms' />
            </div>
            <p className='icons-container__text'>{CHAT_DATA.textOne}</p>
          </div>
        </div>
      ) : (
        <div className='icons-container__with-chats'>
          {ICON_CONTAINER_DATA.map((item, index) => (
            <IconsContainerChat
              key={index}
              name={item.name}
              text={history[0].first_message_text}
              time={firstMessageTime}
              handleOpenChat={handleOpenChat}
            />
          ))}
          <p className='icons-container__history'>{CHAT_DATA.history}</p>
          <IconsContainerChat
            name={CHAT_DATA.name}
            text={CHAT_DATA.mess}
            time={CHAT_DATA.date}
          />
        </div>
      )}
    </>
  );
}

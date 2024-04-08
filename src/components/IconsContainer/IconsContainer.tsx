import './IconsContainer.css';
import {
  ICONS_DATA,
  CHAT_DATA,
  iconsContainerData,
} from '../../utils/constants';
import Sms from './../../assets/sms.svg?react';
import Mms from './../../assets/mms.svg?react';
import Icons from '../Icons/Icons';
import IconsContainerChat from '../IconsContainerChat/IconsContainerChat';

interface IconsContainerProps {
  handleOpenChat: () => void;
  handleOpenTelegram: () => void;
  handleOpenWhatsapp: () => void;
  handleOpenNewChat: () => void;
  history: HistoryItem[];
}

export interface HistoryItem {
  first_message_text: string;
}

export default function IconsContainer({
  handleOpenChat,
  handleOpenTelegram,
  handleOpenWhatsapp,
  handleOpenNewChat,
  history,
}: IconsContainerProps) {
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
              handleOpenNewChat={handleOpenNewChat}
            />
          );
        })}
      </div>
      {iconsContainerData === null ? (
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
          <p className='icons-container__history'>{CHAT_DATA.history}</p>
          {iconsContainerData.map((item, index) => (
            <IconsContainerChat
              key={index}
              name={item.name}
              text={history[0].first_message_text}
              // time={item.time}
              time={item.time}

              handleOpenChat={handleOpenChat}
            />
          ))}
        </div>
      )}
    </>
  );
}

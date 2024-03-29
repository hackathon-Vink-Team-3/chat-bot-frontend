import './IconsContainer.css';
import { iconsData, chatData, iconsContainerData } from '../../utils/constants';
import Sms from './../../assets/sms.svg?react';
import Mms from './../../assets/mms.svg?react';
import Icons from '../Icons/Icons';
import IconsContainerChat from '../IconsContainerChat/IconsContainerChat';

interface IconsContainerProps {
  handleOpenChat: () => void;
  handleOpenTelegram: () => void;
  handleOpenWhatsapp: () => void;
}

export default function IconsContainer({
  handleOpenChat,
  handleOpenTelegram,
  handleOpenWhatsapp,
}: IconsContainerProps) {
  return (
    <>
      <div className='icons-container'>
        {iconsData.map((item, index) => {
          return (
            <Icons
              key={index}
              title={item.title}
              icon={item.icon}
              handleOpenTelegram={handleOpenTelegram}
              handleOpenWhatsapp={handleOpenWhatsapp}
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
            <p className='icons-container__text'>{chatData.textOne}</p>
            <p className='icons-container__text'>{chatData.textTwo}</p>
          </div>
        </div>
      ) : (
        <div className='icons-container__with-chats'>
          <p className='icons-container__history'>{chatData.history}</p>
          {iconsContainerData.map((item, index) => (
            <IconsContainerChat
              key={index}
              name={item.name}
              text={item.text}
              time={item.time}
              handleOpenChat={handleOpenChat}
            />
          ))}
        </div>
      )}
    </>
  );
}

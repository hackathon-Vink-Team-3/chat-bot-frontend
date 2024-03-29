import './IconsContainer.css';
import { iconsData, chatData, iconsContainerData } from '../../utils/constants';
import Sms from './../../assets/sms.svg?react';
import Mms from './../../assets/mms.svg?react';
import IconChat from './../../assets/IconChat.svg?react';
import Icons from '../Icons/Icons';

export default function IconsContainer() {
  return (
    <>
      <div className='icons-container'>
        {iconsData.map((item, index) => {
          return <Icons key={index} title={item.title} icon={item.icon} />;
        })}
      </div>

      {/* Без переписки */}

      {/* <div className='icons-container-whithout-text'>
        <div className='icons-container__container'>
          <div className='icons-container-icons'>
            <Sms className='icons-container__sms' />
            <Mms className='icons-container__mms' />
          </div>
          <p className='icons-container__text'>{chatData.textOne}</p>
          <p className='icons-container__text'>{chatData.textTwo}</p>
        </div>
      </div> */}

      {/* С чатами */}
      <div className='icons-container__with-chats'>
        <p className='icons-container__history'>{chatData.history}</p>

        <div className='icons-container__chat'>
          <IconChat />
          <div className='icons-container__text'>
            <p className='icons-container__name'>Винк</p>
            <p className='icons-container__text'>
              Команда Винк: Рады был помочь!
            </p>
          </div>
          <p className='icons-container__text icons-container__text_side-right'>
            11:30
          </p>
        </div>

        <div className='icons-container__chat'>
          <IconChat />
          <div className='icons-container__container-text'>
            <p className='icons-container__name'>Винк</p>
            <p className='icons-container__text'>
              Команда Винк: Рады был помочь!
            </p>
          </div>
          <p className='icons-container__text icons-container__text_side-right'>
            11:30
          </p>
        </div>
      </div>
    </>
  );
}

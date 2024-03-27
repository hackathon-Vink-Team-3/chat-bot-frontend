import './Chat.css';
import Sms from './../assets/sms.svg?react';
import Mms from './../assets/mms.svg?react';
import { ChatData } from '../utils/constants';
import IconChat from './../assets/IconChat.svg?react';
import User from './../assets/user.svg?react';
import Avatar from './../assets/Avatar.jpg';

export default function Chat() {
  return (
    <div className='chat'>
      {/* Без переписки */}
      {/* <div className='chat__container-whithout-text'>
      <div className='chat__container'>
        <div className='chat__container-icons'>
          <Sms className='modal__sms' />
          <Mms className='modal__mms' />
        </div>
        <p className='chat__text'>{ChatData.textOne}</p>
        <p className='chat__text'>{ChatData.textTwo}</p>
      </div>
      </div> */}

      {/* С чатами */}
      {/* <div className='chat__container-with-chats'>
        <p className='chat__text'>{ChatData.history}</p>

        <div className='chat__container-chat'>
          <IconChat />
          <div className='chat__container-text'>
            <p className='chat__name'>Винк</p>
            <p className='chat__text'>Команда Винк: Рады был помочь!</p>
          </div>
          <p className='chat__text chat__text_side-right'>11:30</p>
        </div>

        <div className='chat__container-chat'>
          <IconChat />
          <div className='chat__container-text'>
            <p className='chat__name'>Винк</p>
            <p className='chat__text'>Команда Винк: Рады был помочь!</p>
          </div>
          <p className='chat__text chat__text_side-right'>11:30</p>
        </div>
      </div> */}

      {/* Чат */}
      <div className='chat__container-with-chat-text'>
        <div className='chat__container-operator'>
          <img src={Avatar} alt='фото пользователя' className='chat__avatar'/>{' '}
          <div className='chat__container-messedge'>
            <p className='chat__name'>
              Здравствуйте. Я хотел бы лист акриловый прикупить, у вас есть в
              наличии?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

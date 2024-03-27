import './Chat.css';
// import Sms from './../../assets/sms.svg?react';
// import Mms from './../../assets/mms.svg?react';
// import { ChatData } from '../../utils/constants';
// import IconChat from './../../assets/IconChat.svg?react';
import User from './../../assets/user.svg?react';
import Avatar from './../../assets/Avatar.jpg';
import Input from '../Input/Input';

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
        <div className='chat__container-user'>
          <div className='chat__container-messedge chat__container-messedge_type_blue'>
            <p className='chat__messedge'>
              Здравствуйте. Я хотел бы лист акриловый прикупить, у вас есть в
              наличии?
            </p>
          </div>
          <img src={Avatar} alt='фото пользователя' className='chat__avatar' />{' '}
        </div>

        <div className='chat__container-operator'>
          <User className='chat__avatar' />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px'}}>
          <div className='chat__container-messedge'>
          
              <p className='chat__messedge chat__messedge_color_white'>
                Здравствуйте
              </p>
            </div>
            <div className='chat__container-messedge'>
              <p className='chat__messedge chat__messedge_color_white'>
                Какая толщина вас интересует?
              </p>
            </div>
          </div>
        </div>

        <div className='chat__container-user'>
          <div className='chat__container-messedge chat__container-messedge_type_blue'>
            <p className='chat__messedge'>12,98</p>
          </div>
          <img src={Avatar} alt='фото пользователя' className='chat__avatar' />{' '}
        </div>

        <div className='chat__container-operator'>
          <User className='chat__avatar' />
          <div className='chat__container-messedge'>
            <p className='chat__messedge chat__messedge_color_white'>
              Да, такой есть в наличии. Лист акрил. EVOGLAS XT 2*2050*3050 мм GE
              прозрачный 92%. Цена 6 118,81 руб за 1 шт.
            </p>
          </div>
        </div>

        <div className='chat__container-user'>
          <div className='chat__container-messedge chat__container-messedge_type_blue'>
            <p className='chat__messedge'>Спасибо</p>
          </div>
          <img src={Avatar} alt='фото пользователя' className='chat__avatar' />{' '}
        </div>
      </div>
    {/* Инпут */}
      <Input />

    </div>
  );
}

import './App.css';
import Icons from './Icons/Icons';
import Online from './assets/Online.svg?react';
import { IconsData, modalData } from './utils/constants';
import Avatar from './assets/Avatar.jpg';
import ArrowDown from './assets/ArrowDown.svg?react';
import Vink from './assets/Vink.svg?react';
import Chat from './Chat/Chat';

export default function App() {
  return (
    <div className='modal'>
      <ArrowDown className='modal__arrow' />
      <div className='modal__container-up'>
        <div className='modal__container-name'>
          <div className='modal__conteiner-arrow'>
            <img
              className='modal__avatar'
              src={Avatar}
              alt='фото пользователя'
            />
            <div className='modal__container-online'>
              <Online className='modal__circle' />
              <p className='modal__name'>{modalData.name}</p>
            </div>
            <p className='modal__sub-name'>{modalData.subName}</p>
          </div>
        </div>
      </div>
      <div className='modal__conteiner-main'>
      <div className='modal__conteiner-icons'>
          {IconsData.map((item, index) => {
            return <Icons key={index} title={item.title} icon={item.icon} />;
          })}
        </div>
        <Chat />
        <div className='modal__conteiner-footer'>
          <p className='modal__vink-text'>{modalData.comand}</p>
          <Vink />
        </div>
      </div>
    </div>
  );
}

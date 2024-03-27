import './IconsContainer.css';
import { IconsData, ChatData } from '../../utils/constants';
import Sms from './../../assets/sms.svg?react';
import Mms from './../../assets/mms.svg?react';
import Icons from '../Icons/Icons';

export default function IconsContainer() {
  return (
    <>
      <div className='icons-container'>
        {IconsData.map((item, index) => {
          return <Icons key={index} title={item.title} icon={item.icon} />;
        })}
      </div>

      {/* Без переписки */}

      <div className='chat__container-whithout-text'>
        <div className='chat__container'>
          <div className='chat__container-icons'>
            <Sms className='modal__sms' />
            <Mms className='modal__mms' />
          </div>
          <p className='chat__text'>{ChatData.textOne}</p>
          <p className='chat__text'>{ChatData.textTwo}</p>
        </div>
      </div>
    </>
  );
}

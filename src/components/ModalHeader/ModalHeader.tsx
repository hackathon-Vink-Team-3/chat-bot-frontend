import './ModalHeader.css';
import { modalData } from '../../utils/constants';
import Online from './../../assets/Online.svg?react';
import Avatar from './../../assets/Avatar.jpg';
import ArrowDown from './../../assets/ArrowDown.svg?react';

interface ModalHeaderProps {
  handleCloseChat: () => void;
}

export default function ModalHeader({ handleCloseChat }: ModalHeaderProps) {
  return (
    <div className='modal-header'>
      <ArrowDown className='modal__arrow' onClick={handleCloseChat} />
      <div className='modal-header__container-name'>
        <div className='modal-header__conteiner-arrow'>
          <img
            className='modal-header__avatar'
            src={Avatar}
            alt='фото пользователя'
          />
          <div className='modal-header__container-online'>
            <Online className='modal-header__circle' />
            <p className='modal-header__name'>{modalData.name}</p>
          </div>
          <p className='modal-header__sub-name'>{modalData.subName}</p>
        </div>
      </div>
    </div>
  );
}

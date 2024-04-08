import './ModalHeader.css';
import { MODAL_DATA } from '../../utils/constants';
import Online from './../../assets/Online.svg?react';
import Avatar from './../../assets/Avatar.jpg';
import ButtonClose from '../ButtonClose/ButtonClose';

interface ModalHeaderProps {
  handleCloseChat: () => void;
}

export default function ModalHeader({ handleCloseChat }: ModalHeaderProps) {
  return (
    <div className='modal-header'>
      <ButtonClose handleCloseChat={handleCloseChat} />
      <div className='modal-header__container-name'>
        <div className='modal-header__conteiner-arrow'>
          <img
            className='modal-header__avatar'
            src={Avatar}
            alt='фото пользователя'
          />
          <div className='modal-header__container-online'>
            <Online className='modal-header__circle' />
            <p className='modal-header__name'>{MODAL_DATA.name}</p>
          </div>
          <p className='modal-header__sub-name'>{MODAL_DATA.subName}</p>
        </div>
      </div>
    </div>
  );
}

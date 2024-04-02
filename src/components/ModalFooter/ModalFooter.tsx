import './ModalFooter.css';
import Vink from '../../assets/Vink.svg';
import { modalData } from '../../utils/constants';

export default function ModalFooter() {
  return (
    <div className='modal-footer'>
      <p className='modal-footer__text'>{modalData.comand}</p>
      <img className='modal-footer__vink' src={Vink} alt='фото пользователя' />
    </div>
  );
}

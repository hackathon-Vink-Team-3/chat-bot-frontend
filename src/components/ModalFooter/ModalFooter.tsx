import './ModalFooter.css';
import Vink from '../../assets/vink.svg';
import { MODAL_DATA } from '../../utils/constants';

export default function ModalFooter() {
  return (
    <div className='modal-footer'>
      <p className='modal-footer__text'>{MODAL_DATA.comand}</p>
      <img className='modal-footer__vink' src={Vink} alt='фото пользователя' />
    </div>
  );
}

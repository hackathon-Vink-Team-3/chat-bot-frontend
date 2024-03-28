import './Modal.css';
import Chat from '../Chat/Chat';
import IconsContainer from './../IconsContainer/IconsContainer';
import ModalFooter from '../ModalFooter/ModalFooter';
import ModalHeader from '../ModalHeader/ModalHeader';
import Whatsapp from '../Whatsapp/Whatsapp';
import Telegram from '../Telegram/Telegram';
import Rate from '../Rate/Rate';

export default function Modal() {
  return (
    <div className='modal'>
      <ModalHeader />
      <div className='modal__conteiner-main'>
         {/* <IconsContainer />  */}
         <Chat />
        {/* <Telegram /> */}
        {/* <Whatsapp /> */}
        {/* <Rate /> */}
        <ModalFooter />
      </div>
    </div>
  );
}

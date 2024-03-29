import './Modal.css';
import Chat from '../Chat/Chat';
import IconsContainer from './../IconsContainer/IconsContainer';
import ModalFooter from '../ModalFooter/ModalFooter';
import ModalHeader from '../ModalHeader/ModalHeader';
import Whatsapp from '../Whatsapp/Whatsapp';
import Telegram from '../Telegram/Telegram';
import Rate from '../Rate/Rate';
import Thanks from '../Thanks/Thanks';

interface ModalProps {
  handleCloseChat: () => void;
}

export default function Modal({ handleCloseChat }: ModalProps) {
  return (
    <div className='modal'>
      <ModalHeader handleCloseChat={handleCloseChat}/>
      <div className='modal__conteiner-main'>
         <IconsContainer /> 
         {/* <Chat /> */}
        {/* <Telegram /> */}
        {/* <Whatsapp /> */}
        {/* <Rate /> */}
        {/* <Thanks /> */}
        <ModalFooter />
      </div>
    </div>
  );
}

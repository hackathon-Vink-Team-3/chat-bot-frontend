import './Modal.css';
// import Chat from '../Chat/Chat';
import IconsContainer from './../IconsContainer/IconsContainer';
import ModalFooter from '../ModalFooter/ModalFooter';
import ModalHeader from '../ModalHeader/ModalHeader';

export default function Modal() {
  return (
    <div className='modal'>
      <ModalHeader />
      <div className='modal__conteiner-main'>
        <IconsContainer />
        {/* <Chat /> */}
        <ModalFooter />
      </div>
    </div>
  );
}
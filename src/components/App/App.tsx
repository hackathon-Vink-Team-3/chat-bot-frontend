import './App.css';
import ArrowDown from './../../assets/ArrowDown.svg?react';
// import Chat from '../Chat/Chat';
import IconsContainer from './../IconsContainer/IconsContainer';
import ModalFooter from '../ModalFooter/ModalFooter';
import ModalHeader from '../ModalHeader/ModalHeader';

export default function App() {
  return (
    <div className='modal'>
      <ArrowDown className='modal__arrow' />
      <ModalHeader />
      <div className='modal__conteiner-main'>
        <IconsContainer />
        {/* <Chat /> */}
        <ModalFooter />
      </div>
    </div>
  );
}

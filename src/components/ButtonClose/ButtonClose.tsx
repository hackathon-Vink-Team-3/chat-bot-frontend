import './ButtonClose.css';
import ArrowDown from './../../assets/ArrowDown.svg?react';

interface ButtonCloseProps {
  handleCloseChat: () => void;
}

export default function ButtonClose({ handleCloseChat }: ButtonCloseProps) {
  return <ArrowDown className='modal__arrow' onClick={handleCloseChat}/>;
}

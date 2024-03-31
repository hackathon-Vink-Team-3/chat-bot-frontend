import './Input.css';
import Send from './../../assets/Send.svg?react';

interface InputProps {
  setInactiveTime?: React.Dispatch<React.SetStateAction<number>>;
}

export default function Input({ setInactiveTime }: InputProps) {
  const handleInput = () => {
    if (setInactiveTime) {
      setInactiveTime(0);
    }
  };

  return (
    <div className='input__container'>
      <input
        className='input'
        type='text'
        placeholder='Введите сообщение...'
        onChange={handleInput}
      />
      <Send className='input__img' />
    </div>
  );
}

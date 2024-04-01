import './Input.css';
import Send from './../../assets/Send.svg?react';
import { useState } from 'react';

interface InputProps {
  setInactiveTime?: React.Dispatch<React.SetStateAction<number>>;
  addMessage: (message: string) => void;
  setIsRateOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Input({
  setInactiveTime,
  setIsRateOpen,
  addMessage,
}: InputProps) {
  const [inputValue, setInputValue] = useState('');

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (setInactiveTime) {
      setInactiveTime(0);
    }
    if (event.target.value.toLowerCase().includes('спасибо')) {
      setIsRateOpen(true);
    }
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      addMessage(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className='input__container'>
      <input
        className='input'
        type='text'
        placeholder='Введите сообщение...'
        value={inputValue}
        onChange={handleInput}
      />
        <Send className='input__img' onClick={handleSendMessage} />
    </div>
  );
}

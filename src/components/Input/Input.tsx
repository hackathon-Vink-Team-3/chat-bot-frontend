import './Input.css';
import Send from './../../assets/Send.svg?react';
import { useState } from 'react';

interface InputProps {
  setInactiveTime?: React.Dispatch<React.SetStateAction<number>>;
  addMessage: (message: string) => void;
}

export default function Input({
  setInactiveTime,
  addMessage,
}: InputProps) {
  const [inputValue, setInputValue] = useState('');

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (setInactiveTime) {
      setInactiveTime(0);
    }
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      addMessage(inputValue);
      setInputValue('');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSendMessage();
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
        onKeyDown={handleKeyDown}
      />
      <Send className='input__img' onClick={handleSendMessage} />
    </div>
  );
}

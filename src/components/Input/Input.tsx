import './Input.css';
import Send from './../../assets/Send.svg?react'


export default function Input() {
  return (
    <div className='input__container'>
     <input className='input' type='text' placeholder='Введите сообщение...'/>
    <Send className='input__img'/>
    </div>
  );
}

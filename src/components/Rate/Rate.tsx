import './Rate.css';
// import User from './../../assets/user.svg?react';
import User from './../../assets/user.svg?react';
import Input from '../Input/Input';

export default function Rate() {
  return (
    <div className='rate'>
      {/* <div className='chat__container-operator'>
        <User className='chat__avatar' />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div className='chat__container-messedge'>
            <p className='chat__messedge chat__messedge_color_white'>
              Оцените, пожалуйста, насколько вероятно, что вы порекомендуете
              нашу компанию своим знакомым?
            </p>
          </div>
        </div>
      </div> */}
      <Input />
    </div>
  );
}

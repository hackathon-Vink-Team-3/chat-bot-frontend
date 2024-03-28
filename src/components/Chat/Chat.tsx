import './Chat.css';
import User from './../../assets/user.svg?react';
import Avatar from './../../assets/Avatar.jpg';
import Input from '../Input/Input';
import ChatOperator from '../ChatOperator/ChatOperator';
import { messageOperatorData } from '../../utils/constants';

export default function Chat() {
  return (
    <div className='chat'>
      <div className='chat__container-with-chat-text'>

        <div className='chat__container-user'>
          <div className='chat__container-messedge chat__container-messedge_type_blue'>
            <p className='chat__messedge'>
              Здравствуйте. Я хотел бы лист акриловый прикупить, у вас есть в
              наличии?
            </p>
          </div>
          <img src={Avatar} alt='фото пользователя' className='chat__avatar' />{' '}
        </div>

      <ChatOperator text={messageOperatorData.messOne}/>
      <ChatOperator text={messageOperatorData.messTwo}/>

        <div className='chat__container-user'>
          <div className='chat__container-messedge chat__container-messedge_type_blue'>
            <p className='chat__messedge'>12,98</p>
          </div>
          <img src={Avatar} alt='фото пользователя' className='chat__avatar' />{' '}
        </div>
        
        <ChatOperator text={messageOperatorData.messThree}/>

        <div className='chat__container-user'>
          <div className='chat__container-messedge chat__container-messedge_type_blue'>
            <p className='chat__messedge'>Спасибо</p>
          </div>
          <img src={Avatar} alt='фото пользователя' className='chat__avatar' />{' '}
        </div>
      </div>
      <Input />
    </div>
  );
}

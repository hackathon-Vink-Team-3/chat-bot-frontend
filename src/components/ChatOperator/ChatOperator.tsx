import './ChatOperator.css';
import User from './../../assets/user.svg?react';
import MessageOperator from '../MessageOperator/MessageOperator';

interface ChatOperatorProps {
  text?: string;
}

export default function ChatOperator({ text }: ChatOperatorProps) {
  return (
    <div className='chat-operator'>
      <div className='chat-operator__container-with-chat-text'>
        <div className='chat-operator__container-operator'>
          <User className='chat-operator__avatar' />
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            <MessageOperator text={text} />
            
          </div>
        </div>
      </div>
    </div>
  );
}

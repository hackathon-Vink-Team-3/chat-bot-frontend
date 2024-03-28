import './Chat.css';

import Input from '../Input/Input';
import ChatOperator from '../ChatOperator/ChatOperator';
import { messageOperatorData, messageUserData } from '../../utils/constants';
import ChatUser from '../ChatUser/ChatUser';

export default function Chat() {
  return (
    <div className='chat'>
      <div className='chat__container-with-chat-text'>
        <ChatUser text={messageUserData.messOne} />
        <ChatOperator text={messageOperatorData.messOne} />
        <ChatOperator text={messageOperatorData.messTwo} />
        <ChatUser text={messageUserData.messTwo} />
        <ChatOperator text={messageOperatorData.messThree} />
        <ChatUser text={messageUserData.messThree} />
      </div>
      <Input />
    </div>
  );
}

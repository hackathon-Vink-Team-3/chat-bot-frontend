import './Thanks.css';
import Input from '../Input/Input';
import ChatOperator from '../ChatOperator/ChatOperator';
import { thanksData } from '../../utils/constants';
import Hand from '../../assets/Thanks.svg?react';

export default function Thanks() {
  return (
    <div className='thanks'>
      <ChatOperator text={thanksData.thanks} />
      <Hand className='thanks__img'/>
      <Input />
    </div>
  );
}

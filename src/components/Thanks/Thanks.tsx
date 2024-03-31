import './Thanks.css';
import Input from '../Input/Input';
import ChatOperator from '../ChatOperator/ChatOperator';
import { thanksData } from '../../utils/constants';
import Hand from '../../assets/Thanks.svg';

export default function Thanks() {
  return (
    <div className='thanks'>
      <ChatOperator text={thanksData.thanks} />
      <img src={Hand} className='thanks__img' alt='Спасибо' />
      <Input />
    </div>
  );
}

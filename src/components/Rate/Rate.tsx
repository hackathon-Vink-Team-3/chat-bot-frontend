import './Rate.css';
import Input from '../Input/Input';
import ChatOperator from '../ChatOperator/ChatOperator';
import { rateData } from '../../utils/constants';
import RateStars from '../RateStars/RateStars';

export default function Rate() {
  return (
    <div className='rate'>
     <ChatOperator text={rateData.messOne}/>
     <RateStars />
      <Input />
    </div>
  );
}

import './Rate.css';
import Input from '../Input/Input';
import ChatOperator from '../ChatOperator/ChatOperator';
import { rateData } from '../../utils/constants';
import RateStars from '../RateStars/RateStars';

interface RateProps {
  setInactiveTime: React.Dispatch<React.SetStateAction<number>>}

export default function Rate({ setInactiveTime }: RateProps) {
  return (
    <div className='rate'>
      <ChatOperator text={rateData.messOne} />
      <RateStars />
      <Input setInactiveTime={setInactiveTime}/>
    </div>
  );
}

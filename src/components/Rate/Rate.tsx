import './Rate.css';
import Input from '../Input/Input';
import ChatOperator from '../ChatOperator/ChatOperator';
import { rateData } from '../../utils/constants';
import RateStars from '../RateStars/RateStars';

interface RateProps {
  setIsThanksOpen: (isOpen: boolean) => void;
  handleCloseChat: (isOpen: boolean) => void;
}

export default function Rate({ setIsThanksOpen, handleCloseChat }: RateProps) {
  return (
    <div className='rate'>
      <ChatOperator text={rateData.messOne} />
      <RateStars
        setIsThanksOpen={setIsThanksOpen}
        handleCloseChat={handleCloseChat}
      />
      <Input />
    </div>
  );
}

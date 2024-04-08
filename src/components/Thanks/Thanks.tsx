import './Thanks.css';
import Input from '../Input/Input';
import ChatOperator from '../ChatOperator/ChatOperator';
import { THANKS_DATA } from '../../utils/constants';
import Hand from '../../assets/Thanks.svg';

interface ThanksProps {
  setIsChatOpen: (isOpen: boolean) => void;
  setIsRateOpen: (isOpen: boolean) => void;
  setIsThanksOpen: (isOpen: boolean) => void;
}

export default function Thanks({
  setIsChatOpen,
  setIsRateOpen,
  setIsThanksOpen,
}: ThanksProps) {

  return (
    <div className='thanks'>
      <ChatOperator text={THANKS_DATA.thanks} />
      <img src={Hand} className='thanks__img' alt='Спасибо' />
      <div className='thanks__container'>
        
      </div>
      <Input
        setIsChatOpen={setIsChatOpen}
        setIsRateOpen={setIsRateOpen}
        setIsThanksOpen={setIsThanksOpen}
      />
    </div>
  );
}

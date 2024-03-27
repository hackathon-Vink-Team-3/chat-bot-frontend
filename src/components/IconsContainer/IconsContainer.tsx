import './IconsContainer.css';
import { IconsData } from '../../utils/constants';
import Icons from '../Icons/Icons';

export default function IconsContainer() {
  return (
    <div className='icons-container'>
      {IconsData.map((item, index) => {
        return <Icons key={index} title={item.title} icon={item.icon} />;
      })}
    </div>
  );
}

import './Icons.css';

interface IconsProps {
  title: string;
  icon: string;
}

export default function Icons({ title, icon }: IconsProps) {
  return (
    <div className='icons'>
      <div className='icons__container'>
        <img className='icons__img' src={icon} alt='иконка меню' />
      </div>
      <p className='icons__text'>{title}</p>
    </div>
  );
}

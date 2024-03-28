import './TelegramList.css';

interface TelegramListProps {
  field: string;
}

export default function TelegramList({ field }: TelegramListProps) {
  return (
      <li className='telegram-list__text'>{field}</li>
  );
}

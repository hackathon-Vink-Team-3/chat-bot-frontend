import './MessageOperator.css';

interface ChatOperatorProps {
  text?: string;
}

export default function MessageOperator({ text }: ChatOperatorProps) {
  return (
    <div className='message-operator'>
      <p className='message-operator__messedge message-operator__messedge_color_white'>
        {text}
      </p>
    </div>
  );
}

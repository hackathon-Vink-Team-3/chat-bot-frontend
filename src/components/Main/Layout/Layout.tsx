import './Layout.css';
import Company from './../Company/Company';
import WhiteSection from '../WhiteSection/WhiteSection';

interface LayoutProps {
  handleOpenChat: () => void;
}

export default function Layout({ handleOpenChat }: LayoutProps) {
  return (
    <>
      <div className='layout'>
        <Company />
        <WhiteSection handleOpenChat={handleOpenChat}/>
      </div>
    </>
  );
}

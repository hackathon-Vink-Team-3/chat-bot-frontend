import Logo from './../../../assets/logoVink.svg?react';
import './Company.css';
import { COMPANY_DESCRIPTION } from './../../../utils/constants'

export default function Company() {
  return (
    <div className='company'>
      <Logo className='company__img'/>
      <p className='company__subtitle'>
        {COMPANY_DESCRIPTION}
      </p>
    </div>
  );
}

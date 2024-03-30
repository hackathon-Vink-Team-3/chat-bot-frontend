import './Main.css';

const COMPANY_DESCRIPTION =
  'Компания Винк — крупнейший поставщик материалов и оборудования для рынка визуальных офлайн-коммуникаций';

const CompanyDescription = () => (
  <p className='subtitle' style={{ width: '418px' }}>
    {COMPANY_DESCRIPTION}
  </p>
);

export default CompanyDescription;

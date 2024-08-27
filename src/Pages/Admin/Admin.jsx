import React, { useState } from 'react';
import './Admin.css';
import AdminMenu from '../../Components/AdminMenu/AdminMenu';
import AllPropertyList from '../../Components/AllPropertyList/AllPropertyList';
import EnquiryList from '../../Components/EnquiryList/EnquiryList';
import AddProperty from '../../Components/AddProperty/AddProperty';
import EnquiryDetail from '../../Components/EnquiryDetail/EnquiryDetail';

const Admin = () => {
  const [menu, setMenu] = useState('properties');

  const renderContent = () => {
    switch (menu) {
      case 'properties':
          return <AllPropertyList setMenu={setMenu}/>;
        case 'enquiry':
          return <EnquiryList setMenu={setMenu}/>;
          case 'add-property':
            return <AddProperty/>;
            case 'enquiry-details':
              return <EnquiryDetail/>;
      default:
        return <div>Select an option from the menu</div>;
    }
  };

  return (
    <div className='admin'>
      <AdminMenu menu={menu} setMenu={setMenu} />
      <div className="side-panel">
        {renderContent(setMenu)}
      </div>
    </div>
  );
};

export default Admin;

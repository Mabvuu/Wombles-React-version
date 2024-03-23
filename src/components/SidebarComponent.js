import React from 'react';
import Sidebar from 'react-sidebar';

const SidebarComponent = ({ isOpen, toggleSidebar }) => {
  return (
    <Sidebar
      sidebar={<div>Your Sidebar Content Goes Here</div>}
      open={isOpen}
      onSetOpen={toggleSidebar}
      pullRight={true}
    >
      <div></div>
    </Sidebar>
  );
};

export default SidebarComponent;

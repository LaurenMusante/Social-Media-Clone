import React from 'react';



function Header(){
    var stylesThree = {
        border: '2px solid grey'

        
    }
  return (
<div className="d-flex bd-highlight mb-3">
  <div className="p-2 bd-highlight">Flex item</div>
  <div className="p-2 bd-highlight">Flex item</div>
  <div className="ml-auto p-2 bd-highlight">Flex item</div>
</div>

    //   <div className='d-flex bd-highlight mb-3' style={stylesThree}>
    //     <div className='mr-auto p-2 bd-highlight'>Home</div>
    //     <div className="p-2 bd-highlight">Notifications</div>
    //     <div className="p-2 bd-highlight">Messages</div>
    //     <div className="p-2 bd-highlight">Search</div>
    //     <div className="p-2 bd-highlight">Tweet</div>
    //   </div>
    
  );
}

export default Header;
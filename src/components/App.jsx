import React from 'react';
import CurrentUser from './CurrentUser';
import TextBlock from './TextBlock';
import Feed from './Feed';
import FriendSuggestions from './FriendSuggestions';
import Header from './Header'

// function App(){
//   return (
//     <div className="container">
//       <div className="row"> 
//         <CurrentUser
//           name="PersonName"
//           age="400"
//           gender="female" />
//           <Feed />
//           <FriendSuggestions />
//       </div>
//       <div className="row">
//         <TextBlock
//         content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat quod ut at eligendi illo maiores corrupti recusandae cumque, accusamus consequuntur? Illo sequi soluta atque voluptates veniam accusamus ut veritatis quia?" />
//       </div>
//     </div>
//   );
// }


function App(){
  return (
    <div className="container">
      <div className="row">
          <Header />
      </div>
      <div className="row"> 
        <div className="flex-column col-md-4 mb-3">
        <CurrentUser
          name="PersonName"
          age="400"
          gender="female" />
        <TextBlock
          content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat quod ut at eligendi illo maiores corrupti recusandae cumque, accusamus consequuntur? Illo sequi soluta atque voluptates veniam accusamus ut veritatis quia?" />
        </div>
        <div className="col-md-5">
          <Feed />
        </div>
        <div className="col-md-3">
          <FriendSuggestions />
        </div>
      </div>
    </div>
  );
}

export default App;
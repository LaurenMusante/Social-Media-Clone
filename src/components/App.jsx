import React from 'react';
import CurrentUser from './CurrentUser';
import TextBlock from './TextBlock';
import Feed from './Feed';
import FriendSuggestions from './FriendSuggestions';

function App(){
  return (
    <div className="container">
      <div className="row"> 
        <CurrentUser
          name="PersonName"
          age="400"
          gender="female" />
          <Feed />
          <FriendSuggestions />
      </div>
      <div className="row">
        <TextBlock
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat quod ut at eligendi illo maiores corrupti recusandae cumque, accusamus consequuntur? Illo sequi soluta atque voluptates veniam accusamus ut veritatis quia?" />
      </div>
    </div>
  );
}

export default App;
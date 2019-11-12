import React from 'react';
import CurrentUser from './CurrentUser';
import TextBlock from './TextBlock';

function App(){
  return (
    <div>
       <CurrentUser
        name="PersonName"
        age="400"
        gender="female"
        />
        <TextBlock 
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat quod ut at eligendi illo maiores corrupti recusandae cumque, accusamus consequuntur? Illo sequi soluta atque voluptates veniam accusamus ut veritatis quia?" />
    </div>
  );
}

export default App;
import React from 'react';
import FriendSuggestionsItem from './FriendSuggestionsItem.jsx'

var friendSuggestionsArray = [
  {
    names: 'Friend 1',
  },
  {
    names: 'Friend 2',
  },
  {
    names: 'Friend 3',
  }
];

function FriendSuggestions(){
    var myStyledComponentStyles = {
        border: '3px solid grey'       
    }   
  
  return (
    <div style={myStyledComponentStyles}>
        <h2>Friend Suggestions</h2>
       {friendSuggestionsArray.map((friendSuggestionsItem, index) =>
        <FriendSuggestionsItem names={friendSuggestionsItem.names}
             key={index} />
      )}
    </div>
  );
}

export default FriendSuggestions;
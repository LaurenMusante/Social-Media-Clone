import React from 'react';
import FeedItem from './FeedItem.jsx'

var feedArray = [
  {
    names: 'Thato and Haley',
    text: '3A',
  },
  {
    names: 'Sleater and Kinney',
    text: '4B',
  },
  {
    names: 'Imani & Jacob',
    text: '9F',
  }
];

function Feed(){
  var myStyledComponentStyles = {
    border: '3px solid grey'       
}   
  
  return (
    <div className='col-md-4' style={myStyledComponentStyles}>
      
      {feedArray.map((feedItem, index) =>
        <FeedItem names={feedItem.names}
          text={feedItem.text}
          key={index} />
      )}
     
    </div>
  );
}

export default Feed;
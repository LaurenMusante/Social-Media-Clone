import React from 'react';
import PropTypes from 'prop-types';

function FriendSuggestionsItem(props){
    var myStyledComponentStyles = {
        fontFamily: 'sans-serif',
        paddingTop: '45px'        
      }

    return (
        <div style={myStyledComponentStyles} >
            <h2>{props.names}</h2>
            <button>Button</button>
            <hr/>
        </div>
    );
}

FriendSuggestionsItem.propTypes = {
    name: PropTypes.string.isRequired,
  };

export default FriendSuggestionsItem;
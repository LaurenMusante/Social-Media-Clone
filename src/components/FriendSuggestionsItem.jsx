import React from 'react';
import PropTypes from 'prop-types';
import guy from '../assets/img/guy.png';

function FriendSuggestionsItem(props){
    var myStyledComponentStyles = {
        fontFamily: 'sans-serif',
        paddingTop: '45px'        
      }

    return (
        <div style={myStyledComponentStyles} >
            <hr/>
            <img src={guy}/>
            <h2>{props.names}</h2>
            <button>Button</button>
        </div>
    );
}

FriendSuggestionsItem.propTypes = {
    name: PropTypes.string.isRequired,
  };

export default FriendSuggestionsItem;
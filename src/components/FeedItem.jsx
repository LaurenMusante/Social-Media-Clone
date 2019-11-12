import React from 'react';
import PropTypes from 'prop-types';

function FeedItem(props){
    var myStyledComponentStyles = {
        fontFamily: 'sans-serif',
        paddingTop: '50px'
      }

    return (
        <div style={myStyledComponentStyles} >
            <h2>{props.names}</h2>
            <h3>{props.text}</h3>
            <hr/>
        </div>
    );
}

FeedItem.propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  };

export default FeedItem;
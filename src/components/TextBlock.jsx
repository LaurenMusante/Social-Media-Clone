import React from 'react';
import PropTypes from 'prop-types';

function TextBlock(props){
    var myStyledComponentStyles = {
        border: '3px solid grey'       
    }   
    return (
        <div style={myStyledComponentStyles} className="jumbotron">
            <h4>{props.content}</h4>
        </div>
    );
}

TextBlock.propTypes = {
    content: PropTypes.string.isRequired,
  };

export default TextBlock;
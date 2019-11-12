import React from 'react';
import PropTypes from 'prop-types';

function TextBlock(props){
    return (
        <div className="jumbotron col-md-4">
            <h4>{props.content}</h4>
        </div>
    );
}

TextBlock.propTypes = {
    content: PropTypes.string.isRequired,
  };

export default TextBlock;
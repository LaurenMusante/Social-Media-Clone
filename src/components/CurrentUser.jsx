import React from 'react';
import PropTypes from 'prop-types';

function CurrentUser(props){
    return (
        <div>
            <h2>{props.name}</h2>
            <h3>{props.age}</h3>
            <h3>{props.gender}</h3>
        </div>
    );
}

CurrentUser.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired
  };

export default CurrentUser;
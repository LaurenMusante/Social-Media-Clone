import React from 'react';
import PropTypes from 'prop-types';

function CurrentUser(props){
    var myStyledComponentStyles = {
        backgroundColor: '#ecf0f1',
        fontFamily: 'sans-serif',
        paddingTop: '50px'
      }

    return (
        <div style={myStyledComponentStyles} className='jumbotron col-md-4'>
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
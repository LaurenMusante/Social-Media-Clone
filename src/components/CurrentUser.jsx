import React from 'react';
import PropTypes from 'prop-types';

function CurrentUser(props){
    var myStyledComponentStyles = {        
        fontFamily: 'sans-serif'    
      };
    var stylesTwo = {
        border: '3px solid grey',
        backgroundColor: '#ecf0f1',
    }

    return (
    
        <div style={myStyledComponentStyles}>
            <div style={stylesTwo} className='jumbotron'>
                <h2>{props.name}</h2>
                <h3>{props.age}</h3>
                <h3>{props.gender}</h3>
            </div>
        </div>
    );
}

CurrentUser.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired
  };

export default CurrentUser;


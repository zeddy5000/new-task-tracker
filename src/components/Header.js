import React from 'react';
import Button from './Button';
import propTypes from 'prop-types';
import Button2 from './Button2';



const Header = ({title,onAdd,showAdd}) => {
    
  return (
    <header className='header'>
        <h1>{title}</h1>
       
        <Button text={showAdd ? 'Close' : 'Add'} color = {showAdd ? 'red': 'green'} onClick={onAdd} />

        </header>
  )
}
Header.defaultProps = {
    title:'Task Tracker',
}
Header.propTypes = {
    title:propTypes.string.isRequired,
}

export default Header
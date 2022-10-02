import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

//rafce + TAB to create an arrow function

const Header = ({title, onAdd,  showAdd}) => {

  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color={showAdd === true ? 'Crimson' : 'green'} text={showAdd ? 'X' : 'Add'} onClick={onAdd} />
    </header>
  )
}
Header.defaultProps = {
    title: 'Thats the default title',
}

// Property type definition, in this case the Title is obligatorily type String (and then, is Required.)
Header.propTypes = {
  title: PropTypes.string.isRequired,
}

//CSS in JS
// const headingStyle = {
//   color: 'red', backgroundColor:'Black'
// }

export default Header

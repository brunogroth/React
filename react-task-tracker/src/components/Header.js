import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

//rafce + TAB to create an arrow function

const Header = (props) => {
  const onClick = () => {
    console.log('damn clicked')
  }
  return (
    <header className='header'>
        <h1>{props.title}</h1>
        <Button color='green' text='Hello' onClick={onClick}/>
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

import React from 'react'
//rafce + TAB to create an arrow function

const Header = (props) => {
  return (
    <header>
        <h1>{props.title}</h1>
    </header>
  )
}
Header.defaultProps = {
    title: 'Thats the default title',
}

export default Header

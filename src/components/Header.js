import PropTypes from 'prop-types'

import React from 'react'

const Header = (props) => {
    return (
        <header>
            <h1 style={HeaderStyle}>Task Tracker</h1>
            <p>{props.title}</p>
        </header>
    )
}

Header.defaultProps = {
    title: 'Hello'
}

Header.propTypes = {
    title: PropTypes.string,
}

// Header.propTypes = {
//     title: PropTypes.string.isRequired,
// }

const HeaderStyle = {
    color: 'blue'
}
export default Header

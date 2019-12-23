import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/services">Services</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/about">About Us</Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="http://amplifieddigitalagency-6728858.hs-sites.com/amplified-connect" className="button special fit">Get Started</a></li>            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu

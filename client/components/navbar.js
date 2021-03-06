import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <center>
      <h1>Cheese Factory</h1>

      <nav>
        {isLoggedIn ? (
          <div>
            <Link to="/cheeses">Cheese</Link>
            <Link to="/wines">Wine</Link>
            {/* <Link to="/beer">Beer</Link>
            <Link to="/cracker">Cracker</Link> */}
            {/* The navbar will show these links after you log in */}
            <Link to="/">Home</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
        ) : (
          <div>
            <Link to="/">Home</Link>
            <Link to="/cheeses">Cheese</Link>
            <Link to="/wines">Wine</Link>
            {/* <Link to="/beer">Beer</Link>
            <Link to="/cracker">Cracker</Link> */}

            {/* The navbar will show these links before you log in */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
      </nav>
      <hr />
    </center>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

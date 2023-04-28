import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content-1">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="header-logo"
      />
      <button type="button" className="logout-mobile-btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="logout-icon"
        />
      </button>
      <ul className="nav-menu">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="nav-link">
            Products
          </Link>
        </li>
        <li>
          <Link to="/cart" className="nav-link">
            Cart
          </Link>
        </li>
      </ul>
      <button type="button" className="logout-desktop-btn">
        Logout
      </button>
    </div>
    <ul className="nav-content-2">
      <li>
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="logout-icon"
          />
        </Link>
      </li>
      <li>
        <Link to="/products">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="logout-icon"
          />
        </Link>
      </li>
      <li>
        <Link to="/cart">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png "
            alt="nav cart"
            className="logout-icon"
          />
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header

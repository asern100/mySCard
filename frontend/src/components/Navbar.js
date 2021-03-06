import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* logo */}
            <div className="navbar__logo">
                <h2>shopCard</h2>
            </div>

            {/* links */}
            <ul className="navbar__links">
                <li>
                    <Link to="/cart"> 
                        <i className="fas fa-shopping-cart"></i>
                        Cart
                        <span className="cartlogo_badge">0</span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Shop
                    </Link>
                    
                </li>
            </ul>


            {/* hamburger menu */}
        </nav>
    )
}

export default Navbar;
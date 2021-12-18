import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartArrowDown,
  faArrowRightFromBracket,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import { logoutUser } from "../actions/authAction";

function Header({ auth, cart, logoutUser }) {
  return (
    <nav className="flex bg-blue-800 text-white px-6 py-4 text-lg font-bold justify-around sticky top-0">
      <Link to="/">HOME</Link>
      <div className="flex items-center w-1/4 justify-between bg-white text-black  rounded-lg">
        <input
          type="text"
          className="rounded-lg outline-none px-3"
          placeholder="Search for products ..."
        />
        <FontAwesomeIcon
          className="p-2 cursor-pointer"
          icon={faSearch}
          onClick={() => console.log("hey")}
        />
      </div>
      <div className="w-1/4 flex justify-between items-center">
        <Link to="/cart" className="flex items-center">
          <FontAwesomeIcon className="text-2xl" icon={faCartArrowDown} />
          <span className="ml-4">Cart </span>
          <span className="text-yellow-200 ml-5">
            {cart.cartItems.length > 0 && cart.cartItems.length}
          </span>
        </Link>
        {auth.isAuthenticated ? (
          <div onClick={() => logoutUser()} className="cursor-pointer">
            <FontAwesomeIcon
              className="text-2xl"
              icon={faArrowRightFromBracket}
            />
            <span className="ml-4">Log Out</span>
          </div>
        ) : (
          <Link to="/auth" className="flex items-center">
            <FontAwesomeIcon
              className="text-2xl"
              icon={faArrowRightFromBracket}
            />
            <span className="ml-4">Log In</span>
          </Link>
        )}
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  cart: state.cart,
});

export default connect(mapStateToProps, { logoutUser })(Header);

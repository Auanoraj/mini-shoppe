import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../actions/cartAction";

const Checkout = ({ auth, clearCart }) => {
  const [showPage, setShowPage] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) setShowPage(true);
    else navigate("/auth");
  }, [auth]);

  return (
    showPage && (
      <div className="flex mt-60 justify-center items-center">
        <button
          className="bg-green-500 p-4 rounded text-lg font-semibold hover:bg-green-800 hover:text-white"
          onClick={() => {
            navigate("/");
            clearCart();
          }}
        >
          Confirm Order
        </button>
      </div>
    )
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { clearCart })(Checkout);

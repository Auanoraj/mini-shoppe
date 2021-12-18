import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndianRupeeSign,
  faStar,
  faCartPlus,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import { addToCart } from "../actions/cartAction";
import { useNavigate } from "react-router-dom";

const ProductCards = ({ products, addToCart, cart }) => {
  const navigate = useNavigate();

  if (products.length > 0) {
    return (
      <div className="grid grid-cols-5 gap-4 p-4">
        {products.map((item) => {
          return (
            <div key={item.id} className="p-5 bg-gray-200 rounded-lg h-96">
              <img
                src={item.image}
                alt=""
                className="w-full h-2/3 object-fill"
              />
              <div className="mt-4">
                <div className="flex items-center justify-center">
                  <FontAwesomeIcon icon={faIndianRupeeSign} />
                  <span className="ml-2 text-lg font-semibold">
                    {item.price}
                  </span>
                </div>
                <div
                  title={item.title}
                  className="w-full whitespace-nowrap text-ellipsis overflow-hidden my-2"
                >
                  {item.title}
                </div>
                <div className="flex items-center justify-between font-semibold">
                  <div>
                    <FontAwesomeIcon
                      className=" text-yellow-500"
                      icon={faStar}
                    />
                    <span className="ml-2">{item.rating.rate}/5</span>
                  </div>
                  {cart.cartItems.some((el) => el.id === item.id) ? (
                    <button
                      className="rounded bg-green-300 px-3 py-2 font-semibold cursor-pointer"
                      onClick={() => navigate("/cart")}
                    >
                      Go to cart
                      <FontAwesomeIcon className="ml-3" icon={faCartShopping} />
                    </button>
                  ) : (
                    <button
                      className="rounded bg-yellow-300 px-3 py-2 font-semibold cursor-pointer"
                      onClick={() =>
                        addToCart({
                          ...item,
                          quantity: 1,
                          totalPrice: item.price,
                        })
                      }
                    >
                      Add to cart
                      <FontAwesomeIcon className="ml-3" icon={faCartPlus} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else return <span>Sorry there are no poducts ...</span>;
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { addToCart })(ProductCards);

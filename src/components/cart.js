import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndianRupeeSign,
  faStar,
  faTrashCan,
  faPlusCircle,
  faMinusCircle,
  faXmark,
  faEquals,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import { updateCart, removeItem } from "../actions/cartAction";

function Cart({ cart, updateCart, removeItem }) {
  const navigate = useNavigate();

  const handleTotalItems = () => {
    return cart.cartItems.reduce((pV, cV) => {
      if (cV.quantity) return pV + cV.quantity;
      else return pV;
    }, 0);
  };

  const handleFinalPrice = () => {
    return cart.cartItems.reduce((pV, cV) => {
      if (cV.totalPrice) return pV + cV.totalPrice;
      else return pV;
    }, 0);
  };

  return cart.cartItems.length > 0 ? (
    <div className="flex flex-row mx-auto p-3 m-4 w-11/12">
      <div className="flex flex-col w-3/5 mr-4">
        {cart.cartItems.map((item) => {
          return (
            <div
              key={item.id}
              className="flex mb-4 w-full bg-gray-400 h-56 rounded"
            >
              <img src={item.image} alt="" className="p-3 object-fill w-1/3" />
              <div className="flex flex-col items-center w-2/3">
                <div className="flex flex-row items-center justify-between w-11/12 mt-10 ">
                  <div
                    title={item.title}
                    className="text-lg whitespace-nowrap text-ellipsis overflow-hidden w-4/6 text-left"
                  >
                    {item.title}
                  </div>

                  <div className=" w-2/12">
                    <FontAwesomeIcon
                      className=" text-yellow-300"
                      icon={faStar}
                    />
                    <span className="ml-2">{item.rating.rate}/5</span>
                  </div>
                  <FontAwesomeIcon
                    onClick={() => removeItem(item.id)}
                    className="ml-10 cursor-pointer hover:text-red-700"
                    icon={faTrashCan}
                  />
                </div>
                <div className="flex justify-between items-center w-11/12 mt-20">
                  <div className="text-left">
                    <label className="mr-3 text-lg">Qunatity: </label>
                    {item.quantity > 1 ? (
                      <FontAwesomeIcon
                        className="cursor-pointer"
                        icon={faMinusCircle}
                        onClick={() =>
                          updateCart({
                            id: item.id,
                            quantity: item.quantity - 1,
                            price: item.price - item.price * 1,
                          })
                        }
                      />
                    ) : (
                      <FontAwesomeIcon
                        className="text-gray-100"
                        icon={faMinusCircle}
                      />
                    )}
                    <input
                      className="outline-none w-1/5 mx-2 rounded p-1 text-center pl-4"
                      type="number"
                      value={item.quantity}
                      readOnly
                    />
                    <FontAwesomeIcon
                      className="cursor-pointer"
                      icon={faPlusCircle}
                      onClick={() =>
                        updateCart({
                          id: item.id,
                          quantity: item.quantity + 1,
                        })
                      }
                    />
                  </div>

                  <div className="text-right w-10/12 text-2xl font-semibold">
                    <FontAwesomeIcon
                      className="mr-4"
                      icon={faIndianRupeeSign}
                    />
                    {item.totalPrice}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mx-4 w-2/5 text-left">
        <span className="text-2xl font-semibold">Order Summary</span>
        <div className="mt-8">
          {cart.cartItems.map((item) => {
            return (
              <div key={item.id} className="flex flex-row items-center">
                <div className=" w-8/12 whitespace-nowrap text-ellipsis overflow-hidden text-left">
                  {item.title}
                </div>
                <FontAwesomeIcon icon={faXmark} />
                <div className="mx-6">{item.quantity}</div>
                <FontAwesomeIcon icon={faEquals} />
                <div className="ml-6">
                  <FontAwesomeIcon className="mr-1" icon={faIndianRupeeSign} />
                  {item.totalPrice}
                </div>
              </div>
            );
          })}
        </div>
        <div className=" border-b-2 border-gray-500 mt-4 w-full"></div>
        <div className="mt-2 w-full flex flex-row items-center justify-between text-lg font-semibold text-left">
          <div className="w-8/12 whitespace-nowrap text-ellipsis overflow-hidden text-left">
            Total Price:
          </div>
          <FontAwesomeIcon icon={faXmark} />
          <div className="mx-4">{handleTotalItems()}</div>
          <FontAwesomeIcon className="mr-4" icon={faEquals} />
          <div>
            <FontAwesomeIcon icon={faIndianRupeeSign} />
            <span className="ml-1">{handleFinalPrice()}</span>
          </div>
        </div>
        <div className="flex items-center justify-end w-full">
          <button
            className="mt-10 text-right bg-yellow-600 p-2 rounded text-white font-semibold"
            onClick={() => navigate("/checkout")}
          >
            Proceed to checkout
            <FontAwesomeIcon className="ml-3" icon={faCartShopping} />
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center mt-60">
      You do not have any products in cart .
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { updateCart, removeItem })(Cart);

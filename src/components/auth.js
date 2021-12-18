import { useEffect, useRef } from "react";

import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../actions/authAction";

function Auth({ auth, loginUser }) {
  const emailRef = useRef("");
  const passRef = useRef("");

  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) navigate("/checkout");
  }, [auth.isAuthenticated]);

  return (
    <div className="flex flex-col h-72 items-center justify-center w-2/4 mx-auto bg-gray-200 mt-40 rounded-lg">
      <div className="grid grid-cols-2">
        <div className="grid grid-rows-2 text-left gap-4 text-lg font-semibold">
          <label>Email:</label>
          <label>Password:</label>
        </div>
        <div className="grid grid-rows-2 gap-4">
          <input
            className="rounded outline-none px-2"
            type="email"
            ref={emailRef}
          />
          <input
            className="rounded outline-none px-2"
            type="password"
            ref={passRef}
          />
        </div>
      </div>
      <button
        className="bg-black text-white p-3 rounded-md w-1/4 mx-auto mt-10 text-lg font-semibold"
        onClick={(e) => {
          e.preventDefault();

          loginUser({
            email: emailRef.current.value,
            password: passRef.current.value,
          });
        }}
      >
        Submit
      </button>
      <span className="mt-8">
        please enter email as <b>test@test.com </b>and password as{" "}
        <b>test1234</b>
      </span>
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loginUser })(Auth);

export const loginUser = (userData) => (dispatch) => {
  dispatch({
    type: "LOGIN_USER",
    payload: userData,
  });
};

export const logoutUser = () => (dispatch) => {
  dispatch({
    type: "LOGOUT_USER",
  });
};

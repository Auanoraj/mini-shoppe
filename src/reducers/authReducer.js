const initialState = {
  isAuthenticated: false,
  user: {
    email: "test@test.com",
    password: "test1234",
  },
};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        isAuthenticated:
          action.payload.email === initialState.user.email &&
          action.payload.password === initialState.user.password,
      };
    case "LOGOUT_USER":
      return {
        isAuthenticated: false,
        user: {},
      };
    default:
      return state;
  }
}

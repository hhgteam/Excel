const initialState = {
    user: {},
    loggedInIser: null,
  };
  const loginReducers = (state = initialState, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          user: action.payload,
        };
      case "LOGOUT":
        return {
          ...state,
          user: null,
        };
  
      default:
        return state;
    }
  };


  export default loginReducers;
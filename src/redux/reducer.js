const initialState = {
  username: "",
};

export const LOGOUT_USER = "LOGOUT_USER";
export const UPDATE_USER = "UPDATE_USER";

export const logout = () => {
  return {
    type: LOGOUT_USER,
  }
};

export const updateUser = (user) => ({
  type: UPDATE_USER,
  payload: {
    username: user.username,
  },
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        username: action.payload.username,
      };
    case LOGOUT_USER:
      return {
        ...state,
        username: '',
      };

    default:
      return state;
  }
}

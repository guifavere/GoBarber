export const signInRequest = (email, password) => ({
  type: "@auth/SIGN_IN_REQUEST",
  payload: { email, password }
});

export const signInSuccess = (token, user) => ({
  type: "@auth/SIGN_IN_SUCCESS",
  payload: { token, user }
});

export const signUpRequest = (name, email, password) => ({
  type: "@auth/SIGN_UP_REQUEST",
  payload: { name, email, password }
});

export const signFailure = () => ({ type: "@auth/SIGN_FAILURE" });

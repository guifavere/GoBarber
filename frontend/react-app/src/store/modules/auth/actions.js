export const signInRequest = (email, password) => ({
  type: "@auth/SIGN_IN_REQUEST",
  payload: { email, password }
});

export const signInSuccess = (token, user) => ({
  type: "@auth/SIGN_IN_SUCCESS",
  payload: { token, user }
});

export const signFailure = () => ({ type: "@auth/SIGN_FAILURE" });

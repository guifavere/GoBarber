import produce from "immer";

const initialState = {
  token: null,
  signed: false,
  loading: false
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case "@auth/SIGN_IN_SUCCESS":
      return produce(state, draft => {
        draft.token = action.payload.token;
        draft.signed = true;
      });
    default:
      return state;
  }
}

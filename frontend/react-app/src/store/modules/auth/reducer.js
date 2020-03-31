import produce from "immer";

const initialState = {
  token: null,
  signed: false,
  loading: false
};

export default function auth(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@auth/SIGN_IN_REQUEST": {
        draft.loading = true;
        break;
      }
      case "@auth/SIGN_IN_SUCCESS": {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case "@auth/SIGN_FAILURE": {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
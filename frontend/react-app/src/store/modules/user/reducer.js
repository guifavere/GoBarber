import produce from "immer";

const initialState = {
  profile: null
};

export default function user(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@auth/SIGN_IN_SUCCESS": {
        draft.profile = action.payload.user;
        break;
      }
      case "@user/UPDATE_PROFILE_SUCCESS": {
        draft.profile = action.payload.profile;
        break;
      }
      case "@auth/SIGN_OUT": {
        draft.profile = null;
        break;
      }
      default:
    }
  });
}

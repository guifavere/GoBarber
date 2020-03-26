import { all, takeLatest, call, put } from "redux-saga/effects";

import { signInSuccess } from "./actions";
import api from "~/services/api";
import history from "~/services/history";

export function* signIn({ payload }) {
  const { email, password } = payload;
  const res = yield call(api.post, "sessions", { email, password });
  const { token, user } = res.data;

  if (!user.provider) {
    console.tron.error("Usuário não é prestador");
    return;
  }

  yield put(signInSuccess(token, user));

  history.push("/dashboard");
}

export default all([takeLatest("@auth/SIGN_IN_REQUEST", signIn)]);

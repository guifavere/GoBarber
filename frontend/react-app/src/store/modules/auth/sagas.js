import { all, takeLatest, call, put } from "redux-saga/effects";
import { toast } from "react-toastify";

import { signInSuccess, signFailure } from "./actions";
import api from "~/services/api";
import history from "~/services/history";

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const res = yield call(api.post, "sessions", { email, password });
    const { token, user } = res.data;

    if (!user.provider) {
      toast.error("Usuário não é prestador");
      return;
    }

    yield put(signInSuccess(token, user));

    history.push("/dashboard");
  } catch (err) {
    toast.error("Falha na autenticação, verifique seus dados");
    yield put(signFailure());
  }
}

export default all([takeLatest("@auth/SIGN_IN_REQUEST", signIn)]);

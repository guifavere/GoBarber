import { all, call, takeLatest, put } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "~/services/api";
import { updateProfileSuccess, updateProfileFailure } from "./actions";

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;
    const profile = { name, email, ...(rest.old_password ? rest : {}) };

    const res = yield call(api.put, "users", profile);

    toast.success("Perfil atualizado com sucesso!");

    yield put(updateProfileSuccess(res.data));
  } catch (err) {
    toast.error("Erro ao atualizar perfil, confira seus dados!");

    yield put(updateProfileFailure());
  }
}

export default all([takeLatest("@user/UPDATE_PROFILE_REQUEST", updateProfile)]);

import { Alert } from 'react-native';
import { all, call, takeLatest, put } from 'redux-saga/effects';

import api from '~/services/api';
import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;
    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.old_password ? rest : {}),
    };

    const res = yield call(api.put, 'users', profile);

    Alert('Sucesso', 'Perfil atualizado com sucesso');

    yield put(updateProfileSuccess(res.data));
  } catch (err) {
    Alert(
      'Falha na atualização',
      'Houve um erro na atualização do perfil, verifique seus dados'
    );

    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);

import { routerRedux } from 'dva/router';
import { accountRegister } from '../services/api';
import { setAuthority, setToken } from '../utils/authority';
import { reloadAuthorized } from '../utils/Authorized';

export default {
  namespace: 'register',

  state: {
    status: undefined,
  },

  effects: {
    *submit(_, { call, put }) {
      const response = yield call(accountRegister);
      yield put({
        type: 'registerHandle',
        payload: response,
      });
      // register successfully
      if (response.code === 1) {
        reloadAuthorized();
        yield put(routerRedux.push('/'));
      }
    },
  },

  reducers: {
    registerHandle(state, { payload }) {
      setAuthority(payload.role);
      setToken(payload.token);
      reloadAuthorized();
      return {
        ...state,
        status: payload.code === 1,
      };
    },
  },
};

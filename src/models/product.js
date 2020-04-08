import * as apis from "../services/example";
export default {
  namespace: "product",
  state: {
    name: "wangwu",
    list: [],
  },
  reducers: {
    setName(state, payload) {
      let newState = JSON.parse(JSON.stringify(state));
      newState.name = payload.data.name;
      return newState;
    },
    setList(state, payload) {
      let newState = JSON.parse(JSON.stringify(state));
      newState.list = payload.data.list;
      return newState;
    },
  },
  effects: {
    *setNameAsyc({ payload }, { put, call }) {
      yield put({
        type: "setName",
        data: { name: "lisi" },
      });
    },
    *setData({ payload }, { put, call }) {
      let listData = yield call(apis.testCode);
      yield put({
        type: "setList",
        data: { list: listData.data.data },
      });
    },
  },
  subscriptions: {
    getData({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === "/product") {
          dispatch({
            type: "setData",
          });
        }
      });
    },
  },
};

export default {
  namespace: "product",
  state: {
    name: "wangwu"
  },
  reducers: {
    setName(state, payload) {
      let newState = JSON.parse(JSON.stringify(state));
      newState.name = payload.data.name;
      return newState;
    }
  },
  effects: {
    *setNameAsyc({ payload }, { put, call }) {
      yield put({
        type: "setName",
        data: { name: "lisi" }
      });
    }
  }
};

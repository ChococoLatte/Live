import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
  refreshToken: null,
  userInfo: {
    id: null,
    name: "",
    isRealtor: null,
    profile: null,
  },
};

const userSlice = createSlice({
  name: `user`,
  initialState,
  reducers: {
    login(state, { payload }) {
      const { accessToken, refreshToken } = payload;
      console.log(accessToken, refreshToken);
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
    },
    logout(state) {
      state.userInfo = {
        id: null,
        name: "",
        isRealtor: null,
        profile: null,
      };
      state.accessToken = null;
      state.refreshToken = null;
    },
    setInfo(state, { payload }) {
      console.log(payload);
      const newInfo = { ...state.userInfo, ...payload };
      console.log(newInfo);
      state.userInfo = newInfo;
    },
    setIsRealtor(state, { payload }) {
      state.userInfo = { ...state.userInfo, isRealtor: payload };
    },
  },
});

export const userAction = userSlice.actions;
export default userSlice;

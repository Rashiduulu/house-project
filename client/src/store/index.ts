import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { $axios } from "../http/axiosInstance";

interface SignUpData {
  username: string;
  email: string;
  password: string;
}

interface HouseState {
  signUping: any;
  signUpLoaded: boolean;
}

const initialState: HouseState = {
  signUping: null,
  signUpLoaded: false,
};

export const signUp = createAsyncThunk(
  "house/signUp",
  async (formData: SignUpData) => {
    try {
      const { data } = await $axios.post(`/auth/sign-up`, formData);
      return data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      } else {
        throw error;
      }
    }
  }
);

const HouseSlices = createSlice({
  name: "HouseProject",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state: HouseState, action) => {
      state.signUping = action.payload;
      state.signUpLoaded = true;
    });
  },
});

export const store = configureStore({
  reducer: {
    house: HouseSlices.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;

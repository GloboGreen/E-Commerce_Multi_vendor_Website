import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PersistPartial } from "redux-persist/es/persistReducer";

interface users {
  _id?: string;
  name?: string;
  email?: string;
  avatar?: string;
  mobile?: string;
  verify_email?: string;
  last_login_date?: string;
  status?: string;
  address_details?: Array<any>;
  shopping_cart?: Array<any>;
  orderHistory?: Array<any>;
  role?: string;
  isWholesaler?: boolean;
  isApprovedWholsale?: boolean;
  companyName?: string;
  officeAddress?: string;
  officePhone?: string;
  GSTIN?: string;
}

interface userSlice {
  users: Array<users>;
  currentUser: users | null; // Logged-in user
  errorLogin: string | null;
  errorRegister: string | null;
  warning: string | null;
  isWholesale: boolean;
}

const initialState: userSlice = {
  users: [],
  currentUser: null,
  errorLogin: null,
  errorRegister: null,
  warning: null,
  isWholesale: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, action: PayloadAction<users>) => {
      state.currentUser = action.payload; // Dynamically update all fields in state
    },
    setAllUsers: (state, action: PayloadAction<users[]>) => {
      state.users = action.payload; // Set the list of users
    },
    logout: (state) => {
      state.currentUser = null; // Reset logged-in user
      state.errorLogin = null;
      state.errorRegister = null;
      state.warning = null;
    },
    setErrorLogin: (state, action: PayloadAction<string>) => {
      state.errorLogin = action.payload; // Set the error message
    },
    setErrorRegister: (state, action: PayloadAction<string>) => {
      state.errorRegister = action.payload; // Set the error message
    },
    setIsWholsale: (state, action: PayloadAction<boolean>) => {
      state.isWholesale = action.payload;
    },
    setWarning: (state, action: PayloadAction<string>) => {
      state.warning = action.payload; // Set the warning message
    },
  },
});

export type UserState = userSlice & PersistPartial;

export const {
  setUserDetails,
  setAllUsers,
  logout,
  setErrorLogin,
  setErrorRegister,
  setWarning,
  setIsWholsale,
} = userSlice.actions;

export default userSlice.reducer;

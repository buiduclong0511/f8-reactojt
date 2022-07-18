import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authApi } from '~/api';

const initialState = {
    userInfo: null,
    token: null,
};

const login = createAsyncThunk('auth/login', async (body, { rejectWithValue }) => {
    try {
        const res = await authApi.login(body);
        return res;
    } catch (err) {
        return rejectWithValue(err);
    }
});

const register = createAsyncThunk('auth/register', async (body, { rejectWithValue }) => {
    try {
        const res = await authApi.register(body);
        return res;
    } catch (err) {
        return rejectWithValue(err);
    }
});

const logout = createAsyncThunk('auth/logout', async (body, { rejectWithValue }) => {
    try {
        await authApi.logout();
        return;
    } catch (err) {
        return rejectWithValue(err);
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserInfo(state, action) {
            state.userInfo = action.payload;
        },
        clearUserInfo(state) {
            state.userInfo = null;
            state.token = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.userInfo = action.payload.data;
            state.token = action.payload.token;
        });

        builder.addCase(register.fulfilled, (state, action) => {
            state.userInfo = action.payload.data;
            state.token = action.payload.token;
        });

        builder.addCase(logout.fulfilled, (state) => {
            state.userInfo = null;
            state.token = null;
        });
    },
});

const { setUserInfo, clearUserInfo } = authSlice.actions;

export default authSlice.reducer;

export { login, register, logout, setUserInfo, clearUserInfo };

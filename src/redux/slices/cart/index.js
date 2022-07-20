import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { cartApi } from '~/api';

const initialState = {
    id: null,
    total: 0,
    subTotal: 0,
    products: [],
};

const getUnpaidCart = createAsyncThunk('cart/getUnpaidCart', async (body, { rejectWithValue }) => {
    try {
        const res = await cartApi.getUnpaidCart();

        return res.data;
    } catch (err) {
        return rejectWithValue(err);
    }
});

const updateUnpaidCart = createAsyncThunk('cart/updateUnpaidCart', async ({ id, products }, { rejectWithValue }) => {
    try {
        const res = await cartApi.update(id, products);

        return res.data;
    } catch (err) {
        return rejectWithValue(err);
    }
});

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        deleteProduct: (state, action) => {
            const id = action.payload;
            state.products = state.products.filter((product) => product.id !== id);
        },
        incrementQuantity: (state, action) => {
            const id = action.payload;
            state.products = state.products.map((product) => {
                if (product.id === id) {
                    return {
                        ...product,
                        amount: product.amount + 1,
                    };
                } else {
                    return product;
                }
            });
        },
        decrementQuantity: (state, action) => {
            const id = action.payload;
            state.products = state.products.map((product) => {
                if (product.id === id) {
                    return {
                        ...product,
                        amount: product.amount > 1 ? product.amount - 1 : product.amount,
                    };
                } else {
                    return product;
                }
            });
        },
        clearCart: (state) => {
            state.id = null;
            state.products = [];
            state.subTotal = 0;
            state.total = 0;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getUnpaidCart.fulfilled, (state, action) => {
            const payload = action.payload;
            state.id = payload.id;
            state.total = payload.total;
            state.subTotal = payload.sub_total;
            state.products = payload.products;
        });
        builder.addCase(getUnpaidCart.rejected, (state) => {
            state.id = null;
            state.total = 0;
            state.subTotal = 0;
            state.products = [];
        });

        builder.addCase(updateUnpaidCart.fulfilled, (state, action) => {
            const payload = action.payload;
            state.id = payload.id;
            state.total = payload.total;
            state.subTotal = payload.sub_total;
        });
    },
});

const { deleteProduct, incrementQuantity, decrementQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
export { getUnpaidCart, deleteProduct, incrementQuantity, decrementQuantity, updateUnpaidCart, clearCart };

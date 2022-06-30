import config from '~/config';
import { DefaultLayout } from '~/layouts';
import { AboutUs, Cart, Home, Login, OrderCompleted, Payment, ProductDetail, Register, SearchResult } from '~/pages';

const routes = [
    { path: config.routes.home, layout: DefaultLayout, element: Home },
    {
        path: config.routes.login,
        layout: DefaultLayout,
        element: Login,
    },
    {
        path: config.routes.register,
        layout: DefaultLayout,
        element: Register,
    },
    {
        path: config.routes.searchResult,
        layout: DefaultLayout,
        element: SearchResult,
    },
    {
        path: config.routes.productDetail,
        layout: DefaultLayout,
        element: ProductDetail,
    },
    {
        path: config.routes.cart,
        layout: DefaultLayout,
        element: Cart,
    },
    {
        path: config.routes.payment,
        layout: DefaultLayout,
        element: Payment,
    },
    {
        path: config.routes.orderCompleted,
        layout: DefaultLayout,
        element: OrderCompleted,
    },
    {
        path: config.routes.aboutUs,
        layout: DefaultLayout,
        element: AboutUs,
    },
];

export default routes;

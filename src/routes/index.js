import config from '~/config';
import { DefaultLayout } from '~/layouts';
import {
    AboutUs,
    Blog,
    Cart,
    Home,
    Login,
    OrderCompleted,
    Pages,
    Payment,
    ProductDetail,
    ProductsList,
    Register,
    SearchResult,
    Shop,
} from '~/pages';

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
        isPrivate: true,
    },
    {
        path: config.routes.payment,
        layout: DefaultLayout,
        element: Payment,
        isPrivate: true,
    },
    {
        path: config.routes.orderCompleted,
        layout: DefaultLayout,
        element: OrderCompleted,
        isPrivate: true,
    },
    {
        path: config.routes.aboutUs,
        layout: DefaultLayout,
        element: AboutUs,
    },
    {
        path: config.routes.pages,
        layout: DefaultLayout,
        element: Pages,
    },
    {
        path: config.routes.products,
        layout: DefaultLayout,
        element: ProductsList,
    },
    {
        path: config.routes.blog,
        layout: DefaultLayout,
        element: Blog,
    },
    {
        path: config.routes.shop,
        layout: DefaultLayout,
        element: Shop,
    },
];

export default routes;

import { HeadingPage } from '~/components';
import config from '~/config';

function Cart() {
    const breadcrumb = [
        {
            name: 'Home',
            path: config.routes.home,
        },
        {
            name: 'Pages',
            path: config.routes.pages,
        },
        {
            name: 'Shopping curt',
            path: config.routes.cart,
        },
    ];

    return (
        <HeadingPage title="Shopping Curt" breadcrumb={breadcrumb}>
            <div>Cart</div>
        </HeadingPage>
    );
}

export default Cart;

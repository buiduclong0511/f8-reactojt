import { HeadingPage } from '~/components';
import config from '~/config';

function OrderCompleted() {
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
            name: 'Order completed',
            path: config.routes.orderCompleted,
        },
    ];

    return (
        <HeadingPage title="Order completed" breadcrumb={breadcrumb}>
            <div>OrderCompleted</div>
        </HeadingPage>
    );
}

export default OrderCompleted;

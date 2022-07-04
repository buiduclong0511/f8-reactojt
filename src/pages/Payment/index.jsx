import { HeadingPage } from '~/components';
import config from '~/config';

function Payment() {
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
            name: 'Payment',
            path: config.routes.payment,
        },
    ];

    return (
        <HeadingPage title="Payment" breadcrumb={breadcrumb}>
            <div>Payment</div>
        </HeadingPage>
    );
}

export default Payment;

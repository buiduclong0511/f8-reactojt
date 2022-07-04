import { HeadingPage } from '~/components';
import config from '~/config';

function ProductDetail() {
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
            name: 'Product detail',
            path: config.routes.productDetail,
        },
    ];

    return (
        <HeadingPage title="Product details" breadcrumb={breadcrumb}>
            <div>ProductDetail</div>
        </HeadingPage>
    );
}

export default ProductDetail;

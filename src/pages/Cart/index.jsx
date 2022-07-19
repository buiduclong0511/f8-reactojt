import classNames from 'classnames/bind';
import { HeadingPage, Container, Image, QuantityInput } from '~/components';
import config from '~/config';
import styles from './Cart.module.scss';
import CartTotal from './components/CartTotal';

const cx = classNames.bind(styles);

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
            <Container fluid="lg">
                <div className={cx('wrapper')}>
                    <table className={cx('products-list')}>
                        <thead>
                            <tr>
                                <th>
                                    <span className={cx('heading')}>Product</span>
                                </th>
                                <th>
                                    <span className={cx('heading')}>Price</span>
                                </th>
                                <th>
                                    <span className={cx('heading', 'd-flex', 'justify-content-center')}>Quantity</span>
                                </th>
                                <th>
                                    <span className={cx('heading', 'd-flex', 'justify-content-center')}>Total</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className={cx('product')}>
                                        <Image src="/images/product.png" onDelete={() => {}} />
                                        <div className={cx('info')}>
                                            <div className={cx('name')}>
                                                Product name Product name Product name Product name 1
                                            </div>
                                            <div className={cx('color')}>Color: Brown</div>
                                            <div className={cx('size')}>Size: XL</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className={cx('price')}>$1234</div>
                                </td>
                                <td>
                                    <div className={cx('quantity', 'd-flex', 'justify-content-center')}>
                                        <QuantityInput />
                                    </div>
                                </td>
                                <td>
                                    <div className={cx('total', 'd-flex', 'justify-content-center')}>$1234</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className={cx('product')}>
                                        <Image src="/images/product.png" onDelete={() => {}} />
                                        <div className={cx('info')}>
                                            <div className={cx('name')}>
                                                Product name Product name Product name Product name 1
                                            </div>
                                            <div className={cx('color')}>Color: Brown</div>
                                            <div className={cx('size')}>Size: XL</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className={cx('price')}>$1234</div>
                                </td>
                                <td>
                                    <div className={cx('quantity', 'd-flex', 'justify-content-center')}>
                                        <QuantityInput />
                                    </div>
                                </td>
                                <td>
                                    <div className={cx('total', 'd-flex', 'justify-content-center')}>$1234</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className={cx('product')}>
                                        <Image src="/images/product.png" onDelete={() => {}} />
                                        <div className={cx('info')}>
                                            <div className={cx('name')}>
                                                Product name Product name Product name Product name 1
                                            </div>
                                            <div className={cx('color')}>Color: Brown</div>
                                            <div className={cx('size')}>Size: XL</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className={cx('price')}>$1234</div>
                                </td>
                                <td>
                                    <div className={cx('quantity', 'd-flex', 'justify-content-center')}>
                                        <QuantityInput />
                                    </div>
                                </td>
                                <td>
                                    <div className={cx('total', 'd-flex', 'justify-content-center')}>$1234</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={cx('cart-total')}>
                        <CartTotal />
                    </div>
                </div>
            </Container>
        </HeadingPage>
    );
}

export default Cart;

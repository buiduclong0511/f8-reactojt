import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { CartTotal, Container, HeadingPage, Image, QuantityInput } from '~/components';
import config from '~/config';
import { useDebounce } from '~/hooks';
import { decrementQuantity, deleteProduct, incrementQuantity, updateUnpaidCart } from '~/redux/slices';

import styles from './Cart.module.scss';

const cx = classNames.bind(styles);

function Cart() {
    const unpaidCart = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    const navigate = useNavigate();

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

    useDebounce(
        () => {
            const products = unpaidCart.products.map((product) => ({ id: product.id, amount: product.amount }));
            dispatch(updateUnpaidCart({ id: unpaidCart.id, products }));
        },
        [unpaidCart.products],
        800,
    );

    const handleDeleteProduct = (id) => {
        dispatch(deleteProduct(id));
    };

    const handleIncrementQuantity = (id) => {
        dispatch(incrementQuantity(id));
    };

    const handleDecrementQuantity = (id) => {
        dispatch(decrementQuantity(id));
    };

    const handleSubmit = () => {
        navigate(config.routes.payment);
    };

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
                            {!!unpaidCart?.products &&
                                unpaidCart.products.map((product) => {
                                    const price = product.discount
                                        ? (product.price / 100) * (100 - product.discount)
                                        : product.price;
                                    return (
                                        <tr key={product.id}>
                                            <td>
                                                <div className={cx('product')}>
                                                    <Image
                                                        src={product.thumbnail_url}
                                                        onDelete={() => handleDeleteProduct(product.id)}
                                                    />
                                                    <div className={cx('info')}>
                                                        <div className={cx('name')}>{product.name}</div>
                                                        <div className={cx('color')}>Color: Brown</div>
                                                        <div className={cx('size')}>Size: XL</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className={cx('price')}>${price}</div>
                                            </td>
                                            <td>
                                                <div className={cx('quantity', 'd-flex', 'justify-content-center')}>
                                                    <QuantityInput
                                                        quantity={product.amount}
                                                        onIncrement={() => handleIncrementQuantity(product.id)}
                                                        onDecrement={() => handleDecrementQuantity(product.id)}
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <div className={cx('total', 'd-flex', 'justify-content-center')}>
                                                    ${price * product.amount}
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                    <div className={cx('cart-total')}>
                        <CartTotal
                            total={unpaidCart?.total}
                            subTotal={unpaidCart?.subTotal}
                            disabledSubmit={!unpaidCart.products.length}
                            onSubmit={handleSubmit}
                        />
                    </div>
                </div>
            </Container>
        </HeadingPage>
    );
}

export default Cart;

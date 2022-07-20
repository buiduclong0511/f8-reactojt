import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { CartTotal, HeadingPage, Container, Input } from '~/components';
import config from '~/config';
import CartItem from './components/CartItem';

import styles from './Payment.module.scss';

const cx = classNames.bind(styles);

function Payment() {
    const unpaidCart = useSelector((state) => state.cart);

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
            <Container fluid="lg">
                <div className={cx('wrapper')}>
                    <div className={cx('form')}>
                        <div className={cx('heading')}>Contact Information</div>
                        <Input
                            className={cx('input')}
                            variant="secondary"
                            label="Email or mobile phone number"
                            touched
                            error="Email is invalid"
                            name="email"
                        />
                        <br />
                        <br />
                        <br />
                        <div className={cx('heading')}>Shipping address</div>
                        <div className={cx('d-flex')}>
                            <div className={cx('flex-fill')}>
                                <Input
                                    className={cx('input')}
                                    variant="secondary"
                                    label="First name"
                                    touched
                                    error="First name is invalid"
                                    name="firstName"
                                />
                            </div>
                            <div className={cx('flex-fill', 'last-name-input')}>
                                <Input
                                    className={cx('input')}
                                    variant="secondary"
                                    label="Last name"
                                    touched
                                    error="Last name is invalid"
                                    name="lastName"
                                />
                            </div>
                        </div>
                        <Input
                            className={cx('input')}
                            variant="secondary"
                            label="Address"
                            touched
                            error="Address is invalid"
                            name="address"
                        />
                        <Input
                            className={cx('input')}
                            variant="secondary"
                            label="Apartment, suit, e.t.c (optinal)"
                            touched
                            error="Apartment is invalid"
                            name="apartment"
                        />
                        <Input
                            className={cx('input')}
                            variant="secondary"
                            label="City"
                            touched
                            error="City is invalid"
                            name="city"
                        />
                        <Input
                            className={cx('input')}
                            variant="secondary"
                            label="Postal Code"
                            touched
                            error="Postal Code is invalid"
                            name="postalCode"
                        />
                    </div>
                    <div className={cx('cart-info')}>
                        {unpaidCart.products.map((product) => (
                            <CartItem key={product.id} data={product} />
                        ))}
                        <br />
                        <CartTotal
                            showHeading={false}
                            total={unpaidCart.total}
                            subTotal={unpaidCart.subTotal}
                            disabledSubmit={!unpaidCart.products.length}
                        />
                    </div>
                </div>
            </Container>
        </HeadingPage>
    );
}

export default Payment;

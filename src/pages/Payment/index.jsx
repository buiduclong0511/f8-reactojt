import classNames from 'classnames/bind';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';

import { CartTotal, Container, HeadingPage, Input } from '~/components';
import config from '~/config';
import { orderValidation } from '~/validations';
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

    const initialValues = {
        contact: '',
        first_name: '',
        last_name: '',
        address: '',
        description: '',
        city: '',
        postal_code: '',
    };

    const { values, touched, errors, handleChange, handleBlur, handleSubmit, isSubmitting } = useFormik({
        initialValues,
        onSubmit: (values) => {
            console.log('~ values', values);
        },
        validationSchema: orderValidation,
    });

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
                            value={values.contact}
                            touched={touched.contact}
                            error={errors.contact}
                            name="contact"
                            onChange={handleChange}
                            onBlur={handleBlur}
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
                                    value={values.first_name}
                                    touched={touched.first_name}
                                    error={errors.first_name}
                                    name="first_name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                            <div className={cx('flex-fill', 'last-name-input')}>
                                <Input
                                    className={cx('input')}
                                    variant="secondary"
                                    label="Last name"
                                    value={values.last_name}
                                    touched={touched.last_name}
                                    error={errors.last_name}
                                    name="last_name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                        </div>
                        <Input
                            className={cx('input')}
                            variant="secondary"
                            label="Address"
                            value={values.address}
                            touched={touched.address}
                            error={errors.address}
                            name="address"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <Input
                            className={cx('input')}
                            variant="secondary"
                            label="Apartment, suit, e.t.c (optinal)"
                            value={values.description}
                            touched={touched.description}
                            error={errors.description}
                            name="description"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <Input
                            className={cx('input')}
                            variant="secondary"
                            label="City"
                            value={values.city}
                            touched={touched.city}
                            error={errors.city}
                            name="city"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <Input
                            className={cx('input')}
                            variant="secondary"
                            label="Postal Code"
                            value={values.postal_code}
                            touched={touched.postal_code}
                            error={errors.postal_code}
                            name="postal_code"
                            onChange={handleChange}
                            onBlur={handleBlur}
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
                            disabledSubmit={!unpaidCart.products.length || isSubmitting}
                            onSubmit={handleSubmit}
                        />
                    </div>
                </div>
            </Container>
        </HeadingPage>
    );
}

export default Payment;

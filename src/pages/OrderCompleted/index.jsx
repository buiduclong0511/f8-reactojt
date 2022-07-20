import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { BranchesList, Button, Container, HeadingPage } from '~/components';
import { Checklist, Clock, Success } from '~/components/icons';
import config from '~/config';

import styles from './OrderCompleted.module.scss';

const cx = classNames.bind(styles);

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
            <Container fluid="lg">
                <div className={cx('wrapper')}>
                    <div className={cx('order-success')}>
                        <div className={cx('icon-success')}>
                            <Success />
                        </div>
                        <h3 className={cx('title')}>Your Order Is Completed!</h3>
                        <div className={cx('description')}>
                            Thank you for your order! Your order is being processed and will be completed within 3-6{' '}
                            <br />
                            hours. You will receive an email confirmation when your order is completed.
                        </div>
                        <Link to={config.routes.home}>
                            <Button className={cx('cta-btn')}>Continue Shopping</Button>
                        </Link>
                        <div className={cx('icon-clock')}>
                            <Clock />
                        </div>
                        <div className={cx('icon-checklist')}>
                            <Checklist />
                        </div>
                    </div>
                    <BranchesList />
                </div>
            </Container>
        </HeadingPage>
    );
}

export default OrderCompleted;

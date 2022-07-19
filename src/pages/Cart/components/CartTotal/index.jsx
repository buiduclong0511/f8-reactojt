import classNames from 'classnames/bind';
import { Checked } from '~/components/icons';
import { Button } from '~/components';
import styles from './CartTotal.module.scss';

const cx = classNames.bind(styles);

function CartTotal({ total = 0, subTotal = 0, onSubmit = () => {} }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('heading')}>Cart Totals</div>
            <div className={cx('main')}>
                <div className={cx('price-item')}>
                    <span className={cx('label')}>Subtotals: </span>
                    <span className={cx('value')}>$1234</span>
                </div>
                <div className={cx('price-item')}>
                    <span className={cx('label')}>Totals: </span>
                    <span className={cx('value')}>$1234</span>
                </div>
                <div className={cx('description')}>
                    <Checked />
                    <span>Shipping & taxes calculated at checkout</span>
                </div>
                <Button className={cx('submit-button')}>Proceed To Checkout</Button>
            </div>
        </div>
    );
}

export default CartTotal;

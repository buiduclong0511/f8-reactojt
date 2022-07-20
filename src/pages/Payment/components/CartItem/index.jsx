import classNames from 'classnames/bind';
import { Image } from '~/components';
import styles from './CartItem.module.scss';

const cx = classNames.bind(styles);

function CartItem({ data }) {
    const price = (data.price * (100 - data.discount)) / 100;

    return (
        <div className={cx('wrapper')}>
            <Image src={data.thumbnail_url} />
            <div className={cx('info')}>
                <div className={cx('name')}>{data.name}</div>
                <div className={cx('color')}>Color: Brown</div>
                <div className={cx('size')}>Size: XL</div>
            </div>
            <div className={cx('price')}>
                <span>${price}</span>
                <span>x {data.amount}</span>
            </div>
        </div>
    );
}

export default CartItem;

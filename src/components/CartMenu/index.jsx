import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '~/components';
import config from '~/config';
import styles from './CartMenu.module.scss';

const cx = classNames.bind(styles);

function CartMenu({ data = [] }) {
    return (
        <Menu>
            <div className={cx('wrapper')}>
                <MenuItem className={cx('cart-item')}>
                    <img src="/images/product.png" alt="" className={cx('img')} />
                    <div className={cx('info')}>
                        <div className={cx('name')}>Product name 1</div>
                        <div className={cx('price')}>$12345 x 3</div>
                    </div>
                </MenuItem>
                <MenuItem className={cx('cart-item')}>
                    <img src="/images/product.png" alt="" className={cx('img')} />
                    <div className={cx('info')}>
                        <div className={cx('name')}>Product name 1</div>
                        <div className={cx('price')}>$12345 x 3</div>
                    </div>
                </MenuItem>
                <MenuItem className={cx('cart-item')}>
                    <img src="/images/product.png" alt="" className={cx('img')} />
                    <div className={cx('info')}>
                        <div className={cx('name')}>Product name 1</div>
                        <div className={cx('price')}>$12345 x 3</div>
                    </div>
                </MenuItem>
                <MenuItem className={cx('cart-item')}>
                    <img src="/images/product.png" alt="" className={cx('img')} />
                    <div className={cx('info')}>
                        <div className={cx('name')}>Product name 1</div>
                        <div className={cx('price')}>$12345 x 3</div>
                    </div>
                </MenuItem>
                <MenuItem className={cx('cart-item')}>
                    <img src="/images/product.png" alt="" className={cx('img')} />
                    <div className={cx('info')}>
                        <div className={cx('name')}>Product name 1</div>
                        <div className={cx('price')}>$12345 x 3</div>
                    </div>
                </MenuItem>
            </div>
            <Link to={config.routes.cart} className={cx('goto-cart')}>
                Go to cart
            </Link>
        </Menu>
    );
}

export default CartMenu;

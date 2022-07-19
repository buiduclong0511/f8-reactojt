import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '~/components';
import config from '~/config';
import styles from './CartMenu.module.scss';

const cx = classNames.bind(styles);

function CartMenu() {
    const products = useSelector((state) => state.cart.products);

    return (
        <Menu>
            <div className={cx('wrapper')}>
                {products.map((product) => (
                    <MenuItem key={product.id} className={cx('cart-item')}>
                        <img src={product.thumbnail_url} alt="" className={cx('img')} />
                        <div className={cx('info')}>
                            <div className={cx('name')}>{product.name}</div>
                            <div className={cx('price')}>
                                ${product.price} x {product.amount}
                            </div>
                        </div>
                    </MenuItem>
                ))}
            </div>
            <Link to={config.routes.cart} className={cx('goto-cart')}>
                Go to cart
            </Link>
        </Menu>
    );
}

export default CartMenu;

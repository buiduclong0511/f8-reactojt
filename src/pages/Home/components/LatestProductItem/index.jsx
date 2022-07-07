import classNames from 'classnames/bind';
import { Cart, Heart, SearchPlus } from '~/components/icons';
import { IconButton } from '~/components';
import styles from './LatestProductItem.module.scss';

const cx = classNames.bind(styles);

function LatestProductItem() {
    return (
        <div className={cx('wrapper', 'sale')}>
            <div className={cx('image')} style={{ backgroundImage: 'url(images/product.png)' }}>
                <div className={cx('buttons-list')}>
                    <IconButton className={cx('icon-button')}>
                        <Cart />
                    </IconButton>
                    <IconButton className={cx('icon-button')}>
                        <Heart />
                    </IconButton>
                    <IconButton className={cx('icon-button')}>
                        <SearchPlus />
                    </IconButton>
                </div>
                <img src="images/sale.png" alt="" className={cx('sale-img')} />
            </div>
            <div className={cx('info')}>
                <div className={cx('name')}>
                    <span>Comfort Handy Craft</span>
                </div>
                <div className={cx('price')}>
                    <div className={cx('discounted-price')}>$42.00</div>
                    <del className={cx('main')}>$65.00</del>
                </div>
            </div>
        </div>
    );
}

export default LatestProductItem;

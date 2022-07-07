import classNames from 'classnames/bind';
import { IconButton, Button } from '~/components';
import { Cart, Heart, SearchPlus } from '~/components/icons';
import styles from './FeaturedProductItem.module.scss';

const cx = classNames.bind(styles);

function FeaturedProductItem() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('image')} style={{ backgroundImage: 'url(images/featured-product.png)' }}>
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
                <Button className={cx('view-detail-btn')}>View Details</Button>
            </div>
            <div className={cx('info')}>
                <p className={cx('name')}>Cantilever chair</p>
                <div className={cx('colors')}>
                    <div className={cx('item')} />
                    <div className={cx('item')} />
                    <div className={cx('item')} />
                </div>
                <p className={cx('code')}>Code - Y523201</p>
                <p className={cx('price')}>$42.00</p>
            </div>
        </div>
    );
}

export default FeaturedProductItem;

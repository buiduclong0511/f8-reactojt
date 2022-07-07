import classNames from 'classnames/bind';
import styles from './TrendingProductItem.module.scss';

const cx = classNames.bind(styles);

function TrendingProductItem() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('image')} style={{ backgroundImage: 'url(images/trending-product.png)' }}></div>
            <div className={cx('info')}>
                <div className={cx('name')}>Cantilever chair</div>
                <div className={cx('price')}>
                    <div className={cx('discounted-price')}>$26.00</div>
                    <del className={cx('main')}>$26.00</del>
                </div>
            </div>
        </div>
    );
}

export default TrendingProductItem;

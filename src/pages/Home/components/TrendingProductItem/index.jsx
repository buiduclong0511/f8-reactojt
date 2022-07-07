import classNames from 'classnames/bind';
import styles from './TrendingProductItem.module.scss';

const cx = classNames.bind(styles);

function TrendingProductItem({ data }) {
    const discountedPrice = data.discount ? data.price * (1 - data.discount / 100) : data.price;

    const thumbnail = data.images.find((image) => image.is_thumbnail);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('image')} style={{ backgroundImage: `url(${thumbnail?.image_url})` }}></div>
            <div className={cx('info')}>
                <div className={cx('name')}>{data.name}</div>
                <div className={cx('price')}>
                    <div className={cx('discounted-price')}>${discountedPrice}</div>
                    <del className={cx('main')}>${data.price}</del>
                </div>
            </div>
        </div>
    );
}

export default TrendingProductItem;

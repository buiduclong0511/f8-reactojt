import classNames from 'classnames/bind';
import styles from './RelatedProductItem.module.scss';

const cx = classNames.bind(styles);

function RelatedProductItem({ data }) {
    const thumbnail = data.images.find((image) => image.is_thumbnail);

    const price = data.discount ? (data.price / 100) * (100 - data.discount) : data.price;

    return (
        <div className={cx('wrapper')}>
            <div className={cx('image')} style={{ backgroundImage: `url(${thumbnail.image_url})` }}></div>
            <div className={cx('name')}>{data.name}</div>
            <div className={cx('price')}>${price}</div>
        </div>
    );
}

export default RelatedProductItem;

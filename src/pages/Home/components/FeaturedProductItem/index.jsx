import classNames from 'classnames/bind';
import { IconButton, Button } from '~/components';
import { Cart, Heart, SearchPlus } from '~/components/icons';
import styles from './FeaturedProductItem.module.scss';

const cx = classNames.bind(styles);

function FeaturedProductItem({ data, onClickHeart }) {
    const price = data.discount ? data.price * (1 - data.discount / 100) : data.price;

    const thumbnail = data.images.find((image) => image.is_thumbnail);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('image')} style={{ backgroundImage: `url(${thumbnail?.image_url})` }}>
                <div className={cx('buttons-list')}>
                    <IconButton className={cx('icon-button')}>
                        <Cart />
                    </IconButton>
                    <IconButton className={cx('icon-button')} active={data.followed} onClick={onClickHeart}>
                        <Heart />
                    </IconButton>
                    <IconButton className={cx('icon-button')}>
                        <SearchPlus />
                    </IconButton>
                </div>
                <Button className={cx('view-detail-btn')}>View Details</Button>
            </div>
            <div className={cx('info')}>
                <p className={cx('name')}>{data.name}</p>
                <div className={cx('colors')}>
                    <div className={cx('item')} />
                    <div className={cx('item')} />
                    <div className={cx('item')} />
                </div>
                <p className={cx('code')}>Code - {data.code}</p>
                <p className={cx('price')}>${price}</p>
            </div>
        </div>
    );
}

export default FeaturedProductItem;

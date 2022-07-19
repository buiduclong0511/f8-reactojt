import classNames from 'classnames/bind';
import { generatePath, Link } from 'react-router-dom';
import { IconButton, Button } from '~/components';
import { Cart, Heart, SearchPlus } from '~/components/icons';
import config from '~/config';
import styles from './FeaturedProductItem.module.scss';

const cx = classNames.bind(styles);

function FeaturedProductItem({ data, onClickHeart, onClickCart }) {
    const price = data.discount ? data.price * (1 - data.discount / 100) : data.price;

    const thumbnail = data.images.find((image) => image.is_thumbnail);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('buttons-list')}>
                <IconButton className={cx('icon-button')} active={data.added_to_cart} onClick={onClickCart}>
                    <Cart />
                </IconButton>
                <IconButton className={cx('icon-button')} active={data.followed} onClick={onClickHeart}>
                    <Heart />
                </IconButton>
                <IconButton className={cx('icon-button')}>
                    <SearchPlus />
                </IconButton>
            </div>
            <Link to={generatePath(config.routes.productDetail, { id: data.id })}>
                <div className={cx('image')} style={{ backgroundImage: `url(${thumbnail?.image_url})` }}>
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
            </Link>
        </div>
    );
}

export default FeaturedProductItem;

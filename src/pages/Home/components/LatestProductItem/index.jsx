import classNames from 'classnames/bind';
import { Cart, Heart, SearchPlus } from '~/components/icons';
import { IconButton } from '~/components';
import styles from './LatestProductItem.module.scss';
import { generatePath, Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

function LatestProductItem({ data, onClickHeart, onClickCart }) {
    const discountedPrice = data.discount ? data.price * (1 - data.discount / 100) : data.price;

    const thumbnail = data.images.find((image) => image.is_thumbnail);

    return (
        <div className={cx('wrapper', { sale: !!data.discount })}>
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
                    <img src="images/sale.png" alt="" className={cx('sale-img')} />
                </div>
                <div className={cx('info')}>
                    <div className={cx('name')}>
                        <span>{data.name}</span>
                    </div>
                    <div className={cx('price')}>
                        {!!data.discount && <div className={cx('discounted-price')}>${discountedPrice}</div>}
                        <del className={cx('main')}>${data.price}</del>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default LatestProductItem;

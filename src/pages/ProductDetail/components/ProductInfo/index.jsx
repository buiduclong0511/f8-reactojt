import classNames from 'classnames/bind';

import { IconButton } from '~/components';
import { Facebook, Heart, Instagram, Twitter } from '~/components/icons';
import styles from './ProductInfo.module.scss';

const cx = classNames.bind(styles);

function ProductInfo({ data, onClickCart = () => {}, onClickHeart = () => {} }) {
    const images = data.images.filter((image) => !image.is_thumbnail);
    const thumbnail = data.images.find((image) => image.is_thumbnail);

    const discountedPrice = (data.price / 100) * (100 - data.discount);

    return (
        <div className={cx('product')}>
            <div className={cx('images')}>
                <div className={cx('left')}>
                    {images.map((image) => (
                        <img key={image.id} src={image.image_url} alt="" />
                    ))}
                </div>
                <div className={cx('right')}>
                    <img src={thumbnail.image_url} alt="" />
                </div>
            </div>
            <div className={cx('info')}>
                <h3 className={cx('name')}>{data.name}</h3>
                <div className={cx('price')}>
                    <div className={cx('discounted-price')}>${discountedPrice}</div>
                    <del className={cx('main')}>${data.price}</del>
                </div>
                <div className={cx('color')}>Color</div>
                <div className={cx('description')}>{data.description}</div>
                <div className={cx('actions')}>
                    <span className={cx('add-to-cart')} onClick={onClickCart}>
                        {data.added_to_cart ? 'Added' : 'Add'} To Cart
                    </span>
                    <IconButton className={cx('follow')} active={data.followed} onClick={onClickHeart}>
                        <Heart />
                    </IconButton>
                </div>
                <div className={cx('category')}>Categories: {data.category.name}</div>
                <div className={cx('tag')}>Tag</div>
                <div className={cx('socials')}>
                    Share
                    <span className={cx('icon')}>
                        <Facebook />
                    </span>
                    <span className={cx('icon')}>
                        <Instagram />
                    </span>
                    <span className={cx('icon')}>
                        <Twitter />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ProductInfo;

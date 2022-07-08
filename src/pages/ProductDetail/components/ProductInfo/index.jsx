import classNames from 'classnames/bind';

import { IconButton } from '~/components';
import { Facebook, Heart, Instagram, Twitter } from '~/components/icons';
import styles from './ProductInfo.module.scss';

const cx = classNames.bind(styles);

function ProductInfo() {
    return (
        <div className={cx('product')}>
            <div className={cx('images')}>
                <div className={cx('left')}>
                    <img src="/images/product-detail-item.png" alt="" />
                    <img src="/images/product-detail-item.png" alt="" />
                    <img src="/images/product-detail-item.png" alt="" />
                </div>
                <div className={cx('right')}>
                    <img src="/images/product-detail-thumbnail.png" alt="" />
                </div>
            </div>
            <div className={cx('info')}>
                <h3 className={cx('name')}>Playwood arm chair</h3>
                <div className={cx('price')}>
                    <div className={cx('discounted-price')}>$32.00</div>
                    <del className={cx('main')}>$32.00</del>
                </div>
                <div className={cx('color')}>Color</div>
                <div className={cx('description')}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat
                    sit.
                </div>
                <div className={cx('actions')}>
                    <span className={cx('add-to-cart')}>Add To Cart</span>
                    <IconButton className={cx('follow')}>
                        <Heart />
                    </IconButton>
                </div>
                <div className={cx('category')}>Categories</div>
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

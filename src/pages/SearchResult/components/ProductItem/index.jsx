import classNames from 'classnames/bind';
import { IconButton } from '~/components';
import styles from './ProductItem.module.scss';

const cx = classNames.bind(styles);

function ProductItem({ data }) {
    console.log('~ data', data);

    const thumbnail = data.images.find((image) => image.is_thumbnail);
    const discountedPrice = (data.price / 100) * (100 - data.discount);

    return (
        <div className={cx('wrapper')}>
            <img className={cx('image')} src={thumbnail?.image_url} alt="" />
            <div className={cx('info')}>
                <h3 className={cx('name')}>
                    {data.name}
                    <div className={cx('colors')}>
                        <div className={cx('item')} style={{ backgroundColor: '#DE9034' }}></div>
                        <div className={cx('item')} style={{ backgroundColor: '#E60584' }}></div>
                        <div className={cx('item')} style={{ backgroundColor: '#5E37FF' }}></div>
                    </div>
                </h3>
                <div className={cx('price')}>
                    <div className={cx('discounted-price')}>${discountedPrice}</div>
                    <del className={cx('main')}>${data.price}</del>
                </div>
                <div className={cx('description')}>{data.description}</div>
                <div className={cx('buttons-list')}>
                    <IconButton className={cx('icon-button')}>
                        <img src="icons/fluent_cart-24-regular-dark.svg" alt="" />
                    </IconButton>
                    <IconButton className={cx('icon-button')}>
                        <img src="icons/uil_heart-alt-dark.svg" alt="" />
                    </IconButton>
                    <IconButton className={cx('icon-button')}>
                        <img src="icons/uil_search-plus.svg" alt="" />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;

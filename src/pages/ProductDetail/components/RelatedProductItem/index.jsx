import classNames from 'classnames/bind';
import styles from './RelatedProductItem.module.scss';

const cx = classNames.bind(styles);

function RelatedProductItem() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('image')} style={{ backgroundImage: 'url(/images/related-product.png)' }}></div>
            <div className={cx('name')}>Mens Fashion Wear</div>
            <div className={cx('price')}>$43.00</div>
        </div>
    );
}

export default RelatedProductItem;

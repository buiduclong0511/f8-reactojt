import classNames from 'classnames/bind';
import styles from './SearchResult.module.scss';

const cx = classNames.bind(styles);

function SearchResult({ products = [] }) {
    return (
        <div className={cx('wrapper')}>
            {products.map((product) => {
                const imageUrl = product.images.find((image) => image.is_thumbnail)?.image_url;
                return (
                    <div className={cx('product')} key={product.id}>
                        <div className={cx('image')}>
                            <img src={imageUrl} alt="" />
                        </div>
                        <div className={cx('info')}>
                            <p className={cx('name')}>{product.name}</p>
                            <p className={cx('price')}>{product.price} đ</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default SearchResult;

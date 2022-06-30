import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './SearchResult.module.scss';

const cx = classNames.bind(styles);

function SearchResult() {
    const [products] = useState([
        {
            id: 1,
            name: 'Product 1',
            price: 123000,
            image_url: 'images/product.png',
        },
        {
            id: 2,
            name: 'Product 2',
            price: 123000,
            image_url: 'images/product.png',
        },
        {
            id: 3,
            name: 'Product 3',
            price: 123000,
            image_url: 'images/product.png',
        },
    ]);
    return (
        <div className={cx('wrapper')}>
            {products.map((product) => (
                <div className={cx('product')} key={product.id}>
                    <div className={cx('image')}>
                        <img src={product.image_url} alt="" />
                    </div>
                    <div className={cx('info')}>
                        <p className={cx('name')}>{product.name}</p>
                        <p className={cx('price')}>{product.price} đ</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SearchResult;

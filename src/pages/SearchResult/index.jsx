import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container } from '~/components';

import { productApi } from '~/api';
import { BranchesList, HeadingPage } from '~/components';
import config from '~/config';
import ProductItem from './components/ProductItem';

import styles from './SearchResult.module.scss';

const cx = classNames.bind(styles);

function SearchResult() {
    const [products, setProducts] = useState([]);

    const navigate = useNavigate();

    const fetchingProducts = useRef([]);

    const location = useLocation();
    const keyword = location.search.split('=')[1];

    useEffect(() => {
        productApi.getList(keyword, true).then((res) => {
            setProducts(res.data);
        });
    }, [keyword]);

    const breadcrumb = [
        {
            name: 'Home',
            path: config.routes.home,
        },
        {
            name: 'Pages',
            path: config.routes.pages,
        },
        {
            name: 'Shop list',
            path: config.routes.searchResult,
        },
    ];

    const handleFollow = (product) => {
        if (fetchingProducts.current.includes(product.id)) {
            return;
        }

        const token = window.localStorage.getItem('token');

        if (!token) {
            navigate(config.routes.login);
            return;
        }

        const followed = product.followed;

        const api = followed ? productApi.unFollow(product.id) : productApi.follow(product.id);
        fetchingProducts.current.push(product.id);

        api.then((res) => {
            const newProducts = products.map((item) => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        followed: res.followed,
                    };
                } else {
                    return item;
                }
            });

            setProducts(newProducts);
        })
            .catch(() => {
                toast.error('Have an error.');
            })
            .finally(() => {
                fetchingProducts.current = fetchingProducts.current.filter((id) => id !== product.id);
            });
    };

    return (
        <HeadingPage title="Shop list" breadcrumb={breadcrumb}>
            <div className={cx('wrapper')}>
                <Container fluid="lg">
                    <div className={cx('products-list')}>
                        {products.map((product) => (
                            <ProductItem key={product.id} data={product} onClickHeart={() => handleFollow(product)} />
                        ))}
                    </div>
                </Container>
            </div>
            <BranchesList />
        </HeadingPage>
    );
}

export default SearchResult;

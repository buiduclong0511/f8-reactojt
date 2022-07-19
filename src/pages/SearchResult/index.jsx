import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { productApi } from '~/api';
import { BranchesList, Container, HeadingPage } from '~/components';
import config from '~/config';
import ProductItem from './components/ProductItem';

import styles from './SearchResult.module.scss';

const cx = classNames.bind(styles);

function SearchResult() {
    const [products, setProducts] = useState([]);

    const navigate = useNavigate();

    const fetchingFollowProducts = useRef([]);
    const fetchingAddToCart = useRef([]);

    const location = useLocation();
    const keyword = location.search.split('=')[1];

    const token = useSelector((state) => state.auth.token);

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
        if (fetchingFollowProducts.current.includes(product.id)) {
            return;
        }

        if (!token) {
            navigate(config.routes.login);
            return;
        }

        const followed = product.followed;

        const api = followed ? productApi.unFollow(product.id) : productApi.follow(product.id);
        fetchingFollowProducts.current.push(product.id);

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
                fetchingFollowProducts.current = fetchingFollowProducts.current.filter((id) => id !== product.id);
            });
    };

    const handleAddToCart = (product) => {
        if (fetchingAddToCart.current.includes(product.id)) {
            return;
        }

        if (!token) {
            navigate(config.routes.login);
            return;
        }

        fetchingAddToCart.current.push(product.id);

        const addedToCart = product.added_to_cart;
        const api = addedToCart ? productApi.removeFromCart(product.id) : productApi.addToCart(product.id);

        api.then((res) => {
            const newProducts = products.map((item) => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        added_to_cart: res.added_to_cart,
                    };
                } else {
                    return item;
                }
            });
            setProducts(newProducts);
        })
            .catch((err) => {
                toast.error('Have an error.');
            })
            .finally(() => {
                fetchingAddToCart.current = fetchingAddToCart.current.filter((id) => id !== product.id);
            });
    };

    return (
        <HeadingPage title="Shop list" breadcrumb={breadcrumb}>
            <div className={cx('wrapper')}>
                <Container fluid="lg">
                    <div className={cx('products-list')}>
                        {products.map((product) => (
                            <ProductItem
                                key={product.id}
                                data={product}
                                onClickHeart={() => handleFollow(product)}
                                onClickCart={() => handleAddToCart(product)}
                            />
                        ))}
                    </div>
                </Container>
            </div>
            <BranchesList />
        </HeadingPage>
    );
}

export default SearchResult;

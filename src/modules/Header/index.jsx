import classNames from 'classnames/bind';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Container } from '~/components';

import { productApi } from '~/api';
import { Cart, ChevronDown, Envelope, Heart, Logout, Phone, Search, User } from '~/components/icons';
import config from '~/config';
import { useDebounce } from '~/hooks';
import { logout } from '~/redux/slices';
import styles from './Header.module.scss';
import SearchResult from './SearchResult';
import { toast } from 'react-toastify';

const cx = classNames.bind(styles);

function Header() {
    const [keyword, setKeyword] = useState('');
    const [products, setProducts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const userInfo = useSelector((state) => state.auth.userInfo);

    const dispatch = useDispatch();

    const handleChange = (event) => {
        const value = event.target.value;
        setKeyword(value);
    };

    const handleLogout = async () => {
        try {
            await dispatch(logout()).unwrap();
            navigate(config.routes.login);
        } catch (err) {
            toast.error('Have an error.');
        }
    };

    useDebounce(
        () => {
            if (keyword.trim()) {
                setLoading(true);
                productApi
                    .getList(keyword)
                    .then((res) => setProducts(res.data))
                    .finally(() => setLoading(false));
            } else {
                setProducts([]);
            }
        },
        [keyword],
        800,
    );

    const handleClickSearchBtn = () => {
        navigate(config.routes.searchResult + '?q=' + keyword);
    };

    return (
        <>
            <div className={cx('wrapper', 'd-flex', 'align-items-center')}>
                <Container fluid="lg">
                    <div className={cx('d-flex', 'justify-content-between')}>
                        <div className={cx('d-flex')}>
                            <div className={cx('contact-item')}>
                                <span className={cx('icon')}>
                                    <Envelope />
                                </span>
                                <span className={cx('text')}>mhhasanul@gmail.com</span>
                            </div>
                            <div className={cx('contact-item')}>
                                <span className={cx('icon')}>
                                    <Phone />
                                </span>
                                <span className={cx('text')}>(12345)67890</span>
                            </div>
                        </div>
                        <div className={cx('d-flex')}>
                            <div className={cx('menu-item')}>
                                <span className={cx('text')}>English</span>
                                <span className={cx('icon')}>
                                    <ChevronDown />
                                </span>
                            </div>
                            <div className={cx('menu-item')}>
                                <span className={cx('text')}>USD</span>
                                <span className={cx('icon')}>
                                    <ChevronDown />
                                </span>
                            </div>
                            {!!userInfo ? (
                                <div className={cx('menu-item')}>
                                    <span className={cx('text')}>{userInfo.name}</span>
                                    <span className={cx('icon')} onClick={handleLogout}>
                                        <Logout />
                                    </span>
                                </div>
                            ) : (
                                <Link to={config.routes.login} className={cx('menu-item')}>
                                    <span className={cx('text')}>Login</span>
                                    <span className={cx('icon')}>
                                        <User />
                                    </span>
                                </Link>
                            )}
                            <div className={cx('menu-item')}>
                                <span className={cx('text')}>Wishlist</span>
                                <span className={cx('icon')}>
                                    <Heart />
                                </span>
                            </div>
                            <Link to={config.routes.cart} className={cx('cart-icon')}>
                                <Cart />
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
            <div>
                <Container fluid="lg">
                    <div className={cx('bottom', 'd-flex', 'justify-content-between', 'align-items-center')}>
                        <div className={cx('d-flex', 'align-items-center')}>
                            <Link to={config.routes.home} className={cx('logo')}>
                                Hekto
                            </Link>
                            <div className={cx('d-flex', 'nav-menu')}>
                                <NavLink
                                    to={config.routes.home}
                                    className={({ isActive }) =>
                                        cx('nav-menu-item', {
                                            active: isActive,
                                        })
                                    }
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to={config.routes.pages}
                                    className={({ isActive }) =>
                                        cx('nav-menu-item', {
                                            active: isActive,
                                        })
                                    }
                                >
                                    Pages
                                </NavLink>
                                <NavLink
                                    to={config.routes.products}
                                    className={({ isActive }) =>
                                        cx('nav-menu-item', {
                                            active: isActive,
                                        })
                                    }
                                >
                                    Products
                                </NavLink>
                                <NavLink
                                    to={config.routes.blog}
                                    className={({ isActive }) =>
                                        cx('nav-menu-item', {
                                            active: isActive,
                                        })
                                    }
                                >
                                    Blog
                                </NavLink>
                                <NavLink
                                    to={config.routes.shop}
                                    className={({ isActive }) =>
                                        cx('nav-menu-item', {
                                            active: isActive,
                                        })
                                    }
                                >
                                    Shop
                                </NavLink>
                                <NavLink
                                    to={config.routes.aboutUs}
                                    className={({ isActive }) =>
                                        cx('nav-menu-item', {
                                            active: isActive,
                                        })
                                    }
                                >
                                    Contact
                                </NavLink>
                            </div>
                        </div>
                        <div className={cx('search-box')}>
                            <input
                                type="text"
                                value={keyword}
                                onChange={handleChange}
                                onFocus={() => setShowResult(true)}
                                onBlur={() => setShowResult(false)}
                            />
                            <button className={cx('search-button')} onClick={handleClickSearchBtn}>
                                <span className={cx('icon')}>
                                    <Search />
                                </span>
                            </button>
                            {showResult && (
                                <div className={cx('search-result')}>
                                    {loading ? <p>Loading...</p> : <SearchResult products={products} />}
                                </div>
                            )}
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Header;

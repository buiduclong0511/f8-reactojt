import axios from 'axios';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Container } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';

import config from '~/config';
import { useDebounce } from '~/hooks';
import styles from './Header.module.scss';
import SearchResult from './SearchResult';

const cx = classNames.bind(styles);

function Header() {
    const [keyword, setKeyword] = useState('');
    const [products, setProducts] = useState([]);
    const [showResult, setShowResult] = useState(false);

    const handleChange = (event) => {
        const value = event.target.value;
        setKeyword(value);
    };

    useDebounce(
        () => {
            if (keyword.trim()) {
                axios
                    .get(`https://reactojt-api.fullstack.edu.vn/api/products?q=${keyword}`)
                    .then((res) => setProducts(res.data.data));
            } else {
                setProducts([]);
            }
        },
        [keyword],
        800,
    );
    return (
        <>
            <div className={cx('wrapper', 'd-flex', 'align-items-center')}>
                <Container fluid="lg">
                    <div className={cx('d-flex', 'justify-content-between')}>
                        <div className={cx('d-flex')}>
                            <div className={cx('contact-item')}>
                                <img src="icons/uil_envelope-alt.svg" alt="" className={cx('icon')} />
                                <span className={cx('text')}>mhhasanul@gmail.com</span>
                            </div>
                            <div className={cx('contact-item')}>
                                <img src="icons/bx_bx-phone-call.svg" alt="" className={cx('icon')} />
                                <span className={cx('text')}>(12345)67890</span>
                            </div>
                        </div>
                        <div className={cx('d-flex')}>
                            <div className={cx('menu-item')}>
                                <span className={cx('text')}>English</span>
                                <img src="icons/akar-icons_chevron-down.svg" alt="" className={cx('icon')} />
                            </div>
                            <div className={cx('menu-item')}>
                                <span className={cx('text')}>USD</span>
                                <img src="icons/akar-icons_chevron-down.svg" alt="" className={cx('icon')} />
                            </div>
                            <Link to={config.routes.login} className={cx('menu-item')}>
                                <span className={cx('text')}>Login</span>
                                <img src="icons/carbon_user.svg" alt="" className={cx('icon')} />
                            </Link>
                            <div className={cx('menu-item')}>
                                <span className={cx('text')}>Wishlist</span>
                                <img src="icons/uil_heart-alt.svg" alt="" className={cx('icon')} />
                            </div>
                            <Link to={config.routes.cart} className={cx('cart-icon')}>
                                <img src="icons/fluent_cart-24-regular.svg" alt="" />
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
            <div>
                <Container fluid="lg">
                    <div className={cx('bottom', 'd-flex', 'justify-content-between', 'align-items-center')}>
                        <div className={cx('d-flex', 'align-items-center')}>
                            <div className={cx('logo')}>Hekto</div>
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
                                    to={config.routes.orderCompleted}
                                    className={({ isActive }) =>
                                        cx('nav-menu-item', {
                                            active: isActive,
                                        })
                                    }
                                >
                                    Pages
                                </NavLink>
                                <NavLink
                                    to={config.routes.orderCompleted}
                                    className={({ isActive }) =>
                                        cx('nav-menu-item', {
                                            active: isActive,
                                        })
                                    }
                                >
                                    Products
                                </NavLink>
                                <NavLink
                                    to={config.routes.orderCompleted}
                                    className={({ isActive }) =>
                                        cx('nav-menu-item', {
                                            active: isActive,
                                        })
                                    }
                                >
                                    Blog
                                </NavLink>
                                <NavLink
                                    to={config.routes.orderCompleted}
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
                            <button className={cx('search-button')}>
                                <img className={cx('icon')} src="icons/uil_search.svg" alt="" />
                            </button>
                            {showResult && (
                                <div className={cx('search-result')}>
                                    <SearchResult products={products} />
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

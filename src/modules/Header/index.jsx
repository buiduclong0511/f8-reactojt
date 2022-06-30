import classNames from 'classnames/bind';
import { Container } from 'reactstrap';

import styles from './Header.module.scss';
import SearchResult from './SearchResult';

const cx = classNames.bind(styles);

function Header() {
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
                            <div className={cx('menu-item')}>
                                <span className={cx('text')}>Login</span>
                                <img src="icons/carbon_user.svg" alt="" className={cx('icon')} />
                            </div>
                            <div className={cx('menu-item')}>
                                <span className={cx('text')}>Wishlist</span>
                                <img src="icons/uil_heart-alt.svg" alt="" className={cx('icon')} />
                            </div>
                            <div className={cx('cart-icon')}>
                                <img src="icons/fluent_cart-24-regular.svg" alt="" />
                            </div>
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
                                <div className={cx('nav-menu-item', 'active')}>Home</div>
                                <div className={cx('nav-menu-item')}>Pages</div>
                                <div className={cx('nav-menu-item')}>Products</div>
                                <div className={cx('nav-menu-item')}>Blog</div>
                                <div className={cx('nav-menu-item')}>Shop</div>
                                <div className={cx('nav-menu-item')}>Contact</div>
                            </div>
                        </div>
                        <div className={cx('search-box')}>
                            <input type="text" />
                            <button className={cx('search-button')}>
                                <img className={cx('icon')} src="icons/uil_search.svg" alt="" />
                            </button>
                            <SearchResult />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Header;

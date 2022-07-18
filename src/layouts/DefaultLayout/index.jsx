import classNames from 'classnames/bind';
import { ScrollToTop } from '~/components';
import { Footer, Header } from '~/modules';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <ScrollToTop>
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <Header />
                </div>
                <div className={cx('main')}>{children}</div>
                <div className={cx('footer')}>
                    <Footer />
                </div>
            </div>
        </ScrollToTop>
    );
}

export default DefaultLayout;

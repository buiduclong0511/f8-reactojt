import classNames from 'classnames/bind';
import { BranchesList } from '~/components';
import Banner from './components/Banner';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner-slider')}>
                <Banner />
            </div>
            <BranchesList />
        </div>
    );
}

export default Home;

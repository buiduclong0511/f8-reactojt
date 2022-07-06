import classNames from 'classnames/bind';
import { BranchesList } from '~/components';
import styles from './Home.module.scss';
import SliderBanner from './components/SliderBanner';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner-slider')}>
                <SliderBanner />
            </div>
            <BranchesList />
        </div>
    );
}

export default Home;

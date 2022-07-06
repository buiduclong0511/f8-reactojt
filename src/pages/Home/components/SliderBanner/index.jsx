import classNames from 'classnames/bind';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Banner from '../Banner';

import styles from './SliderBanner.module.scss';

const cx = classNames.bind(styles);

function SliderBanner() {
    const renderIndicator = (onClickHandler, isSelected) => {
        return <li className={cx('indicator', { active: isSelected })} onClick={onClickHandler}></li>;
    };

    return (
        <Carousel
            showArrows={false}
            showStatus={false}
            infiniteLoop
            interval={3000}
            autoPlay
            renderIndicator={renderIndicator}
        >
            <Banner />
            <Banner />
            <Banner />
        </Carousel>
    );
}

export default SliderBanner;

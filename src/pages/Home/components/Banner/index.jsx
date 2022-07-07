import classNames from 'classnames/bind';
import { Button } from '~/components';
import { Container } from '~/components';
import styles from './Banner.module.scss';

const cx = classNames.bind(styles);

function Banner() {
    return (
        <div className={cx('background')}>
            <Container fluid="lg">
                <div className={cx('wrapper')}>
                    <img src="images/lamp.png" alt="" className={cx('lamp-img')} />
                    <div className={cx('promotion')}>
                        <p className={cx('sub-title')}>Best Furniture For Your Castle....</p>
                        <h3 className={cx('title')}>New Furniture Collection Trends in 2020</h3>
                        <p className={cx('description')}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in
                            phasellus non in justo.
                        </p>
                        <div className={cx('cta-btn')}>
                            <Button>Shop Now</Button>
                        </div>
                    </div>
                    <img src="images/sofa_promotional.png" alt="" className={cx('promotional-img')} />
                </div>
            </Container>
        </div>
    );
}

export default Banner;

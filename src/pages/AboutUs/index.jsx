import classNames from 'classnames/bind';

import { HeadingPage, Container, Button, FeaturesList } from '~/components';
import config from '~/config';

import styles from './AboutUs.module.scss';

const cx = classNames.bind(styles);

function AboutUs() {
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
            name: 'About us',
            path: config.routes.aboutUs,
        },
    ];

    return (
        <HeadingPage title="About us" breadcrumb={breadcrumb}>
            <div className={cx('wrapper')}>
                <Container fluid="lg">
                    <div className={cx('hero')}>
                        <div className={cx('image')}>
                            <img src="/images/about-us.png" alt="" />
                        </div>
                        <div className={cx('info')}>
                            <div className={cx('info-title')}>Know About Our Ecomerce Business, History</div>
                            <div className={cx('content')}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis
                                aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor
                                lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
                            </div>
                            <Button className={cx('cta-btn')}>Contact Us</Button>
                        </div>
                    </div>
                    <div className={cx('features')}>
                        <div className={cx('title')}>Our Features</div>
                        <FeaturesList />
                    </div>
                </Container>
                <div className={cx('feedbacks')}>
                    <div className={cx('title')}>Our Client Say!</div>
                    <div className={cx('images')}>
                        <img src="/images/customer-1.png" alt="" />
                        <img src="/images/customer-2.png" alt="" className={cx('middle')} />
                        <img src="/images/customer-3.png" alt="" />
                    </div>
                    <div className={cx('name')}>Selina Gomez</div>
                    <div className={cx('position')}>Ceo At Webecy Digital</div>
                    <div className={cx('content')}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui
                        sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique
                        ultrices dolor aliquam lacus volutpat praesent.
                    </div>
                    <div className={cx('underline')}>
                        <span />
                    </div>
                </div>
            </div>
        </HeadingPage>
    );
}

export default AboutUs;

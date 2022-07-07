import classNames from 'classnames/bind';
import { Col, Row } from 'reactstrap';
import { BranchesList, Button, Container } from '~/components';

import BlogItem from './components/BlogItem';
import FeaturedProductItem from './components/FeaturedProductItem';
import LatestProductItem from './components/LatestProductItem';
import OfferItem from './components/OfferItem';
import SliderBanner from './components/SliderBanner';
import TrendingProductItem from './components/TrendingProductItem';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    const offerData = [
        {
            img: 'images/car.png',
            title: '24/7 Support',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
        },
        {
            img: 'images/money.png',
            title: '24/7 Support',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
        },
        {
            img: 'images/quality.png',
            title: '24/7 Support',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
        },
        {
            img: 'images/24-hours-support.png',
            title: '24/7 Support',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner-slider')}>
                <SliderBanner />
            </div>
            <Container fluid="lg">
                <div className={cx('featured-products')}>
                    <h3 className={cx('title')}>Featured Products</h3>
                    <div className={cx('list')}>
                        <Row lg={4}>
                            <Col>
                                <FeaturedProductItem />
                            </Col>
                            <Col>
                                <FeaturedProductItem />
                            </Col>
                            <Col>
                                <FeaturedProductItem />
                            </Col>
                            <Col>
                                <FeaturedProductItem />
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className={cx('latest-products')}>
                    <h3 className={cx('title')}>Latest Products</h3>
                    <div className={cx('list')}>
                        <Row lg={3}>
                            <Col>
                                <LatestProductItem />
                            </Col>
                            <Col>
                                <LatestProductItem />
                            </Col>
                            <Col>
                                <LatestProductItem />
                            </Col>
                            <Col>
                                <LatestProductItem />
                            </Col>
                            <Col>
                                <LatestProductItem />
                            </Col>
                            <Col>
                                <LatestProductItem />
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className={cx('shopex-offer')}>
                    <div className={cx('title')}>What Shopex Offer!</div>
                    <div className={cx('list')}>
                        <Row lg={4}>
                            {offerData.map((item, index) => (
                                <Col key={index}>
                                    <OfferItem data={item} />
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </Container>
            <div className={cx('middle-bg')}>
                <Container fluid="lg">
                    <div className={cx('d-flex', 'justify-content-between', 'align-items-center')}>
                        <img src="images/unique-sofa.png" alt="" />
                        <div className={cx('info')}>
                            <div className={cx('name')}>Unique Features Of leatest & Trending Poducts</div>
                            <div className={cx('description')}>
                                <div className={cx('description-item')}>
                                    All frames constructed with hardwood solids and laminates
                                </div>
                                <div className={cx('description-item')}>
                                    Reinforced with double wood dowels, glue, screw - nails corner blocks and machine
                                    nails
                                </div>
                                <div className={cx('description-item')}>
                                    Arms, backs and seats are structurally reinforced
                                </div>
                            </div>
                            <div className={cx('d-flex', 'align-items-center')}>
                                <div className={cx('cta-btn')}>
                                    <Button>Add To Cart</Button>
                                </div>
                                <div className={cx('d-flex', 'flex-column')}>
                                    <div className={cx('branch')}>B&B Italian Sofa</div>
                                    <div className={cx('price')}>$32.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <Container fluid="lg">
                <div className={cx('trending-product')}>
                    <div className={cx('title')}>
                        Get Leatest Update By Subscribe <br /> 0ur Newslater
                        <div className={cx('cta-btn')}>
                            <Button>Shop Now</Button>
                        </div>
                    </div>
                    <div className={cx('title')}>Trending Products</div>
                    <div className={cx('list')}>
                        <Row lg={4}>
                            <Col>
                                <TrendingProductItem />
                            </Col>
                            <Col>
                                <TrendingProductItem />
                            </Col>
                            <Col>
                                <TrendingProductItem />
                            </Col>
                            <Col>
                                <TrendingProductItem />
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
            <div className={cx('bottom-bg')}>
                <img src="images/bottom-home-bg.png" alt="" />
            </div>
            <BranchesList />
            <div className={cx('blogs-list')}>
                <Container fluid="lg">
                    <div className={cx('title')}>Latest Blogs</div>
                    <div className={cx('list')}>
                        <Row lg={3}>
                            <Col>
                                <BlogItem />
                            </Col>
                            <Col>
                                <BlogItem />
                            </Col>
                            <Col>
                                <BlogItem />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Home;

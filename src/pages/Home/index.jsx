import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { Col, Row } from 'reactstrap';

import { productApi, blogApi } from '~/api';
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
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [latestProducts, setLatestProducts] = useState([]);
    const [trendingProducts, setTrendingProducts] = useState([]);
    const [blogs, setBlogs] = useState([]);

    const fetchingProducts = useRef([]);

    useEffect(() => {
        productApi.getFeaturedList().then((res) => setFeaturedProducts(res.data));
        productApi.getLatestList().then((res) => setLatestProducts(res.data));
        productApi.getTrendingProduct().then((res) => setTrendingProducts(res.data));
        blogApi.getList().then((res) => setBlogs(res.data));
    }, []);

    const handleFollow = (product) => {
        if (fetchingProducts.current.includes(product.id)) {
            return;
        }

        const followed = product.followed;

        const api = followed ? productApi.unFollow(product.id) : productApi.follow(product.id);
        fetchingProducts.current.push(product.id);

        api.then((res) => {
            const newFeaturedProducts = featuredProducts.map((item) => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        followed: res.followed,
                    };
                } else {
                    return item;
                }
            });
            setFeaturedProducts(newFeaturedProducts);

            const newLatestProducts = latestProducts.map((item) => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        followed: res.followed,
                    };
                } else {
                    return item;
                }
            });

            setLatestProducts(newLatestProducts);
        })
            .catch(() => {
                toast.error('Have an error.');
            })
            .finally(() => {
                fetchingProducts.current = fetchingProducts.current.filter((id) => id !== product.id);
            });
    };

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
                            {featuredProducts.map((product) => (
                                <Col key={product.id}>
                                    <FeaturedProductItem data={product} onClickHeart={() => handleFollow(product)} />
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
                <div className={cx('latest-products')}>
                    <h3 className={cx('title')}>Latest Products</h3>
                    <div className={cx('list')}>
                        <Row lg={3}>
                            {latestProducts.map((product) => (
                                <Col key={product.id}>
                                    <LatestProductItem data={product} onClickHeart={() => handleFollow(product)} />
                                </Col>
                            ))}
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
                            {trendingProducts.map((product) => (
                                <Col key={product.id}>
                                    <TrendingProductItem data={product} />
                                </Col>
                            ))}
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
                            {blogs.map((blog) => (
                                <Col key={blog.id}>
                                    <BlogItem data={blog} />
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Home;

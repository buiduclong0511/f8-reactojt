import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generatePath, Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Col, Row } from 'reactstrap';

import { getUnpaidCart } from '~/redux/slices';
import { productApi } from '~/api';
import { BranchesList, Container, HeadingPage } from '~/components';
import config from '~/config';
import ProductInfo from './components/ProductInfo';
import RelatedProductItem from './components/RelatedProductItem';

import styles from './ProductDetail.module.scss';

const cx = classNames.bind(styles);

const DESCRIPTION = 'DESCRIPTION';
const ADDITIONAL_INFO = 'ADDITIONAL_INFO';
const REVIEWS = 'REVIEWS';
const VIDEO = 'VIDEO';

function ProductDetail() {
    const [tab, setTab] = useState(DESCRIPTION);
    const [productInfo, setProductInfo] = useState(null);
    const [moreInfo, setMoreInfo] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);

    const isFetchingFollow = useRef(false);
    const isFetchingAddToCart = useRef(false);

    const navigate = useNavigate();

    const { id } = useParams();

    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();

    useEffect(() => {
        productApi.show(id).then((res) => {
            setProductInfo(res.data);
            setMoreInfo(res.more_info);
            setRelatedProducts(res.related_products);
        });
    }, [id]);

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
            name: 'Product detail',
            path: config.routes.productDetail,
        },
    ];

    const switchTab = (key) => {
        setTab(key);
    };

    const renderContent = () => {
        switch (tab) {
            case DESCRIPTION:
                return <div>{moreInfo.description}</div>;
            case ADDITIONAL_INFO:
                return <div>{moreInfo.additional_info}</div>;
            case REVIEWS:
                return <div>{moreInfo.reviews}</div>;
            case VIDEO:
                return (
                    <div className={cx('product-video')}>
                        <video controls src={moreInfo.video}></video>
                    </div>
                );
            default:
        }
    };

    const handleFollow = () => {
        if (isFetchingFollow.current) {
            return;
        }

        if (!token) {
            navigate(config.routes.login);
            return;
        }

        isFetchingFollow.current = true;

        const followed = productInfo.followed;
        const api = followed ? productApi.unFollow(productInfo.id) : productApi.follow(productInfo.id);

        api.then((res) => {
            setProductInfo({
                ...productInfo,
                followed: res.followed,
            });
        })
            .catch((err) => {
                toast.error('Have an error.');
            })
            .finally(() => (isFetchingFollow.current = false));
    };

    const handleAddToCart = () => {
        if (isFetchingAddToCart.current) {
            return;
        }

        if (!token) {
            navigate(config.routes.login);
            return;
        }

        isFetchingAddToCart.current = true;

        const addedToCart = productInfo.added_to_cart;
        const api = addedToCart ? productApi.removeFromCart(productInfo.id) : productApi.addToCart(productInfo.id);

        api.then((res) => {
            dispatch(getUnpaidCart());
            setProductInfo({
                ...productInfo,
                added_to_cart: res.added_to_cart,
            });
        })
            .catch((err) => {
                toast.error('Have an error.');
            })
            .finally(() => (isFetchingAddToCart.current = false));
    };

    if (!productInfo) {
        return null;
    }

    return (
        <HeadingPage title="Product details" breadcrumb={breadcrumb}>
            <div className={cx('product-wrapper')}>
                <Container fluid="lg">
                    <ProductInfo data={productInfo} onClickHeart={handleFollow} onClickCart={handleAddToCart} />
                </Container>
            </div>
            <div className={cx('more-info-wrapper')}>
                <Container fluid="lg">
                    <div className={cx('more-info')}>
                        <div className={cx('menu')}>
                            <span
                                className={cx('item', { active: tab === DESCRIPTION })}
                                onClick={() => switchTab(DESCRIPTION)}
                            >
                                Description
                            </span>
                            <span
                                className={cx('item', { active: tab === ADDITIONAL_INFO })}
                                onClick={() => switchTab(ADDITIONAL_INFO)}
                            >
                                Additional Info
                            </span>
                            <span
                                className={cx('item', { active: tab === REVIEWS })}
                                onClick={() => switchTab(REVIEWS)}
                            >
                                Reviews
                            </span>
                            <span className={cx('item', { active: tab === VIDEO })} onClick={() => switchTab(VIDEO)}>
                                Video
                            </span>
                        </div>
                        <div className={cx('content')}>{renderContent()}</div>
                    </div>
                </Container>
            </div>
            <Container fluid="lg">
                <div className={cx('related-products')}>
                    <div className={cx('title')}>Related Products</div>
                    <div className={cx('list')}>
                        <Row lg={4}>
                            {relatedProducts.map((product) => (
                                <Col key={product.id}>
                                    <Link to={generatePath(config.routes.productDetail, { id: product.id })}>
                                        <RelatedProductItem data={product} />
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </Container>
            <BranchesList />
        </HeadingPage>
    );
}

export default ProductDetail;

import classNames from 'classnames/bind';
import { useState } from 'react';
import { Col, Row } from 'reactstrap';

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
                return <div>description</div>;
            case ADDITIONAL_INFO:
                return <div>Additional info</div>;
            case REVIEWS:
                return <div>Review</div>;
            case VIDEO:
                return <div>Video</div>;
            default:
        }
    };

    return (
        <HeadingPage title="Product details" breadcrumb={breadcrumb}>
            <div className={cx('product-wrapper')}>
                <Container fluid="lg">
                    <ProductInfo />
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
                            <Col>
                                <RelatedProductItem />
                            </Col>
                            <Col>
                                <RelatedProductItem />
                            </Col>
                            <Col>
                                <RelatedProductItem />
                            </Col>
                            <Col>
                                <RelatedProductItem />
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
            <BranchesList />
        </HeadingPage>
    );
}

export default ProductDetail;

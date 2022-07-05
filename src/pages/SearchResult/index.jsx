import classNames from 'classnames/bind';
import { useState } from 'react';
import { Container } from 'reactstrap';

import { BranchesList, HeadingPage } from '~/components';
import config from '~/config';
import ProductItem from './components/ProductItem';

import styles from './SearchResult.module.scss';

const cx = classNames.bind(styles);

function SearchResult() {
    const [products] = useState([
        {
            id: 1,
            category_id: 2,
            name: 'Áo Polo F8',
            code: 'fkkCDXt',
            price: 290000,
            description: 'Áo đồng phục polo F8 rất xịn :>',
            discount: 20,
            created_at: '2022-06-30T03:18:11.000000Z',
            updated_at: '2022-06-30T03:18:11.000000Z',
            category: {
                id: 2,
                name: 'Thời trang',
                created_at: '2022-06-30T03:12:21.000000Z',
                updated_at: '2022-06-30T03:12:21.000000Z',
            },
            images: [
                {
                    id: 1,
                    product_id: 1,
                    path: 'product_image/1/H8rFn5TgLaZ9hDxlYD3LTpPjopuAKCnsTRNdCiXJ.png',
                    is_thumbnail: true,
                    created_at: '2022-06-30T05:51:25.000000Z',
                    updated_at: '2022-06-30T05:51:26.000000Z',
                    image_url:
                        'https://files.fullstack.edu.vn/f8-reactojt/product_image/1/H8rFn5TgLaZ9hDxlYD3LTpPjopuAKCnsTRNdCiXJ.png',
                },
                {
                    id: 5,
                    product_id: 1,
                    path: 'product_image/5/odj8dQv5VApTOcTBRWaRsAAyntUBgKw8QdM2vRs4.png',
                    is_thumbnail: false,
                    created_at: '2022-07-04T07:39:45.000000Z',
                    updated_at: '2022-07-04T07:39:45.000000Z',
                    image_url:
                        'https://files.fullstack.edu.vn/f8-reactojt/product_image/5/odj8dQv5VApTOcTBRWaRsAAyntUBgKw8QdM2vRs4.png',
                },
                {
                    id: 6,
                    product_id: 1,
                    path: 'product_image/6/wSbg8Z9RclPk3r20lO6fush78pj3s2ChQyhsV5T5.png',
                    is_thumbnail: false,
                    created_at: '2022-07-04T07:39:58.000000Z',
                    updated_at: '2022-07-04T07:39:58.000000Z',
                    image_url:
                        'https://files.fullstack.edu.vn/f8-reactojt/product_image/6/wSbg8Z9RclPk3r20lO6fush78pj3s2ChQyhsV5T5.png',
                },
                {
                    id: 7,
                    product_id: 1,
                    path: 'product_image/7/gOumeY5wrmisGPNcaadzcJDtnJlOuTPwPE7Vhtg7.png',
                    is_thumbnail: false,
                    created_at: '2022-07-04T07:40:06.000000Z',
                    updated_at: '2022-07-04T07:40:06.000000Z',
                    image_url:
                        'https://files.fullstack.edu.vn/f8-reactojt/product_image/7/gOumeY5wrmisGPNcaadzcJDtnJlOuTPwPE7Vhtg7.png',
                },
            ],
        },
        {
            id: 2,
            category_id: 2,
            name: 'Balo thời trang',
            code: '5UIfpbG',
            price: 390000,
            description: 'Balo thời trang siêu đẹp :>',
            discount: 20,
            created_at: '2022-06-30T03:18:55.000000Z',
            updated_at: '2022-06-30T03:18:55.000000Z',
            category: {
                id: 2,
                name: 'Thời trang',
                created_at: '2022-06-30T03:12:21.000000Z',
                updated_at: '2022-06-30T03:12:21.000000Z',
            },
            images: [
                {
                    id: 2,
                    product_id: 2,
                    path: 'product_image/2/K1V8chi6F2EBzlk5KIKSDTyVPIY3ivmAbnzNNhBQ.png',
                    is_thumbnail: true,
                    created_at: '2022-06-30T05:51:38.000000Z',
                    updated_at: '2022-06-30T05:51:38.000000Z',
                    image_url:
                        'https://files.fullstack.edu.vn/f8-reactojt/product_image/2/K1V8chi6F2EBzlk5KIKSDTyVPIY3ivmAbnzNNhBQ.png',
                },
                {
                    id: 8,
                    product_id: 2,
                    path: 'product_image/8/TliqGf7pcJcrGvH1mhlV2HA4PTpCzcB4ZQQvhbew.png',
                    is_thumbnail: false,
                    created_at: '2022-07-04T07:40:46.000000Z',
                    updated_at: '2022-07-04T07:40:46.000000Z',
                    image_url:
                        'https://files.fullstack.edu.vn/f8-reactojt/product_image/8/TliqGf7pcJcrGvH1mhlV2HA4PTpCzcB4ZQQvhbew.png',
                },
                {
                    id: 9,
                    product_id: 2,
                    path: 'product_image/9/oCVhWlWbDFEdwhokv2qIrm2eaSTJRungs1waEofK.png',
                    is_thumbnail: false,
                    created_at: '2022-07-04T07:40:54.000000Z',
                    updated_at: '2022-07-04T07:40:54.000000Z',
                    image_url:
                        'https://files.fullstack.edu.vn/f8-reactojt/product_image/9/oCVhWlWbDFEdwhokv2qIrm2eaSTJRungs1waEofK.png',
                },
                {
                    id: 10,
                    product_id: 2,
                    path: 'product_image/10/l9I2kSGuKwCh9XlZejTFrBEUtdEQxvKFGN5boZYD.png',
                    is_thumbnail: false,
                    created_at: '2022-07-04T07:41:00.000000Z',
                    updated_at: '2022-07-04T07:41:01.000000Z',
                    image_url:
                        'https://files.fullstack.edu.vn/f8-reactojt/product_image/10/l9I2kSGuKwCh9XlZejTFrBEUtdEQxvKFGN5boZYD.png',
                },
            ],
        },
        {
            id: 3,
            category_id: 2,
            name: 'Túi xách hàng hiệu Luôn Vui Tươi',
            code: 'gsbwUh0',
            price: 390000,
            description: 'Túi xách cao cấp nhập khẩu từ Mỹ (Đình)',
            discount: 20,
            created_at: '2022-06-30T03:19:52.000000Z',
            updated_at: '2022-06-30T03:19:52.000000Z',
            category: {
                id: 2,
                name: 'Thời trang',
                created_at: '2022-06-30T03:12:21.000000Z',
                updated_at: '2022-06-30T03:12:21.000000Z',
            },
            images: [
                {
                    id: 3,
                    product_id: 3,
                    path: 'product_image/3/MOplItDhhjfOAqWxZYjntgiDsJ0fRsfis2fGt62t.png',
                    is_thumbnail: true,
                    created_at: '2022-06-30T05:51:47.000000Z',
                    updated_at: '2022-06-30T05:51:48.000000Z',
                    image_url:
                        'https://files.fullstack.edu.vn/f8-reactojt/product_image/3/MOplItDhhjfOAqWxZYjntgiDsJ0fRsfis2fGt62t.png',
                },
                {
                    id: 11,
                    product_id: 3,
                    path: 'product_image/11/1v66zOC8imAwdSA5Tu67RuAeiFEnvzJnxMMmwrWb.png',
                    is_thumbnail: false,
                    created_at: '2022-07-04T07:41:10.000000Z',
                    updated_at: '2022-07-04T07:41:10.000000Z',
                    image_url:
                        'https://files.fullstack.edu.vn/f8-reactojt/product_image/11/1v66zOC8imAwdSA5Tu67RuAeiFEnvzJnxMMmwrWb.png',
                },
                {
                    id: 12,
                    product_id: 3,
                    path: 'product_image/12/P7qZ9fW1c2Q59HfqTdQ1j0xVz6HDf6xA8ncG1Lge.png',
                    is_thumbnail: false,
                    created_at: '2022-07-04T07:41:17.000000Z',
                    updated_at: '2022-07-04T07:41:17.000000Z',
                    image_url:
                        'https://files.fullstack.edu.vn/f8-reactojt/product_image/12/P7qZ9fW1c2Q59HfqTdQ1j0xVz6HDf6xA8ncG1Lge.png',
                },
                {
                    id: 13,
                    product_id: 3,
                    path: 'product_image/13/NDkk1XptHTbUwPfLrRRvVpnRAwnkZFl2v4WgoPrQ.png',
                    is_thumbnail: false,
                    created_at: '2022-07-04T07:41:23.000000Z',
                    updated_at: '2022-07-04T07:41:23.000000Z',
                    image_url:
                        'https://files.fullstack.edu.vn/f8-reactojt/product_image/13/NDkk1XptHTbUwPfLrRRvVpnRAwnkZFl2v4WgoPrQ.png',
                },
            ],
        },
        {
            id: 5,
            category_id: 1,
            name: 'Tủ lạnh',
            code: '6BPSoKK',
            price: 390000,
            description: 'Tủ lạnh cao cấp với thiết kế đặc biệt có thể làm chín đồ ăn trong 5 phút',
            discount: 20,
            created_at: '2022-06-30T03:28:03.000000Z',
            updated_at: '2022-06-30T03:28:03.000000Z',
            category: {
                id: 1,
                name: 'Nội thất',
                created_at: '2022-06-30T03:12:11.000000Z',
                updated_at: '2022-06-30T03:12:11.000000Z',
            },
            images: [
                {
                    id: 4,
                    product_id: 5,
                    path: 'product_image/4/VB2j1qiTelSVlP28FK8o3Y549YpUBGq87ZNM6p79.png',
                    is_thumbnail: true,
                    created_at: '2022-06-30T05:51:57.000000Z',
                    updated_at: '2022-06-30T05:51:57.000000Z',
                    image_url:
                        'https://files.fullstack.edu.vn/f8-reactojt/product_image/4/VB2j1qiTelSVlP28FK8o3Y549YpUBGq87ZNM6p79.png',
                },
                {
                    id: 14,
                    product_id: 5,
                    path: 'product_image/14/PFaBhQnN7LLTqMuesCQqBEgMuqIp5zgYAqh9SYso.png',
                    is_thumbnail: false,
                    created_at: '2022-07-04T07:41:33.000000Z',
                    updated_at: '2022-07-04T07:41:34.000000Z',
                    image_url:
                        'https://files.fullstack.edu.vn/f8-reactojt/product_image/14/PFaBhQnN7LLTqMuesCQqBEgMuqIp5zgYAqh9SYso.png',
                },
                {
                    id: 15,
                    product_id: 5,
                    path: 'product_image/15/pHF8AqhqK2qyH17YBEyFZSfDFUs5fPrzSUQkmEE1.png',
                    is_thumbnail: false,
                    created_at: '2022-07-04T07:41:39.000000Z',
                    updated_at: '2022-07-04T07:41:39.000000Z',
                    image_url:
                        'https://files.fullstack.edu.vn/f8-reactojt/product_image/15/pHF8AqhqK2qyH17YBEyFZSfDFUs5fPrzSUQkmEE1.png',
                },
                {
                    id: 16,
                    product_id: 5,
                    path: 'product_image/16/CTYe4WN5a23yCCb1ayVfaWut7TA2kGPuQVN8fuhK.png',
                    is_thumbnail: false,
                    created_at: '2022-07-04T07:41:45.000000Z',
                    updated_at: '2022-07-04T07:41:45.000000Z',
                    image_url:
                        'https://files.fullstack.edu.vn/f8-reactojt/product_image/16/CTYe4WN5a23yCCb1ayVfaWut7TA2kGPuQVN8fuhK.png',
                },
            ],
        },
        {
            id: 6,
            category_id: 2,
            name: 'Túi sách',
            code: 'pzjGqHK',
            price: 390000,
            description:
                'Túi xách da thật ELLY – ET54 với những tone màu sành điệu chính là nguồn cảm hứng sáng tạo đầy phong cách cho các cô gái. Với ELLY – ET54, các cô nàng tha hồ diện những bộ trang phục từ sang trọng, thanh lịch đến năng động, hiện đại đầy cá tính. Không chỉ là một món phụ kiện để đựng đồ, ELLY – ET54 còn khiến vẻ ngoài của bạn thêm phần nổi bật và thu hút.',
            discount: 10,
            created_at: '2022-07-04T07:51:26.000000Z',
            updated_at: '2022-07-04T07:51:26.000000Z',
            category: {
                id: 2,
                name: 'Thời trang',
                created_at: '2022-06-30T03:12:21.000000Z',
                updated_at: '2022-06-30T03:12:21.000000Z',
            },
            images: [
                {
                    id: 17,
                    product_id: 6,
                    path: 'product_image/17/BNHjoZXfYD7dK3MRl3rJYAsBochin9rJs1dIXIWO.png',
                    is_thumbnail: true,
                    created_at: '2022-07-04T07:52:21.000000Z',
                    updated_at: '2022-07-04T07:52:22.000000Z',
                    image_url:
                        'https://files.fullstack.edu.vn/f8-reactojt/product_image/17/BNHjoZXfYD7dK3MRl3rJYAsBochin9rJs1dIXIWO.png',
                },
                {
                    id: 18,
                    product_id: 6,
                    path: 'product_image/18/Mx1QzYdJhgZtbrb9iZFxRRTyQ5aWYn5a1JmsO360.png',
                    is_thumbnail: false,
                    created_at: '2022-07-04T07:52:29.000000Z',
                    updated_at: '2022-07-04T07:52:30.000000Z',
                    image_url:
                        'https://files.fullstack.edu.vn/f8-reactojt/product_image/18/Mx1QzYdJhgZtbrb9iZFxRRTyQ5aWYn5a1JmsO360.png',
                },
                {
                    id: 19,
                    product_id: 6,
                    path: 'product_image/19/XskciWbruP8LmbXAMv7puz2Vvm5FSjb9dpWwE2il.png',
                    is_thumbnail: false,
                    created_at: '2022-07-04T07:52:36.000000Z',
                    updated_at: '2022-07-04T07:52:36.000000Z',
                    image_url:
                        'https://files.fullstack.edu.vn/f8-reactojt/product_image/19/XskciWbruP8LmbXAMv7puz2Vvm5FSjb9dpWwE2il.png',
                },
                {
                    id: 20,
                    product_id: 6,
                    path: 'product_image/20/26aiWey6zuovS0sm0BoXDKBubRFczHp8bnLruCeu.png',
                    is_thumbnail: false,
                    created_at: '2022-07-04T07:52:43.000000Z',
                    updated_at: '2022-07-04T07:52:43.000000Z',
                    image_url:
                        'https://files.fullstack.edu.vn/f8-reactojt/product_image/20/26aiWey6zuovS0sm0BoXDKBubRFczHp8bnLruCeu.png',
                },
            ],
        },
        {
            id: 7,
            category_id: 2,
            name: 'TÚI CLUTCH NỮ THỜI TRANG ELLY- ECH50',
            code: 'ml9ty49',
            price: 390000,
            description:
                'Bất kể phong cách thời trang của bạn là gì, là một quý cô công sở mẫu mực hay một cô nàng cá tính ưa sự bụi bặm hay chạy theo những kiểu mặc gợi cảm nhất đi chăng nữa, bạn đều có thể tìm thấy ở Paris những ý tưởng mặc đẹp nên thử ít nhất một lần trong đời: Vậy thì clutch cầm tay ELLY – ECH50 đẹp trang nhã nhưng đầy quyền lực – item đậm chất Paris này có phải gu của nàng không? Khám phá ngay những ý tưởng mặc đẹp như một cô nàng Pháp thực thự với ELLY – ECH50 từ ELLY nàng nhé!',
            discount: 10,
            created_at: '2022-07-04T07:53:43.000000Z',
            updated_at: '2022-07-04T07:53:43.000000Z',
            category: {
                id: 2,
                name: 'Thời trang',
                created_at: '2022-06-30T03:12:21.000000Z',
                updated_at: '2022-06-30T03:12:21.000000Z',
            },
            images: [
                {
                    id: 21,
                    product_id: 7,
                    path: 'product_image/21/WLOrkYBxA9u8Oen1zp2EyvjyzVmGZsmTNfdvWIfi.png',
                    is_thumbnail: true,
                    created_at: '2022-07-04T07:54:02.000000Z',
                    updated_at: '2022-07-04T07:54:02.000000Z',
                    image_url:
                        'https://files.fullstack.edu.vn/f8-reactojt/product_image/21/WLOrkYBxA9u8Oen1zp2EyvjyzVmGZsmTNfdvWIfi.png',
                },
                {
                    id: 22,
                    product_id: 7,
                    path: 'product_image/22/uBlwCTmetnAo5yTqi4Hbd9UnNLRF7BSLaKRhbW9z.png',
                    is_thumbnail: false,
                    created_at: '2022-07-04T07:54:11.000000Z',
                    updated_at: '2022-07-04T07:54:11.000000Z',
                    image_url:
                        'https://files.fullstack.edu.vn/f8-reactojt/product_image/22/uBlwCTmetnAo5yTqi4Hbd9UnNLRF7BSLaKRhbW9z.png',
                },
                {
                    id: 23,
                    product_id: 7,
                    path: 'product_image/23/LiSnL4CnCD7ALoc7YrirHcrHbmEcqIsJhI4bj6QJ.png',
                    is_thumbnail: false,
                    created_at: '2022-07-04T07:54:17.000000Z',
                    updated_at: '2022-07-04T07:54:17.000000Z',
                    image_url:
                        'https://files.fullstack.edu.vn/f8-reactojt/product_image/23/LiSnL4CnCD7ALoc7YrirHcrHbmEcqIsJhI4bj6QJ.png',
                },
                {
                    id: 24,
                    product_id: 7,
                    path: 'product_image/24/MhmGdsuZO7MH1jGPzUwnTxEjHnxgo2ipvFMdkzl4.png',
                    is_thumbnail: false,
                    created_at: '2022-07-04T07:54:22.000000Z',
                    updated_at: '2022-07-04T07:54:23.000000Z',
                    image_url:
                        'https://files.fullstack.edu.vn/f8-reactojt/product_image/24/MhmGdsuZO7MH1jGPzUwnTxEjHnxgo2ipvFMdkzl4.png',
                },
            ],
        },
    ]);

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
            name: 'Shop list',
            path: config.routes.searchResult,
        },
    ];

    return (
        <HeadingPage title="Shop list" breadcrumb={breadcrumb}>
            <div className={cx('wrapper')}>
                <Container fluid="lg">
                    <div className={cx('products-list')}>
                        {products.map((product) => (
                            <ProductItem key={product.id} data={product} />
                        ))}
                    </div>
                </Container>
            </div>
            <BranchesList />
        </HeadingPage>
    );
}

export default SearchResult;

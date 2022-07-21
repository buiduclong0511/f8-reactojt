import { Col, Row } from 'reactstrap';
import { FeatureItem } from '~/components';

function FeaturesList() {
    const offerData = [
        {
            img: 'images/car.png',
            title: 'Free Delivery',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
        },
        {
            img: 'images/money.png',
            title: '100% Cash Back',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
        },
        {
            img: 'images/quality.png',
            title: 'Quality Product',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
        },
        {
            img: 'images/24-hours-support.png',
            title: '24/7 Support',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
        },
    ];

    return (
        <Row lg={4}>
            {offerData.map((item, index) => (
                <Col key={index}>
                    <FeatureItem data={item} />
                </Col>
            ))}
        </Row>
    );
}

export default FeaturesList;

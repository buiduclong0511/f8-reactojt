import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { BranchesList, Button, Container, HeadingPage } from '~/components';
import config from '~/config';

import styles from './NotFound.module.scss';

const cx = classNames.bind(styles);

function NotFound() {
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
            name: '404 Not Found',
            path: config.routes.notFound,
        },
    ];

    return (
        <HeadingPage title="404 Not Found" breadcrumb={breadcrumb}>
            <Container fluid="lg">
                <div className={cx('wrapper')}>
                    <img src="/images/404.png" className={cx('image')} alt="404" />
                    <div className={cx('description')}>oop! The page you requested was not found!</div>
                    <Link to={config.routes.home}>
                        <Button className={cx('cta-btn')}>Back To Home</Button>
                    </Link>
                    <BranchesList />
                </div>
            </Container>
        </HeadingPage>
    );
}

export default NotFound;

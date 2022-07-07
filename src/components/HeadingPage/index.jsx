import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Container } from '~/components';
import styles from './Container.module.scss';

const cx = classNames.bind(styles);

function HeadingPage({ children, title = '', breadcrumb = [] }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('heading')}>
                <Container fluid="lg">
                    <p className={cx('title')}>{title}</p>
                    <div className={cx('breadcrumb')}>
                        {breadcrumb.map((item, index) => (
                            <div className={cx('breadcrumb-item')} key={item.path}>
                                <Link to={item.path} className={cx({ active: index === breadcrumb.length - 1 })}>
                                    {item.name}
                                </Link>
                                {index !== breadcrumb.length - 1 && <span className={cx('dot')}>.</span>}
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
            {children}
        </div>
    );
}

export default HeadingPage;

import classNames from 'classnames/bind';
import { Container as BootstrapContainer } from 'reactstrap';
import styles from './Container.module.scss';

const cx = classNames.bind(styles);

function Container({ children, ...props }) {
    return (
        <BootstrapContainer className={cx('wrapper')} {...props}>
            {children}
        </BootstrapContainer>
    );
}

export default Container;

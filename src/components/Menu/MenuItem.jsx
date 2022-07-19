import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ children, ...props }) {
    return <div className={cx('item-wrapper', props.className)}>{children}</div>;
}

export default MenuItem;

import classNames from 'classnames/bind';
import styles from './IconButton.module.scss';

const cx = classNames.bind(styles);

function IconButton({ children, active = false, className }) {
    return <button className={cx('wrapper', { active }, className)}>{children}</button>;
}

export default IconButton;

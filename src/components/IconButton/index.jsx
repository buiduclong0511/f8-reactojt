import classNames from 'classnames/bind';
import styles from './IconButton.module.scss';

const cx = classNames.bind(styles);

function IconButton({ children, active = false, className, onClick = () => {} }) {
    return (
        <button className={cx('wrapper', { active }, className)} onClick={onClick}>
            {children}
        </button>
    );
}

export default IconButton;

import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ children, className, fullWidth = false, ...props }) {
    return (
        <button className={cx('wrapper', className, { 'full-width': fullWidth })} {...props}>
            {children}
        </button>
    );
}

export default Button;

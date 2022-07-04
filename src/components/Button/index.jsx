import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ children, className, ...props }) {
    return (
        <button className={cx('wrapper', className)} {...props}>
            {children}
        </button>
    );
}

export default Button;

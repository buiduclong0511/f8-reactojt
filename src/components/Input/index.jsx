import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

function Input({ label = '', error = '', touched = false, className, ...props }) {
    return (
        <div className={cx('wrapper', className)}>
            <input type="text" {...props} placeholder={label} />
            {!!error && touched && <p className={cx('error')}>{error}</p>}
        </div>
    );
}

export default Input;

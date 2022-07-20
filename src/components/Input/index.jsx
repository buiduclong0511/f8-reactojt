import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

function Input({ label = '', error = '', variant = 'primary', touched = false, className, ...props }) {
    if (variant === 'secondary') {
        return (
            <div className={cx('wrapper-secondary', className)}>
                <input type="text" {...props} id={props.id || props.name} placeholder={props.placeholder || ' '} />
                <label htmlFor={props.id || props.name}>{label}</label>
                {!!error && touched && <p className={cx('error')}>{error}</p>}
            </div>
        );
    }

    return (
        <div className={cx('wrapper', className)}>
            <input type="text" {...props} placeholder={label} />
            {!!error && touched && <p className={cx('error')}>{error}</p>}
        </div>
    );
}

export default Input;

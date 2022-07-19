import classNames from 'classnames/bind';
import styles from './QuantityInput.module.scss';

const cx = classNames.bind(styles);

function QuantityInput({ quantity = 0, onDecrement = () => {}, onIncrement = () => {} }) {
    return (
        <div className={cx('wrapper')}>
            <button onClick={onDecrement}>-</button>
            <span>{quantity}</span>
            <button onClick={onIncrement}>+</button>
        </div>
    );
}

export default QuantityInput;

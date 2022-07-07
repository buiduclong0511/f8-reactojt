import classNames from 'classnames/bind';
import styles from './OfferItem.module.scss';

const cx = classNames.bind(styles);

function OfferItem({ data = {} }) {
    return (
        <div className={cx('wrapper')}>
            <img src={data.img} alt="" />
            <p className={cx('title')}>{data.title}</p>
            <p className={cx('description')}>{data.description}</p>
        </div>
    );
}

export default OfferItem;

import classNames from 'classnames/bind';

import styles from './FeatureItem.module.scss';

const cx = classNames.bind(styles);

function FeatureItem({ data = {} }) {
    return (
        <div className={cx('wrapper')}>
            <img src={data.img} alt="" />
            <p className={cx('title')}>{data.title}</p>
            <p className={cx('description')}>{data.description}</p>
        </div>
    );
}

export default FeatureItem;

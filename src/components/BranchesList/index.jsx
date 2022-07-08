import classNames from 'classnames/bind';
import styles from './BranchesList.module.scss';

const cx = classNames.bind(styles);

function BranchesList() {
    return (
        <div className={cx('wrapper')}>
            <img src="/images/branches.png" alt="" />
        </div>
    );
}

export default BranchesList;

import classNames from 'classnames/bind';
import { Times } from '~/components/icons';
import styles from './Image.module.scss';

const cx = classNames.bind(styles);

function Image({ src = '', alt = '', width = 83, height = 83, onDelete }) {
    return (
        <div className={cx('wrapper')} style={{ width, height }}>
            <img src={src} alt={alt} />
            {!!onDelete && (
                <button className={cx('delete-btn')} onClick={onDelete}>
                    <Times />
                </button>
            )}
        </div>
    );
}

export default Image;

import classNames from 'classnames/bind';
import moment from 'moment';
import { Calendar, Pen } from '~/components/icons';
import styles from './BlogItem.module.scss';

const cx = classNames.bind(styles);

function BlogItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('img')} style={{ backgroundImage: `url(${data.image_url})` }} />
            <div className={cx('info')}>
                <div className={cx('d-flex')}>
                    <div className={cx('author')}>
                        <span className={cx('icon')}>
                            <Pen />
                        </span>
                        {data.author}
                    </div>
                    <div className={cx('time')}>
                        <span className={cx('icon')}>
                            <Calendar />
                        </span>
                        {moment(data.created_at).format('DD MMMM, YYYY')}
                    </div>
                </div>
                <div className={cx('title')}>{data.title}</div>
                <div className={cx('description')}>{data.description}</div>
                <div className={cx('cta-btn')}>Read More</div>
            </div>
        </div>
    );
}

export default BlogItem;

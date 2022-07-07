import classNames from 'classnames/bind';
import { Calendar, Pen } from '~/components/icons';
import styles from './BlogItem.module.scss';

const cx = classNames.bind(styles);

function BlogItem() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('img')} style={{ backgroundImage: 'url(images/blog-thumbnail.png)' }} />
            <div className={cx('info')}>
                <div className={cx('d-flex')}>
                    <div className={cx('author')}>
                        <span className={cx('icon')}>
                            <Pen />
                        </span>
                        SaberAli
                    </div>
                    <div className={cx('time')}>
                        <span className={cx('icon')}>
                            <Calendar />
                        </span>
                        21 August,2020
                    </div>
                </div>
                <div className={cx('title')}>Top esssential Trends in 2021</div>
                <div className={cx('description')}>
                    More off this less hello samlande lied much over tightly circa horse taped mightly
                </div>
                <div className={cx('cta-btn')}>Read More</div>
            </div>
        </div>
    );
}

export default BlogItem;

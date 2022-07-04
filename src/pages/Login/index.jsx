import classNames from 'classnames/bind';
import { useState } from 'react';
import { BranchesList, Button, HeadingPage, Input } from '~/components';
import config from '~/config';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    const [loginMode, setLoginMode] = useState(true);

    const breadcrumb = [
        {
            name: 'Home',
            path: config.routes.home,
        },
        {
            name: 'Pages',
            path: config.routes.pages,
        },
        {
            name: 'My account',
            path: config.routes.login,
        },
    ];

    const changeMode = () => {
        setLoginMode(!loginMode);
    };

    return (
        <HeadingPage title="My account" breadcrumb={breadcrumb}>
            <div className={cx('wrapper')}>
                <div className={cx('form')}>
                    <h3 className={cx('title')}>{loginMode ? 'Login' : 'Register'}</h3>
                    <p className={cx('sub-title')}>
                        {loginMode
                            ? 'Please login using account detail bellow.'
                            : 'Please register using account detail bellow.'}
                    </p>
                    {!loginMode && <Input label="Name" />}
                    <Input label="Email Address" />
                    <Input label="Password" type="password" />
                    {!loginMode && <Input label="Confirm password" type="password" />}
                    <p className={cx('forgot-pass')}>Forgot your password?</p>
                    <Button>{loginMode ? 'Sign In' : 'Register'}</Button>
                    <div className={cx('nav-register')} onClick={changeMode}>
                        {loginMode ? "Don't have an Account? Create account" : 'Do you already have an account? Login'}
                    </div>
                </div>
            </div>
            <BranchesList />
        </HeadingPage>
    );
}

export default Login;

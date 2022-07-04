import classNames from 'classnames/bind';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { authApi } from '~/api';
import { BranchesList, Button, HeadingPage, Input } from '~/components';
import config from '~/config';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    const [loginMode, setLoginMode] = useState(true);

    const navigate = useNavigate();

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

    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const { values, errors, touched, handleChange, handleBlur, handleSubmit, resetForm, isSubmitting } = useFormik({
        initialValues,
        onSubmit: async (values, { setSubmitting }) => {
            try {
                if (loginMode) {
                    const body = {
                        email: values.email,
                        password: values.password,
                    };
                    const res = await authApi.login(body);
                    console.log(res);
                } else {
                    const body = {
                        name: values.name,
                        email: values.email,
                        password: values.password,
                    };
                    const res = await authApi.register(body);
                    console.log(res);
                }
                toast.success('Login success.');
                navigate('/');
            } catch (err) {
                toast.error('Something went wrong!');
            } finally {
                setSubmitting(false);
            }
        },
        validationSchema: yup.object().shape({
            name: yup.string().test({
                name: 'Validate required',
                message: 'Name is required.',
                test: (value) => {
                    if (loginMode) {
                        return true;
                    }

                    return !!value?.trim();
                },
            }),
            email: yup.string().required('Email is required.').email('Email is invalid.'),
            password: yup.string().required('Password is required.').min(8, 'Min length is 8 characters.'),
            confirmPassword: yup.string().test({
                name: 'Validate password match',
                message: 'Password not match.',
                test: (value, formState) => {
                    if (loginMode) {
                        return true;
                    }

                    const password = formState.parent.password;
                    return value === password;
                },
            }),
        }),
    });

    const changeMode = () => {
        resetForm();
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
                    {!loginMode && (
                        <Input
                            label="Name"
                            name="name"
                            error={errors.name}
                            touched={touched.name}
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    )}
                    <Input
                        label="Email Address"
                        name="email"
                        error={errors.email}
                        touched={touched.email}
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <Input
                        label="Password"
                        type="password"
                        name="password"
                        error={errors.password}
                        touched={touched.password}
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {!loginMode && (
                        <Input
                            label="Confirm password"
                            type="password"
                            name="confirmPassword"
                            error={errors.confirmPassword}
                            touched={touched.confirmPassword}
                            value={values.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    )}
                    <p className={cx('forgot-pass')}>Forgot your password?</p>
                    <Button onClick={handleSubmit} disabled={isSubmitting}>
                        {loginMode ? 'Sign In' : 'Register'}
                    </Button>
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

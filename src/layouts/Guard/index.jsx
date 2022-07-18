import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { authApi } from '~/api';
import config from '~/config';
import { clearUserInfo, setUserInfo } from '~/redux/slices';

function PublicRoute({ hasAuthenticate = false, children }) {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        authApi
            .getCurrentUser()
            .then((res) => {
                dispatch(setUserInfo(res.data));
            })
            .catch((err) => {
                dispatch(clearUserInfo());
                if (hasAuthenticate) {
                    navigate(config.routes.login);
                }
            });
    }, [dispatch, hasAuthenticate, navigate]);

    return children;
}

function PrivateRoute(props) {
    return <PublicRoute hasAuthenticate {...props} />;
}

export { PrivateRoute, PublicRoute };

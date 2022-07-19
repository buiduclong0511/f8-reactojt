import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import config from '~/config';

function VerifyLoggedIn() {
    const userInfo = useSelector((state) => state.auth.userInfo);

    const navigate = useNavigate();

    useEffect(() => {
        if (!userInfo) {
            navigate(config.routes.login);
        }
    }, [navigate, userInfo]);

    return null;
}

export default VerifyLoggedIn;

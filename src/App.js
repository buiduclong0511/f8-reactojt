import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getUserInfo } from '~/redux/slices';
import { VerifyLoggedIn } from '~/layouts';
import routes from '~/routes';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserInfo());
    }, [dispatch]);

    return (
        <Router>
            <Routes>
                {routes.map((route, index) => {
                    const Element = route.element;
                    const Layout = route.layout ? route.layout : Fragment;
                    const isPrivate = !!route.isPrivate;

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    {isPrivate && <VerifyLoggedIn />}
                                    <Element />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable
                pauseOnHover
            />
        </Router>
    );
}

export default App;

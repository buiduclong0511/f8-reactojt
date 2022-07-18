import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import routes from '~/routes';
import { PublicRoute, PrivateRoute } from '~/layouts';

function App() {
    return (
        <Router>
            <Routes>
                {routes.map((route, index) => {
                    const Element = route.element;
                    const Layout = route.layout ? route.layout : Fragment;
                    const Guard = route.isPrivate ? PrivateRoute : PublicRoute;

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Guard>
                                        <Element />
                                    </Guard>
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

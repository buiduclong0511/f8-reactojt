import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from '~/routes';

function App() {
    return (
        <Router>
            <Routes>
                {routes.map((route, index) => {
                    const Element = route.element;
                    const Layout = route.layout ? route.layout : Fragment;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Element />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;

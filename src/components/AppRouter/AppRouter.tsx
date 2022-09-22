import { Routes, Route } from 'react-router-dom';
import { routes } from '../../router';
import { Layout } from '../Layout';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Layout />}>
          {routes.map((route) => (
            <Route
              path={route.path}
              element={<route.element />}
              key={route.path}
            />
          ))}
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;

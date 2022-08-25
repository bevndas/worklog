import {Route, Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Authentication from './pages/Authentication';
import Leaves from './pages/Leaves';

const AppRouter = () => {
    return  (
        <Routes>
            <Route path={'/'} element={<Dashboard />}></Route>
            <Route path={'/auth'} element={<Authentication />}></Route>
            <Route path={'/dashboard'} element={<Dashboard />}></Route>
            <Route path={'/leaves'} element={<Leaves />}></Route>
        </Routes>
    )
}
export default AppRouter;
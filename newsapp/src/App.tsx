
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';



import HOME from './components/pages/home';
import SPORT from './components/pages/sport';
import POLITICS from './components/pages/politics';
import ROOT from './components/pages/root'
import SEARCH from './components/pages/search'


import ErrorPage from './utils/error/error.page';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<ROOT/>}  errorElement={<ErrorPage />}>
			   <Route path="/" element={<HOME />} />
            <Route path="/sport" element={<SPORT />} />
            <Route path="/politics" element={<POLITICS />} />
				<Route path="/search" element={<SEARCH />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;

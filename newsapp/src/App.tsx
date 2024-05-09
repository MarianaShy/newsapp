
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import IT from './components/pages/it';
import HOME from './components/pages/home';
import SPORT from './components/pages/sport';
import POLITICS from './components/pages/politics';
import ROOT from './components/pages/root'
import SEARCH from './components/pages/search'





const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<ROOT/>}>
			   <Route path="/" element={<HOME />} />
            <Route path="/it" element={<IT />} />
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

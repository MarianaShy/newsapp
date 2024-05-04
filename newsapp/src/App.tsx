import './App.css';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import IT from './components/it';
import HOME from './components/home';
import SPORT from './components/sport';
import POLITICS from './components/politics';
import ROOT from './components/root'
import SEARCH from './components/search'





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

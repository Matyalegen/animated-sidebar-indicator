import './App.scss';
import 'boxicons/css/boxicons.min.css';
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
//import Dashboard from './pages/Dashboard/Dashboard';
import Acquistion from './pages/Acquistion';
import Utilization from './pages/Utilization';
import Maintenance from './pages/Maintenance';
import Disposal from './pages/Disposal';
import ListEmployeeComponent from './pages/ListEmployeeComponent';
import FooterComponent from './components/FooterComponent';


function App() {
    return (
        /*<div className="container">
            <ListEmployeeComponent/>
        </div>
    );
}*/

<div>
    
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<ListEmployeeComponent />} />
                    <Route path='/employees' element={< ListEmployeeComponent/>} />
                    <Route path='/acquistion' element={<Acquistion />} />
                    <Route path='/utilization' element={<Utilization />} />
                    <Route path='/maintenance' element={<Maintenance />} />
                    <Route path='/disposal' element={<Disposal />} />
                </Route>
            </Routes>
        </BrowserRouter>
        <FooterComponent/>
</div>
    );
    
}

export default App;

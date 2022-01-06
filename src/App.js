import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import MyOrders from './Pages/MyOrders/MyOrders';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';
import AddANewPackage from './Pages/AddANewPackage/AddANewPackage';
import PayNow from './Pages/Home/PayNow/PayNow';
import AuthProvider from './Pages/Context/AuthProvider';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/home" element={<Home />}>
            </Route>
            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="/myorders" element={<MyOrders />}>
            </Route>
            <Route path="/allorders" element={<ManageAllOrders />}>
            </Route>
            <Route path="/newpackage" element={<AddANewPackage />}>
            </Route>
            <Route path="/paynow/:id" element={<PayNow />}>
            </Route>
            <Route path="*" element={<NotFound />}>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

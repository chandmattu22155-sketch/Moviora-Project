import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import DetailPage from "../pages/DetailPage";

function AppRoutes() {
    return (

        <Routes>
         <Route path='/' element={<Home /> } />
         <Route path="/detail/:id" element={<DetailPage />}/>
        </Routes>
    )
}
export default AppRoutes;





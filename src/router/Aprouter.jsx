import {Route, Routes}  from  "react-router-dom";
import {RegisterPage} from "../pages/RegisterPage";
import { Homepage } from "../pages/Homepage";
import {Panel} from "../pages/Panel";
import {Loginpage} from "../pages/Loginpage";
import {Navbar} from "../Navbar";
import { PrivateRoute } from "./privateRoute";


export const Aprouter = () => {
  return <>
        <Routes>
          <Route path="/" element={<Navbar/>}>
            <Route index element={<Homepage />}/>
            <Route path='register' element={<RegisterPage />}/>
            <Route path='panel' element={
              <PrivateRoute>
                <Panel/>
              </PrivateRoute>
            }/>
            <Route path='login' element={<Loginpage />}/>
          </Route>
        </Routes>
         </>;
};
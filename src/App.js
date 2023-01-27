import './assets/style.css'
import {Route, Routes} from "react-router-dom";
import {ROUTES} from "./constant/ROUTES";
import {Login, Products, ProtectedRoute} from "./pages";
function App() {
  return (
      <div className={"max-w-screen h-screen"}>
        <Routes>
          <Route path={"/"} element={<ProtectedRoute/>}>
            <Route path={ROUTES.package.list} element={<Products/>} index={true}/>
          </Route>
          <Route path={ROUTES.auth.login} element={<Login/>} />
        </Routes>
      </div>
  );
}

export default App;

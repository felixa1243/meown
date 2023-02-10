import './assets/style.css'
import {Route, Routes} from "react-router-dom";
import {ROUTES} from "./constant/ROUTES";
import {
    AddProduct,
    Home,
    Login,
    NotFound,
    Order,
    OrderDetail,
    ProductDetail,
    Products,
    ProtectedRoute,
    User,
    UserDetail
} from "./pages";

function App() {
    return (
        <div className={"max-w-screen h-screen bg-brand-secondary"}>
            <Routes>
                <Route path={ROUTES.home} element={<Home/>}/>
                <Route element={<ProtectedRoute/>}>
                    <Route path={ROUTES.package.list}
                           element={<Products/>}
                           index={true}
                    />

                    <Route path={`${ROUTES.package.byId}/:id`} element={<ProductDetail/>}/>

                    <Route path={ROUTES.user.list}
                           element={<User/>}
                           index={true}
                    />

                    <Route path={ROUTES.package.add} element={<AddProduct/>}/>

                    <Route path={`${ROUTES.user.byId}/:id`} element={<UserDetail/>}/>

                    <Route path={ROUTES.transaction.list}
                           element={<Order/>}
                           index={true}
                    />

                    <Route path={`${ROUTES.transaction.byId}/:id`} element={<OrderDetail/>}/>

                </Route>
                <Route path={ROUTES.auth.login} element={<Login/>} index={true}/>
                <Route path={"*"} element={<NotFound/>}/>
            </Routes>
        </div>
    );
}

export default App;
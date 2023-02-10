import {Route, Routes} from "react-router-dom";
import {ROUTES} from "./ROUTES";
import {
    EditUser,
    Home,
    Login,
    NotFound,
    Order,
    OrderDetail,
    PackageDetail,
    Packages,
    ProtectedRoute,
    User,
    UserDetail
} from "../../pages";
import EditPackage from "../../pages/Edit/Packages/Index";

const Routing = () => {
    return (
        <Routes>
            <Route path={ROUTES.home} element={<Home/>}/>
            <Route element={<ProtectedRoute/>}>
                <Route path={ROUTES.package.list}
                       element={<Packages/>}
                       index={true}
                />
                <Route path={ROUTES.user.list}
                       element={<User/>}
                />
                <Route path={`${ROUTES.package.byId}/:id`}
                       element={<PackageDetail/>}/>
                <Route path={`${ROUTES.package.edit}/:id`}
                       element={<EditPackage/>}/>
                <Route path={`${ROUTES.user.byId}/:id`}
                       element={<UserDetail/>}/>
                <Route path={`${ROUTES.user.edit}/:id`}
                       element={<EditUser/>}
                />
                <Route path={ROUTES.transaction.list}
                       element={<Order/>}
                />
                <Route path={`${ROUTES.transaction.byId}/:id`}
                       element={<OrderDetail/>}/>

            </Route>
            <Route path={ROUTES.auth.login} element={<Login/>} index={true}/>
            <Route path={"*"} element={<NotFound/>}/>
        </Routes>
    );
}
export default Routing
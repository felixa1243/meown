import {Route, Routes, useLocation} from "react-router-dom";
import {ROUTES} from "./ROUTES";
import {
    AddPackage,
    EditPackages,
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
import {AnimatePresence} from "framer-motion";

const Routing = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
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
                    <Route path={ROUTES.package.add}
                           element={<AddPackage/>}
                    />
                    <Route path={`${ROUTES.package.edit}/:id`}
                           element={<EditPackages/>}/>
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
        </AnimatePresence>
    );
}
export default Routing
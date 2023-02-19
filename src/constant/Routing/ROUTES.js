export const ROUTES = {
    home: "/",
    auth: {
        root: "/auth",
        login: "/auth/login"
    },
    package: {
        list: "/packages",
        byId: "/packages",
        add: "/packages/add",
        edit: "/packages/edit"
    },
    cats: {
        list: "/admin/cats",
        byId: "/cats",
        edit: "/cats/edit"
    },
    user: {
        list: "/users",
        byId: "/user",
        edit: "/user/edit"
    },
    transaction: {
        list: "/transactions",
        byId: "/transactions",
        edit: "/edit/transactions"
    },
    incomingOrder: "/incoming",
    dashboard: "/dashboard"
}
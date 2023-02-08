export const ROUTES = {
    home:"/",
    auth: {
        root:"/auth",
        login: "/auth/login"
    },
    package: {
        list: "/packages",
        byId: "/packages",
        add: "/packages/add",
        edit: "/packages/edit/:id"
    },
    cats: {
        list: "/admin/cats",
        byId: "/cats/:id",
        edit: "/cats/edit/:id"
    },
    user: {
        list: "/users",
        byId: "/users/:id",
        edit: "/users/edit/:id"
    },
    transaction: {
        list: "/transactions",
        byId: "/transactions/:id"
    }
}
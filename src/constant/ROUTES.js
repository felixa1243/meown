export const ROUTES = {
    auth: {
        root:"/auth",
        login: "/auth/login"
    },
    package: {
        list: "/package",
        byId: "/package/:id",
        add: "/pac/add",
        edit: "/products/edit/:id"
    },
    cats: {
        list: "/cats",
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
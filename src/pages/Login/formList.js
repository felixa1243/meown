import {changeEmail, changePassword} from "./actions/loginActions";

export const formList = [
    {
        label: 'email',
        onChange: changeEmail
    },
    {
        label: 'password',
        onChange: changePassword
    }
]
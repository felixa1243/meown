import {changeEmail, changePassword} from "./actions/loginActions";

export const formList = [
    {
        label: 'email',
        onChange: changeEmail,
        type: 'email'
    },
    {
        label: 'password',
        onChange: changePassword,
        type: 'password',
    }
]
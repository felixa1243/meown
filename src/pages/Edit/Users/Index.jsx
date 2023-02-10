import Edit from "../Index";
import {ROUTES} from "../../../constant/Routing/ROUTES";
import {ACTIONS_TYPE} from "../../../constant/actions/actionsType";
import {userReducer, userState} from "../../../constant/reducers/userReducers";
import {editUser} from "../../../service/UserService";

const EditUser = () => {
    const formInputs = [
        {
            label: 'Name',
            type: 'text',
            action: ACTIONS_TYPE.user.CHANGE_NAME
        },
        {
            label: 'Address',
            type: 'textarea',
            action: ACTIONS_TYPE.user.CHANGE_ADDRESS
        },
        {
            label: 'Phone',
            type: 'text',
            action: ACTIONS_TYPE.user.CHANGE_PHONE
        }
    ]
    return (
        <div>
            <Edit
                formList={formInputs}
                initialState={userState}
                reducer={userReducer}
                editService={editUser}
                backPath={ROUTES.user.list}
                section={"Edit User"}
            />
        </div>
    )
}
export default EditUser
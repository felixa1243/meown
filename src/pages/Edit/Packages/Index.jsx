import Edit from "../Index";
import {packageReducer, packageState} from "../../../constant/reducers/packageReducer";
import {ACTIONS_TYPE} from "../../../constant/actions/actionsType";
import {editPackage} from "../../../service/PackageService";
import {ROUTES} from "../../../constant/Routing/ROUTES";

const EditPackage = () => {
    const formInputs = [{
        label: 'Package Name',
        type: 'text',
        action: ACTIONS_TYPE.packages.CHANGE_NAME
    },
        {
            label: 'Description',
            type: 'textarea',
            action: ACTIONS_TYPE.packages.CHANGE_DESCRIPTION
        },
        {
            label: 'Price',
            type: 'number',
            action: ACTIONS_TYPE.packages.CHANGE_PRICE
        }
    ]
    return (
        <div>
            <Edit
                formList={formInputs}
                initialState={packageState}
                reducer={packageReducer}
                editService={editPackage}
                backPath={ROUTES.package.list}
                section={"Edit package"}
            />
        </div>
    )
}
export default EditPackage
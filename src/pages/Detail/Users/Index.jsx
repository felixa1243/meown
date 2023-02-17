import Detail from "../Index";
import {ROUTES} from "../../../constant/Routing/ROUTES";
import {deleteUser, getUserById} from "../../../service/UserService";

const UserDetails = ({data}) => {
    return (
        <div className={'w-full'}>
            <div className={'flex'}>
                <div className={'w-1/2 flex flex-col'}>
                    <p className={'font-bold'}>Id</p>
                    <p className={'font-bold'}>UserName</p>
                    <p className={'font-bold'}>Address</p>
                    <p className={'font-bold'}>Phone Number</p>
                    <p className={'font-bold'}>Role</p>
                </div>
                <div className={'w-1/2 flex flex-col font-bold'}>
                    <p>{data?.data.userId}</p>
                    <p>{data?.data.userName}</p>
                    <p>{data?.data.address}</p>
                    <p>{data?.data.phoneNumber}</p>
                    <p>{data?.data.role.toLowerCase()}</p>
                </div>
            </div>
        </div>
    )
}

export default Detail(UserDetails, {
    getService: getUserById,
    back: ROUTES.user.list,
    edit: ROUTES.user.edit + '/',
    deleteService: deleteUser
});
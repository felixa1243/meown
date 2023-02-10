import Detail from "../Index";
import {ROUTES} from "../../../constant/Routing/ROUTES";
import {deleteUser, getUserById} from "../../../service/UserService";

const UserDetails = ({data}) => {
    console.log(data)
    return (
        <div className={'w-full'}>
            <div className={'flex'}>
                <div className={'q-1/2 flex flex-col'}>
                    <p className={'font-bold'}>Id</p>
                    <p className={'font-bold'}>UserName</p>
                    <p className={'font-bold'}>Address</p>
                    <p className={'font-bold'}>Phone Number</p>
                </div>
                <div className={'w-1/2 flex flex-col'}>
                    {
                        data && Object.keys(data?.data).map(
                            (k, index) => {
                                if (index !== 2) {
                                    return (
                                        <p className={'font-bold'}
                                           key={index}>: {data?.data[k]}</p>
                                    )
                                } else {
                                    return (
                                        <p className={'font-bold'}
                                           key={index}>: {data?.data[k].city}</p>
                                    )
                                }
                            }
                        )

                    }

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
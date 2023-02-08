import Detail from "../Index";
import {Card} from "../../../components/Index";
import {ROUTES} from "../../../constant/ROUTES";
import {getUserById} from "../../../service/UserService";

const UserDetails = ({data}) => {
    // console.log(data)
    return (
        <Card className={'w-full rounded-lg p-5 p-5 font-bold font-poppins'}>
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
                                if(index !== 2){
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
        </Card>
    )
}

export default Detail(UserDetails, {
    getService: getUserById,
    back: ROUTES.user.list
});
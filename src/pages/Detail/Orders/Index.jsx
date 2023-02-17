import Detail from "../Index";
import {ROUTES} from "../../../constant/Routing/ROUTES";
import {deleteOrder, getOrderById} from "../../../service/OrderService";

const TransactionDetails = ({data}) => {
    return (
        <div className={'w-full rounded-lg p-5 p-5 font-bold font-poppins'}>
            <div className={'flex'}>
                <div className={'w-1/2 flex flex-col'}>
                    <p className={'font-bold'}>Transaction Id</p>
                    <p className={'font-bold'}>Grooming Package</p>
                    <p className={'font-bold'}>Price</p>
                    <p className={'font-bold'}>Status</p>
                </div>
                <div className={'w-1/2 flex flex-col font-bold'}>
                    <p>{data?.data.transactionId}</p>
                    <p>{data?.data.packet.packageName}</p>
                    <p>{data?.data.packet.price}</p>
                    <p>{data?.data.status}</p>
                </div>
            </div>
        </div>
    )
}

export default Detail(TransactionDetails, {
    getService: getOrderById,
    back: ROUTES.transaction.list,
    edit: ROUTES.transaction.edit + '/',
    deleteService: deleteOrder
});
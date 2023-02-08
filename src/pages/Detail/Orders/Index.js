import Detail from "../Index";
import {Card} from "../../../components/Index";
import {ROUTES} from "../../../constant/ROUTES";
import {getOrderById} from "../../../service/OrderService";

const TransactionDetails = ({data}) => {
    console.log("asdfgh ",data)
    return (
        <Card className={'w-full rounded-lg p-5 p-5 font-bold font-poppins'}>
            <div className={'flex'}>
                <div className={'w-1/2 flex flex-col'}>
                    <p className={'font-bold'}>Transaction Id</p>
                    <p className={'font-bold'}>Grooming Package</p>
                    <p className={'font-bold'}>Price</p>
                    <p className={'font-bold'}>Status</p>
                </div>
                <div className={'w-1/2 flex flex-col font-bold'}>
                    <p>{data?.data.transactionId}</p>
                    <p>{data?.data.package.packageName}</p>
                    <p>{data?.data.package.price}</p>
                    <p>{data?.data.status.statusName}</p>
                </div>
            </div>
        </Card>
    )
}

export default Detail(TransactionDetails, {
    getService: getOrderById,
    back: ROUTES.transaction.list
});
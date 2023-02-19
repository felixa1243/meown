import useFetch from "../../../../hook/useFetch";
import {getOrder} from "../../../../service/OrderService";
import {Card} from "../../../../components/Index";
import {formatCurrency} from "../../../../utils/currency";

function CustomerSection(props) {
    return (
        <div className={"w-full"}>
            <h3 className={"text-lg font-bold"}>Customers</h3>
            <div className={"w-full flex"}>
                <Half>
                    <p>Name</p>
                    <p>Address</p>
                </Half>
                <Half>
                    <p>: {props.item.user.userName}</p>
                    <p>: {props.item.user.address}</p>
                </Half>
            </div>
        </div>
    )
}


function PackageSection(props) {
    return (
        <div>
            <h3 className={"text-lg font-bold mt-2"}>Package</h3>
            <div className={"w-full flex"}>
                <Half>
                    <p>Package Name</p>
                    <p>Price</p>
                </Half>
                <Half>
                    <p>: {props.item.packet.packageName}</p>
                    <p>: {formatCurrency(props.item.packet.price)}</p>
                </Half>
            </div>
        </div>
    )
}

const Paid = () => {
    const [resp, error, loading] = useFetch(getOrder("paid"))
    return (
        <div className={"h-full mt-2 py-5"}>
            {
                resp && resp?.data?.length < 1 ? (<p>empty</p>) : (
                    <>{
                        resp?.data.map(item => {
                            return (
                                <Card className={"w-full mb-3 mt-8 p-5 rounded-lg shadow-md"} key={item.transactionId}>
                                    <p className={"text-gray-400"}>{item.transactionId}</p>
                                    <div className={"w-full"}>
                                        <CustomerSection
                                            item={item}/>
                                        <PackageSection
                                            item={item}/>
                                        <h3 className={"text-lg font-bold mt-2"}>Cat</h3>
                                        <div className={"flex"}>
                                            <Half>Cat name: </Half>
                                            <Half>{item.cat.name}</Half>
                                        </div>
                                    </div>
                                </Card>
                            )
                        })
                    }
                    </>
                )
            }
        </div>
    )
}
const Half = ({children}) => {
    return (
        <div className={"w-1/2"}>
            {children}
        </div>
    )
}
export default Paid
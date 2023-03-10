import {Button, Card} from "../../../../components/Index";
import {ROUTES} from "../../../../constant/Routing/ROUTES";
import {useNavigate} from "react-router-dom";

const RenderComponent = ({list,...props}) => {
    const navigate = useNavigate()

    return (
        <div className={'p-5 flex flex-col gap-3'} {...props}>
            {
                list?.map((item) => {
                    return (
                        <Card className={'p-5 rounded-lg'} key={item.transactionId}>
                            <div className={'w-full flex items-center'}>
                                <div className={'w-1/2'}>
                                    <div className={'flex flex-col gap-2'}>
                                        <p className={"text-brand-primary font-bold font-poppins text-lg"}>{item.transactionId}</p>
                                        <p className={'text-xl font-bold'}>{item.packet.packageName}</p>
                                        <p className={'text-gray-400'}>{item.status}</p>
                                    </div>
                                </div>
                                <div className={'w-1/2 flex justify-end'}>
                                    <Button className={'w-[100px] font-bold'} onClick={() =>navigate(`${ROUTES.transaction.byId}/${item.transactionId}`)}>Details</Button>
                                </div>
                            </div>
                        </Card>
                    )
                })
            }
        </div>
    )
}
export default RenderComponent
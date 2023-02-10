import {Button, Card} from "../../../../components/Index";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../../../constant/Routing/ROUTES";
import {formatCurrency} from "../../../../utils/currency";
import {MdAdd} from "react-icons/md";

const RenderComponent = ({list, ...props}) => {
    const navigate = useNavigate()
    return (
        <div className={'p-5 flex flex-col gap-3 bg-brand-secondary'} {...props}>
            <div className={'w-full flex justify-end'}>
                <Button
                    variants={"success"}
                    className={"w-20 items-center"}
                    onClick={()=>navigate(ROUTES.package.add)}
                >Add <MdAdd/></Button>
            </div>
            {
                list?.map((item) => {
                    return (
                        <Card className={'p-5 rounded-lg'} key={item.packageId}>
                            <div className={'w-full flex items-center'}>
                                <div className={'w-1/2'}>
                                    <div className={'flex flex-col gap-2'}>
                                        <p className={"text-brand-primary font-bold font-poppins text-lg"}>{item.packageId}</p>
                                        <p className={'text-xl font-bold'}>{item.packageName}</p>
                                        <p className={'text-brand-primary font-bold'}>{formatCurrency(item.price)}</p>
                                    </div>
                                </div>
                                <div className={'w-1/2 flex justify-end'}>
                                    <Button className={'w-24 font-bold flex justify-center'}
                                            onClick={() => navigate(`${ROUTES.package.byId}/${item.packageId}`)}
                                    >Details</Button>
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
import {Button, Card} from "../../../../components/Index";

const ListComponent = ({list,...props}) => {
    return (
        <div className={'p-5 flex flex-col gap-3'} {...props}>
            {
                list?.map((item) => {
                    return (
                        <Card className={'p-5 rounded-lg'} key={item.packageId}>
                            <div className={'w-full flex items-center'}>
                                <div className={'w-1/2'}>
                                    <div className={'flex flex-col gap-2'}>
                                        <p className={"text-brand-primary font-bold font-poppins text-lg"}>{item.packageId}</p>
                                        <p className={'text-xl font-bold'}>{item.packageName}</p>
                                        <p className={'text-brand-primary font-bold'}>Rp.{item.price}</p>
                                    </div>
                                </div>
                                <div className={'w-1/2 flex justify-end'}>
                                    <Button className={'w-[100px] font-bold'}>Details</Button>
                                </div>
                            </div>
                        </Card>
                    )
                })
            }
        </div>
    )
}
export default ListComponent